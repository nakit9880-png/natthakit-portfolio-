// Main Application Orchestrator for Natthakit Khwala Portfolio
class PortfolioApp {
  constructor() {
    this.storage = window.portfolioStorage;
    this.data = this.storage.loadData();
    this.isAdmin = sessionStorage.getItem("admin_session_active") === "true";
    this.isEditMode = false;
    this.adminModalOpen = false;
    this.projectFilter = "all";
    this.activeDetailModal = null;

    this.init();
  }

  init() {
    this.applyTheme(this.data.settings?.theme || "blueprint");
    this.applyFxSettings();
    this.setupKeyboardShortcuts();
    this.render();

    // Re-render and setup canvas when DOM is ready
    window.addEventListener("DOMContentLoaded", () => {
      this.render();
      if (window.portfolioCanvas) {
        window.portfolioCanvas.init();
      }
    });

    // Resize canvas appropriately on window resize
    window.addEventListener("resize", () => {
      if (window.portfolioCanvas) {
        window.portfolioCanvas.init();
      }
    });

    // Setup In-Place Edit event listener for contenteditable
    document.addEventListener("blur", (e) => {
      if (this.isEditMode && e.target && e.target.hasAttribute("data-editable")) {
        this.handleInPlaceEdit(e.target);
      }
    }, true);
  }

  // Keyboard shortcut listener for hidden login (Ctrl+Alt+P)
  setupKeyboardShortcuts() {
    window.addEventListener("keydown", (e) => {
      // Ctrl + Alt + P
      if (e.ctrlKey && e.altKey && (e.key === "p" || e.key === "P" || e.code === "KeyP")) {
        e.preventDefault();
        this.openAdminModal();
      }

      // Escape key to close modals
      if (e.key === "Escape") {
        this.closeAllModals();
      }
    });
  }

  render() {
    const appEl = document.getElementById("app");
    if (!appEl) return;

    if (this.isEditMode) {
      document.body.classList.add("is-editing");
    } else {
      document.body.classList.remove("is-editing");
    }

    appEl.innerHTML = `
      ${renderNavbar(this.data, this.isAdmin, this.isEditMode)}
      <main>
        ${renderHero(this.data, this.isAdmin, this.isEditMode)}
        ${renderProfileSection(this.data, this.isAdmin, this.isEditMode)}
        ${renderEducationSection(this.data, this.isAdmin, this.isEditMode)}
        ${renderCoursesSection(this.data, this.isAdmin, this.isEditMode)}
        ${renderProjectsSection(this.data, this.isAdmin, this.isEditMode, this.projectFilter)}
        ${renderDrawingWidget(this.data, this.isAdmin, this.isEditMode)}
      </main>
      ${renderFooter(this.data, this.isAdmin, this.isEditMode)}
      ${renderAdminModal(this.adminModalOpen)}
      ${renderAdminToolbar(this.data, this.isAdmin, this.isEditMode)}
      ${this.renderDetailModal()}
    `;

    // Re-initialize sketchpad canvas
    setTimeout(() => {
      if (window.portfolioCanvas) {
        window.portfolioCanvas.init();
      }
    }, 50);
  }

  // Handle in-place live text modifications
  handleInPlaceEdit(element) {
    const path = element.getAttribute("data-editable");
    if (!path) return;

    const value = element.innerText.trim();
    const parts = path.split(".");
    
    let current = this.data;
    for (let i = 0; i < parts.length - 1; i++) {
      if (!current[parts[i]]) current[parts[i]] = {};
      current = current[parts[i]];
    }
    current[parts[parts.length - 1]] = value;

    this.storage.saveData(this.data);
    this.showToast("บันทึกการแก้ไขเรียบร้อยแล้ว");
  }

  // Theme Switching
  setTheme(theme) {
    this.data.settings.theme = theme;
    this.applyTheme(theme);
    this.storage.saveData(this.data);
    this.render();
  }

  applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
  }

  // Visual FX Toggles
  toggleFx(key, enabled) {
    if (!this.data.settings) this.data.settings = {};
    this.data.settings[key] = enabled;
    this.applyFxSettings();
    this.storage.saveData(this.data);
    this.render();
  }

  applyFxSettings() {
    const settings = this.data.settings || {};
    
    if (settings.gridPattern === false) {
      document.body.classList.remove("bg-grid-blueprint");
    } else {
      document.body.classList.add("bg-grid-blueprint");
    }

    if (settings.cornerCross === false) {
      document.querySelectorAll(".corner-cross").forEach(el => el.classList.remove("corner-cross"));
    }
  }

  // Admin Authentication
  openAdminModal() {
    this.adminModalOpen = true;
    this.render();
    setTimeout(() => {
      const pwd = document.getElementById("admin-password");
      if (pwd) pwd.focus();
    }, 100);
  }

  closeAdminModal() {
    this.adminModalOpen = false;
    this.render();
  }

  handleAdminLogin(e) {
    e.preventDefault();
    const user = document.getElementById("admin-username").value.trim();
    const pass = document.getElementById("admin-password").value.trim();

    const validUser = this.data.settings?.adminUsername || "Natthakit";
    const validPass = this.data.settings?.adminPassword || "69322110062-0";

    if (user.toLowerCase() === validUser.toLowerCase() && pass === validPass) {
      this.isAdmin = true;
      this.isEditMode = true;
      this.adminModalOpen = false;
      sessionStorage.setItem("admin_session_active", "true");
      this.render();
      this.showToast("ยินดีต้อนรับเข้าสู่ระบบจัดการ Natthakit!");
    } else {
      const err = document.getElementById("admin-error-msg");
      if (err) err.classList.remove("hidden");
    }
  }

  logoutAdmin() {
    this.isAdmin = false;
    this.isEditMode = false;
    sessionStorage.removeItem("admin_session_active");
    this.render();
    this.showToast("ออกจากระบบจัดการเรียบร้อยแล้ว");
  }

  toggleEditMode() {
    this.isEditMode = !this.isEditMode;
    this.render();
    this.showToast(this.isEditMode ? "เปิดโหมดแก้ไข In-Place Live Edit" : "ปิดโหมดแก้ไข");
  }

  toggleSettingsDrawer() {
    const el = document.getElementById("settings-drawer");
    if (el) el.classList.toggle("hidden");
  }

  openUploadDialog() {
    const el = document.getElementById("universal-upload-dialog");
    if (el) el.classList.remove("hidden");
  }

  closeUploadDialog() {
    const el = document.getElementById("universal-upload-dialog");
    if (el) el.classList.add("hidden");
  }

  // Handle Universal File Upload (IndexedDB)
  async processUniversalFile(input) {
    const file = input.files && input.files[0];
    if (!file) return;

    const statusEl = document.getElementById("upload-status-display");
    if (statusEl) {
      statusEl.classList.remove("hidden");
      statusEl.innerHTML = `กำลังประมวลผลไฟล์: ${file.name} (${(file.size / 1024 / 1024).toFixed(2)} MB)...`;
    }

    try {
      const record = await this.storage.saveFile(file);
      if (statusEl) {
        statusEl.innerHTML = `
          <div class="text-green-600 font-bold mb-1">✓ อัปโหลดสำเร็จแล้ว!</div>
          <div>ชื่อไฟล์: ${record.name}</div>
          <div>ประเภท: ${record.type || 'Binary Document'}</div>
          <div>FILE ID: <code class="bg-[var(--bg-card)] px-1">${record.id}</code></div>
          <div class="mt-2 text-[10px] text-[var(--text-muted)]">ไฟล์ถูกจัดเก็บใน IndexedDB อย่างปลอดภัยและพร้อมใช้งาน</div>
        `;
      }
      this.showToast(`บันทึกไฟล์ ${file.name} สำเร็จแล้ว`);
    } catch (err) {
      if (statusEl) {
        statusEl.innerHTML = `<span class="text-red-600">เกิดข้อผิดพลาดในการจัดเก็บไฟล์: ${err.message}</span>`;
      }
    }
  }

  // Handle Avatar Image Upload
  async handleAvatarUpload(input) {
    const file = input.files && input.files[0];
    if (!file) return;

    try {
      const reader = new FileReader();
      reader.onload = (e) => {
        const dataUrl = e.target.result;
        this.data.profile.avatarUrl = dataUrl;
        this.storage.saveData(this.data);
        this.render();
        this.showToast("เปลี่ยนรูปประจำตัวเรียบร้อยแล้ว");
      };
      reader.readAsDataURL(file);
    } catch (e) {
      alert("ไม่สามารถโหลดรูปภาพได้: " + e.message);
    }
  }

  // Category Filtering
  setProjectFilter(category) {
    this.projectFilter = category;
    this.render();
  }

  // Detailed Modal Viewer (Projects & Courseworks)
  viewProjectDetail(projectId) {
    const project = this.data.projects.find(p => p.id === projectId);
    if (!project) return;
    this.activeDetailModal = { type: "project", data: project };
    this.render();
  }

  viewWorkpieceDetail(courseId, wpId) {
    const course = this.data.courses.find(c => c.id === courseId);
    if (!course) return;
    const wp = (course.workpieces || []).find(w => w.id === wpId);
    if (!wp) return;
    this.activeDetailModal = { type: "workpiece", course, data: wp };
    this.render();
  }

  closeAllModals() {
    this.adminModalOpen = false;
    this.activeDetailModal = null;
    const settings = document.getElementById("settings-drawer");
    if (settings) settings.classList.add("hidden");
    const upload = document.getElementById("universal-upload-dialog");
    if (upload) upload.classList.add("hidden");
    this.render();
  }

  renderDetailModal() {
    if (!this.activeDetailModal) return '';
    const { type, data, course } = this.activeDetailModal;

    return `
      <div class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
        <div class="tech-box w-full max-w-2xl bg-[var(--bg-card)] border-2 border-[var(--border-color)] shadow-2xl relative corner-cross max-h-[90vh] overflow-y-auto">
          
          <!-- Top Bar -->
          <div class="p-4 bg-[var(--bg-elevated)] border-b border-[var(--border-color)] flex items-center justify-between sticky top-0 z-10">
            <span class="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--accent-primary)]">
              ${type === 'project' ? 'PROJECT SPECIFICATION' : 'COURSEWORK ARTIFACT'}
            </span>
            <button onclick="window.portfolioApp.closeAllModals()" class="font-mono text-sm px-2 py-0.5 border border-[var(--border-subtle)] hover:border-[var(--border-color)]">
              [ESC / ✕]
            </button>
          </div>

          <!-- Body -->
          <div class="p-6 space-y-4">
            ${type === 'project' ? `
              <div class="aspect-[16/9] border border-[var(--border-color)] overflow-hidden bg-slate-900">
                <img src="${data.imageUrl || 'assets/reference-grid.webp'}" alt="${data.title}" class="w-full h-full object-cover"/>
              </div>

              <div>
                <span class="tech-tag text-[10px] mb-2">${data.categoryLabel || data.category}</span>
                <h2 class="font-display font-black text-2xl text-[var(--text-primary)] mt-1">${data.title}</h2>
                <div class="font-mono-tech text-xs text-[var(--text-muted)] mt-1">YEAR: ${data.date} • METRIC: ${data.metrics}</div>
              </div>

              <div class="pt-3 border-t border-[var(--border-subtle)] font-thai text-sm text-[var(--text-secondary)] leading-relaxed space-y-2">
                <p><strong>คำอธิบายผลงาน:</strong> ${data.description}</p>
                <p><strong>รายละเอียดเชิงลึก:</strong> ${data.details || 'ไม่มีรายละเอียดเพิ่มเติม'}</p>
              </div>

              <div class="flex flex-wrap gap-2 pt-2">
                ${(data.tags || []).map(t => `<span class="tech-tag text-[10px]">#${t}</span>`).join('')}
              </div>
            ` : `
              <div>
                <div class="font-mono-tech text-xs text-[var(--accent-primary)] mb-1">รายวิชา: ${course.code} - ${course.name}</div>
                <h2 class="font-display font-black text-2xl text-[var(--text-primary)]">${data.title}</h2>
                <div class="font-mono-tech text-xs text-[var(--text-muted)] mt-1">DATE: ${data.date} • TYPE: ${data.type}</div>
              </div>

              <div class="p-4 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] font-thai text-sm text-[var(--text-secondary)]">
                <p class="font-semibold text-[var(--text-primary)] mb-1">สรุปสาระสำคัญของชิ้นงาน:</p>
                <p>${data.summary}</p>
              </div>

              <div class="p-3 border border-dashed border-[var(--border-color)] bg-[var(--bg-card)] flex items-center justify-between text-xs font-mono-tech">
                <span>STATUS: VERIFIED ACADEMIC ARTIFACT</span>
                <span class="text-green-600 font-bold">● ARCHIVED</span>
              </div>
            `}
          </div>

          <!-- Bottom Footer -->
          <div class="p-4 bg-[var(--bg-elevated)] border-t border-[var(--border-color)] flex justify-end">
            <button onclick="window.portfolioApp.closeAllModals()" class="btn-tech-primary text-xs py-1.5 px-4">
              ปิดหน้าต่าง
            </button>
          </div>

        </div>
      </div>
    `;
  }

  // Course Management
  addNewCoursePrompt() {
    const code = prompt("ระบุรหัสวิชา (เช่น 04-031-201):", "04-031-201");
    if (!code) return;
    const name = prompt("ระบุชื่อวิชา:", "การวิเคราะห์ระบบไฟฟ้า (Power Systems Analysis)");
    if (!name) return;
    const desc = prompt("ระบุคำอธิบายรายวิชา:", "การศึกษาแบบจำลองระบบไฟฟ้ากำลัง การคำนวณโหลดโฟลว์ และการวิเคราะห์ฟอลต์");

    const newCourse = {
      id: "c-" + Date.now(),
      code,
      name,
      credits: "3 (3-0-6)",
      term: "1/2568",
      instructor: "อ.ประจำสาขา",
      description: desc || "คำอธิบายรายวิชา",
      workpieces: []
    };

    this.data.courses.push(newCourse);
    this.storage.saveData(this.data);
    this.render();
    this.showToast("เพิ่มรายวิชาใหม่เรียบร้อยแล้ว");
  }

  addWorkpiecePrompt(courseId) {
    const title = prompt("ระบุชื่อชิ้นงาน / รายงาน / สื่อ:", "รายงานการทดลองและจำลองวงจร");
    if (!title) return;
    const summary = prompt("ระบุสรุปชิ้นงาน:", "การทดสอบและวิเคราะห์ผลการปฏิบัติการ");

    const course = this.data.courses.find(c => c.id === courseId);
    if (!course) return;

    if (!course.workpieces) course.workpieces = [];
    course.workpieces.push({
      id: "w-" + Date.now(),
      title,
      type: "Coursework / Report",
      date: "2567",
      summary: summary || "",
      tag: "NEW WORK"
    });

    this.storage.saveData(this.data);
    this.render();
    this.showToast("เพิ่มชิ้นงานในรายวิชาสำเร็จ");
  }

  editCourse(courseId) {
    const course = this.data.courses.find(c => c.id === courseId);
    if (!course) return;
    const newName = prompt("แก้ไขชื่อวิชา:", course.name);
    if (newName !== null) course.name = newName;
    const newDesc = prompt("แก้ไขคำอธิบายรายวิชา:", course.description);
    if (newDesc !== null) course.description = newDesc;
    this.storage.saveData(this.data);
    this.render();
    this.showToast("อัปเดตข้อมูลรายวิชาเรียบร้อยแล้ว");
  }

  editProject(projectId) {
    const project = this.data.projects.find(p => p.id === projectId);
    if (!project) return;
    const newTitle = prompt("แก้ไขชื่อผลงาน:", project.title);
    if (newTitle !== null) project.title = newTitle;
    const newDesc = prompt("แก้ไขคำอธิบายผลงาน:", project.description);
    if (newDesc !== null) project.description = newDesc;
    const newMetrics = prompt("แก้ไขจุดเด่น / มาตรวัด:", project.metrics);
    if (newMetrics !== null) project.metrics = newMetrics;
    this.storage.saveData(this.data);
    this.render();
    this.showToast("อัปเดตข้อมูลผลงานเรียบร้อยแล้ว");
  }

  editEducationItem(id) {
    const item = this.data.education.find(e => e.id === id);
    if (!item) return;
    const newInst = prompt("แก้ไขชื่อสถาบันการศึกษา:", item.institution);
    if (newInst !== null) item.institution = newInst;
    const newGpa = prompt("แก้ไขเกรดเฉลี่ย (GPAX):", item.gpa);
    if (newGpa !== null) item.gpa = newGpa;
    this.storage.saveData(this.data);
    this.render();
    this.showToast("อัปเดตข้อมูลประวัติการศึกษาเรียบร้อยแล้ว");
  }

  deleteCourse(courseId) {
    if (!confirm("คุณแน่ใจหรือไม่ว่าต้องการลบรายวิชานี้?")) return;
    this.data.courses = this.data.courses.filter(c => c.id !== courseId);
    this.storage.saveData(this.data);
    this.render();
    this.showToast("ลบรายวิชาเรียบร้อยแล้ว");
  }

  // Project Management
  addNewProjectPrompt() {
    const title = prompt("ระบุชื่อโครงการ / กิจกรรม:", "โครงงานติดตั้งระบบโซลาร์เซลล์ขนาดเล็ก");
    if (!title) return;
    const desc = prompt("ระบุคำอธิบายโครงการ:", "การคำนวณขนาดแผงโซลาร์ แบตเตอรี่ และอินเวอร์เตอร์สำหรับระบบส่องสว่าง");

    const newProject = {
      id: "p-" + Date.now(),
      title,
      category: "electrical",
      categoryLabel: "งานไฟฟ้าและวิศวกรรม",
      date: "2567",
      description: desc || "",
      imageUrl: "assets/reference-grid.webp",
      tags: ["Solar", "Clean Energy", "Electrical"],
      details: "การออกแบบและต่อสายระบบควบคุมการประจุแบตเตอรี่",
      metrics: "ประสิทธิภาพสูง • ปลอดภัย"
    };

    this.data.projects.push(newProject);
    this.storage.saveData(this.data);
    this.render();
    this.showToast("เพิ่มผลงานใหม่เรียบร้อยแล้ว");
  }

  deleteProject(projectId) {
    if (!confirm("คุณแน่ใจหรือไม่ว่าต้องการลบผลงานนี้?")) return;
    this.data.projects = this.data.projects.filter(p => p.id !== projectId);
    this.storage.saveData(this.data);
    this.render();
    this.showToast("ลบผลงานเรียบร้อยแล้ว");
  }

  // Export / Import / Reset
  exportDataJSON() {
    this.storage.exportJSON(this.data);
    this.showToast("ดาวน์โหลดไฟล์สำรองข้อมูลเรียบร้อยแล้ว");
  }

  importDataJSON(input) {
    const file = input.files && input.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (e) => {
      try {
        const imported = JSON.parse(e.target.result);
        if (imported.profile && imported.education) {
          this.data = imported;
          this.storage.saveData(this.data);
          this.render();
          this.showToast("นำเข้าข้อมูลสำเร็จและปรับปรุงหน้าเว็บแล้ว");
        } else {
          alert("รูปแบบไฟล์ JSON ไม่ถูกต้อง");
        }
      } catch (err) {
        alert("ข้อผิดพลาดในการอ่านไฟล์ JSON: " + err.message);
      }
    };
    reader.readAsText(file);
  }

  resetToFactory() {
    if (!confirm("คุณต้องการคืนค่าเริ่มต้นทั้งหมดใช่หรือไม่? (ข้อมูลที่แก้ไขไว้จะถูกรีเซ็ต)")) return;
    this.data = this.storage.resetData();
    this.render();
    this.showToast("คืนค่าเริ่มต้นเรียบร้อยแล้ว");
  }

  saveAllChangesManual() {
    this.storage.saveData(this.data);
    this.showToast("บันทึกข้อมูลทั้งหมดลง LocalStorage สำเร็จแล้ว! 💾");
  }

  showToast(message) {
    const toast = document.createElement("div");
    toast.className = "fixed bottom-5 right-5 z-50 bg-[var(--border-color)] text-[var(--bg-card)] border border-[var(--border-color)] px-4 py-2.5 font-mono-tech text-xs shadow-2xl flex items-center gap-2 animate-bounce";
    toast.innerHTML = `<span>✓</span> <span>${message}</span>`;
    document.body.appendChild(toast);
    setTimeout(() => {
      toast.remove();
    }, 2500);
  }
}

// Instantiate global app controller
window.portfolioApp = new PortfolioApp();
