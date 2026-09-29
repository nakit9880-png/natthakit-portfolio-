// Footer Component - Formal Academic Credit & System Status
function renderFooter(data, isAdmin, isEditMode) {
  const profile = data.profile;

  return `
    <footer id="contact" class="border-t-2 border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        
        <div class="grid grid-cols-1 md:grid-cols-12 gap-8 pb-10 border-b border-[var(--border-subtle)]">
          
          <!-- Official Academic Creator Attribution (Col 1-7) -->
          <div class="md:col-span-7 space-y-4">
            <div class="flex items-center gap-2">
              <span class="w-3 h-3 bg-[var(--accent-primary)]"></span>
              <span class="font-mono-tech text-xs tracking-widest text-[var(--accent-primary)] font-bold uppercase">
                OFFICIAL PORTFOLIO // จัดทำโดย
              </span>
            </div>

            <div class="space-y-1">
              <h3 class="font-display font-black text-2xl text-[var(--text-primary)]" data-editable="profile.fullName" contenteditable="${isEditMode}">
                ${profile.fullName}
              </h3>
              <p class="font-mono-tech text-sm text-[var(--text-muted)] font-semibold">
                รหัสนักศึกษา: <span class="text-[var(--accent-primary)]" data-editable="profile.studentId" contenteditable="${isEditMode}">${profile.studentId}</span>
              </p>
            </div>

            <div class="font-thai text-sm text-[var(--text-secondary)] space-y-0.5 leading-relaxed">
              <p class="font-semibold" data-editable="profile.university" contenteditable="${isEditMode}">
                ${profile.university}
              </p>
              <p>
                <span data-editable="profile.faculty" contenteditable="${isEditMode}">${profile.faculty}</span> • 
                <span data-editable="profile.major" contenteditable="${isEditMode}">${profile.major}</span>
              </p>
            </div>

            <div class="pt-2 flex flex-wrap items-center gap-4 text-xs font-mono-tech">
              <span class="flex items-center gap-1.5 text-[var(--text-muted)]">
                <span>📞</span> <a href="tel:${profile.phone}" class="hover:text-[var(--accent-primary)] hover:underline">${profile.phone}</a>
              </span>
              <span class="flex items-center gap-1.5 text-[var(--text-muted)]">
                <span>✉️</span> <a href="mailto:${profile.email}" class="hover:text-[var(--accent-primary)] hover:underline">${profile.email}</a>
              </span>
            </div>
          </div>

          <!-- Technical Sitemap & Quick Links (Col 8-12) -->
          <div class="md:col-span-5 flex flex-col justify-between">
            <div>
              <div class="font-mono-tech text-xs tracking-wider text-[var(--text-muted)] uppercase mb-3">
                SYSTEM NAVIGATION // สารบัญ
              </div>
              <div class="grid grid-cols-2 gap-2 text-xs font-thai text-[var(--text-secondary)]">
                <a href="#overview" class="hover:text-[var(--accent-primary)] hover:underline">01. หน้าหลัก (Overview)</a>
                <a href="#profile" class="hover:text-[var(--accent-primary)] hover:underline">02. ข้อมูลส่วนตัว (Profile)</a>
                <a href="#education" class="hover:text-[var(--accent-primary)] hover:underline">03. ประวัติการศึกษา (Education)</a>
                <a href="#courses" class="hover:text-[var(--accent-primary)] hover:underline">04. รายวิชาและชิ้นงาน (Courses)</a>
                <a href="#projects" class="hover:text-[var(--accent-primary)] hover:underline">05. กิจกรรมและผลงาน (Works)</a>
                <a href="#sketchpad" class="hover:text-[var(--accent-primary)] hover:underline">06. แคนวาสวาดภาพ (Sketchpad)</a>
              </div>
            </div>

            <!-- Back to top & Shortcut Info -->
            <div class="mt-6 pt-4 border-t border-[var(--border-subtle)] flex items-center justify-between text-xs font-mono-tech">
              <button 
                onclick="window.scrollTo({top: 0, behavior: 'smooth'})"
                class="hover:text-[var(--accent-primary)] flex items-center gap-1 font-semibold"
              >
                <span>↑ BACK TO TOP</span>
              </button>

              <span class="text-[var(--text-muted)] flex items-center gap-1">
                <span>SHORTCUT:</span>
                <kbd class="px-1.5 py-0.5 bg-[var(--bg-elevated)] border border-[var(--border-subtle)]">Ctrl+Alt+P</kbd>
              </span>
            </div>

          </div>

        </div>

        <!-- Bottom Copyright & Hidden Trigger Easter Egg -->
        <div class="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-tech text-[var(--text-muted)]">
          <div class="flex items-center gap-2">
            <span>© 2026 NATTHAKIT KHWALA. ALL RIGHTS RESERVED.</span>
            <!-- Hidden Admin Lock Icon for Touch / Mouse Users -->
            <button 
              onclick="window.portfolioApp.openAdminModal()" 
              class="opacity-30 hover:opacity-100 hover:text-[var(--accent-primary)] transition-opacity"
              title="ระบบภายใน (Secret Admin Portal)"
            >
              🔒
            </button>
          </div>
          <div>
            <span>DESIGN ENGINE: GRID.GUILD BLUEPRINT SPEC 3.0</span>
          </div>
        </div>

      </div>
    </footer>
  `;
}

window.renderFooter = renderFooter;
