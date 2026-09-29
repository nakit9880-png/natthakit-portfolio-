// Hidden Admin Authentication Modal Component (Triggered by Ctrl+Alt+P)
function renderAdminModal(isOpen) {
  if (!isOpen) return '';

  return `
    <div id="admin-auth-overlay" class="fixed inset-0 z-50 flex items-center justify-center bg-black/75 backdrop-blur-sm p-4">
      <div class="tech-box w-full max-w-md bg-[var(--bg-card)] border-2 border-[var(--border-color)] shadow-2xl relative corner-cross animate-in fade-in zoom-in-95 duration-200">
        
        <!-- Modal Top Bar -->
        <div class="p-4 bg-[var(--bg-elevated)] border-b border-[var(--border-color)] flex items-center justify-between">
          <div class="flex items-center gap-2">
            <span class="w-2.5 h-2.5 bg-red-500 animate-pulse"></span>
            <span class="font-mono-tech text-xs font-bold uppercase tracking-wider text-[var(--text-primary)]">
              ADMINISTRATIVE ACCESS // ระบบภายใน
            </span>
          </div>
          <button 
            onclick="window.portfolioApp.closeAdminModal()"
            class="text-[var(--text-muted)] hover:text-[var(--text-primary)] font-mono text-sm px-2 py-0.5 border border-transparent hover:border-[var(--border-subtle)]"
          >
            [ESC / ✕]
          </button>
        </div>

        <!-- Form Content -->
        <div class="p-6">
          <div class="mb-4">
            <p class="font-thai text-xs text-[var(--text-secondary)]">
              เข้าสู่ระบบเพื่อแก้ไขเนื้อหาเว็บ ตกแต่งธีม อัปโหลดไฟล์ หรือปรับแต่งเอฟเฟกต์โดยไม่ต้องแก้ไขโค้ด
            </p>
          </div>

          <form id="admin-login-form" onsubmit="window.portfolioApp.handleAdminLogin(event)" class="space-y-4">
            <div>
              <label class="block font-mono-tech text-xs text-[var(--text-muted)] uppercase mb-1">
                USERNAME:
              </label>
              <input 
                type="text" 
                id="admin-username" 
                value="Natthakit" 
                required 
                class="w-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)] p-2.5 font-mono-tech text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]"
              />
            </div>

            <div>
              <label class="block font-mono-tech text-xs text-[var(--text-muted)] uppercase mb-1 flex items-center justify-between">
                <span>PASSWORD:</span>
                <span class="text-[10px] text-[var(--text-muted)] font-thai">(รหัสนักศึกษา 69322110062-0)</span>
              </label>
              <input 
                type="password" 
                id="admin-password" 
                placeholder="ระบุรหัสผ่าน..." 
                required 
                autofocus
                class="w-full bg-[var(--bg-elevated)] text-[var(--text-primary)] border border-[var(--border-color)] p-2.5 font-mono-tech text-sm focus:outline-none focus:border-[var(--accent-primary)] focus:ring-1 focus:ring-[var(--accent-primary)]"
              />
            </div>

            <div id="admin-error-msg" class="hidden text-xs font-mono-tech text-red-600 bg-red-50 dark:bg-red-950/50 p-2 border border-red-300">
              ข้อผิดพลาด: ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง
            </div>

            <div class="pt-2 flex items-center justify-end gap-3">
              <button 
                type="button" 
                onclick="window.portfolioApp.closeAdminModal()"
                class="btn-tech-secondary text-xs py-2 px-4"
              >
                ยกเลิก
              </button>
              <button 
                type="submit" 
                class="btn-tech-primary text-xs py-2 px-5"
              >
                <span>เข้าสู่ระบบ</span> <span>/</span>
              </button>
            </div>
          </form>
        </div>

        <!-- Footer Help -->
        <div class="px-6 py-3 bg-[var(--bg-elevated)] border-t border-[var(--border-subtle)] font-mono-tech text-[10px] text-[var(--text-muted)] flex items-center justify-between">
          <span>SHORTCUT: Ctrl+Alt+P</span>
          <span>AUTH ENGINE 3.0</span>
        </div>

      </div>
    </div>
  `;
}

window.renderAdminModal = renderAdminModal;
