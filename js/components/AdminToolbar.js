// Admin Toolbar Component - Live Site Customization & CMS Controls
function renderAdminToolbar(data, isAdmin, isEditMode) {
  if (!isAdmin) return '';

  const settings = data.settings || {};

  return `
    <aside class="admin-toolbar-dock max-w-full sm:max-w-xl p-3 font-mono-tech text-xs bg-[var(--bg-card)] border-2 border-[var(--border-color)]">
      <div class="flex flex-wrap items-center justify-between gap-2 pb-2 mb-2 border-b border-[var(--border-subtle)]">
        <div class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span class="font-bold text-[var(--text-primary)]">ADMIN PANEL: Natthakit</span>
        </div>
        <div class="flex items-center gap-2">
          <button 
            onclick="window.portfolioApp.toggleEditMode()"
            class="px-2.5 py-1 border border-[var(--border-color)] ${isEditMode ? 'bg-amber-500 text-black font-bold' : 'bg-[var(--bg-elevated)] text-[var(--text-primary)]'} transition-colors"
          >
            ${isEditMode ? '● EDITING ACTIVE' : '○ CLICK TO EDIT'}
          </button>
          <button 
            onclick="window.portfolioApp.logoutAdmin()"
            class="px-2 py-1 text-red-600 hover:bg-red-50 dark:hover:bg-red-950/40 border border-transparent hover:border-red-400"
            title="ออกจากระบบ"
          >
            LOGOUT
          </button>
        </div>
      </div>

      <!-- Quick Action Buttons -->
      <div class="flex flex-wrap items-center gap-1.5 text-[11px]">
        <button 
          onclick="window.portfolioApp.saveAllChangesManual()"
          class="btn-tech-primary py-1 px-2.5 text-[10px]"
          title="บันทึกข้อมูลทั้งหมดลงเครื่อง"
        >
          <span>SAVE ALL</span> 💾
        </button>

        <button 
          onclick="window.portfolioApp.openUploadDialog()"
          class="btn-tech-secondary py-1 px-2.5 text-[10px]"
          title="อัปโหลดไฟล์ รูปภาพ คลิป วิดีโอ หรือฟอนต์"
        >
          <span>UPLOAD FILE</span> 📁
        </button>

        <button 
          onclick="window.portfolioApp.toggleSettingsDrawer()"
          class="btn-tech-secondary py-1 px-2.5 text-[10px]"
          title="ปรับแต่งเอฟเฟกต์และหน้าตาเว็บ"
        >
          <span>VISUAL FX</span> ⚙️
        </button>

        <button 
          onclick="window.portfolioApp.exportDataJSON()"
          class="btn-tech-secondary py-1 px-2 text-[10px]"
          title="ดาวน์โหลดไฟล์สำรองข้อมูล (JSON)"
        >
          EXPORT
        </button>

        <label class="btn-tech-secondary py-1 px-2 text-[10px] cursor-pointer" title="นำเข้าไฟล์ข้อมูลสำรอง">
          IMPORT
          <input type="file" accept=".json" class="hidden" onchange="window.portfolioApp.importDataJSON(this)"/>
        </label>
      </div>

      ${isEditMode ? `
        <div class="mt-2 pt-2 border-t border-dashed border-[var(--border-subtle)] text-[10px] font-thai text-[var(--text-muted)] flex items-center justify-between">
          <span>💡 คลิกที่ข้อความบนหน้าเว็บเพื่อพิมพ์แก้ไขได้โดยตรง</span>
          <span class="font-mono-tech text-[var(--accent-primary)] font-bold">LIVE SYNC</span>
        </div>
      ` : ''}
    </aside>

    <!-- Visual FX & Decoration Settings Drawer / Modal -->
    <div id="settings-drawer" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div class="tech-box w-full max-w-lg bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 relative corner-cross">
        
        <div class="flex items-center justify-between pb-3 border-b border-[var(--border-color)] mb-4">
          <div class="font-display font-bold text-lg text-[var(--text-primary)]">
            ระบบตกแต่งและปรับแต่งเอฟเฟกต์เว็บ (Visual FX)<span class="slash-accent">/</span>
          </div>
          <button onclick="window.portfolioApp.toggleSettingsDrawer()" class="font-mono text-sm px-2 py-0.5 border border-[var(--border-subtle)]">✕</button>
        </div>

        <div class="space-y-4 font-thai text-xs">
          
          <!-- Themes List -->
          <div>
            <label class="font-mono-tech text-xs text-[var(--text-muted)] uppercase block mb-1.5 font-bold">1. โทนสีและธีม (Color Theme):</label>
            <div class="grid grid-cols-2 sm:grid-cols-3 gap-2 font-mono-tech text-xs">
              <button onclick="window.portfolioApp.setTheme('blueprint')" class="p-2 border border-[var(--border-color)] text-left hover:border-[var(--accent-primary)] bg-[#F8FAFC] text-[#09090B]">
                <div class="w-3 h-3 bg-[#0047FF] inline-block mr-1"></div> Blueprint Blue
              </button>
              <button onclick="window.portfolioApp.setTheme('monochrome')" class="p-2 border border-[var(--border-color)] text-left hover:border-[var(--accent-primary)] bg-[#FFFFFF] text-[#09090B]">
                <div class="w-3 h-3 bg-[#18181B] inline-block mr-1"></div> Monochrome
              </button>
              <button onclick="window.portfolioApp.setTheme('industrial-amber')" class="p-2 border border-[var(--border-color)] text-left hover:border-[var(--accent-primary)] bg-[#FAFAF9] text-[#1C1917]">
                <div class="w-3 h-3 bg-[#D97706] inline-block mr-1"></div> Amber Industry
              </button>
              <button onclick="window.portfolioApp.setTheme('cyber-emerald')" class="p-2 border border-[var(--border-color)] text-left hover:border-[var(--accent-primary)] bg-[#091512] text-[#ECFDF5]">
                <div class="w-3 h-3 bg-[#10B981] inline-block mr-1"></div> Emerald Circuit
              </button>
              <button onclick="window.portfolioApp.setTheme('dark-blueprint')" class="p-2 border border-[var(--border-color)] text-left hover:border-[var(--accent-primary)] bg-[#090E17] text-[#F8FAFC]">
                <div class="w-3 h-3 bg-[#38BDF8] inline-block mr-1"></div> Dark Navy
              </button>
            </div>
          </div>

          <!-- FX Toggles -->
          <div class="pt-3 border-t border-[var(--border-subtle)] space-y-2.5">
            <label class="font-mono-tech text-xs text-[var(--text-muted)] uppercase block font-bold">2. เอฟเฟกต์โครงสร้าง (Graphic Layers):</label>
            
            <label class="flex items-center justify-between p-2 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] cursor-pointer">
              <span>แสดงเส้นตารางพิมพ์เขียว (Blueprint Grid Lines)</span>
              <input type="checkbox" id="toggle-grid" ${settings.gridPattern !== false ? 'checked' : ''} onchange="window.portfolioApp.toggleFx('gridPattern', this.checked)"/>
            </label>

            <label class="flex items-center justify-between p-2 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] cursor-pointer">
              <span>แสดงลวดลายจุดกราฟิก (Dot Matrix)</span>
              <input type="checkbox" id="toggle-dots" ${settings.dotMatrix !== false ? 'checked' : ''} onchange="window.portfolioApp.toggleFx('dotMatrix', this.checked)"/>
            </label>

            <label class="flex items-center justify-between p-2 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] cursor-pointer">
              <span>แสดงเครื่องหมายกากบาทมุม (+) สไตล์รูปที่ 2</span>
              <input type="checkbox" id="toggle-corner" ${settings.cornerCross !== false ? 'checked' : ''} onchange="window.portfolioApp.toggleFx('cornerCross', this.checked)"/>
            </label>
          </div>

          <!-- Reset Button -->
          <div class="pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
            <button onclick="window.portfolioApp.resetToFactory()" class="text-xs text-red-600 hover:underline">
              คืนค่าเริ่มต้นโรงงาน (Reset All)
            </button>
            <button onclick="window.portfolioApp.toggleSettingsDrawer()" class="btn-tech-primary text-xs py-1.5 px-4">
              ตกลง
            </button>
          </div>

        </div>

      </div>
    </div>

    <!-- Universal File Upload Modal Dialog -->
    <div id="universal-upload-dialog" class="hidden fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-xs p-4">
      <div class="tech-box w-full max-w-lg bg-[var(--bg-card)] border-2 border-[var(--border-color)] p-6 relative corner-cross">
        
        <div class="flex items-center justify-between pb-3 border-b border-[var(--border-color)] mb-4">
          <div class="font-display font-bold text-lg text-[var(--text-primary)]">
            ระบบอัปโหลดไฟล์ทุกประเภท (Universal File Uploader)<span class="slash-accent">/</span>
          </div>
          <button onclick="window.portfolioApp.closeUploadDialog()" class="font-mono text-sm px-2 py-0.5 border border-[var(--border-subtle)]">✕</button>
        </div>

        <div class="space-y-4 font-thai text-xs">
          <p class="text-[var(--text-secondary)]">
            รองรับไฟล์ทุกประเภท: รูปภาพ (PNG/JPG/WebP/SVG), คลิปวิดีโอ (MP4/WebM), เอกสาร/สไลด์ (PDF), ฟอนต์ (WOFF/TTF), หรือไฟล์โค้ด โดยจัดเก็บลง IndexedDB ของเบราว์เซอร์อย่างปลอดภัย
          </p>

          <div class="border-2 border-dashed border-[var(--border-color)] p-8 text-center bg-[var(--bg-elevated)] cursor-pointer hover:bg-[var(--accent-light)] transition-colors">
            <input type="file" id="universal-file-input" class="hidden" onchange="window.portfolioApp.processUniversalFile(this)"/>
            <label for="universal-file-input" class="cursor-pointer">
              <div class="text-3xl mb-2">📁</div>
              <div class="font-display font-bold text-sm text-[var(--text-primary)]">คลิกเพื่อเลือกไฟล์ หรือลากไฟล์มาวางที่นี่</div>
              <div class="font-mono-tech text-[11px] text-[var(--text-muted)] mt-1">ALL FORMATS ACCEPTED (UP TO 100MB)</div>
            </label>
          </div>

          <div id="upload-status-display" class="hidden p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] font-mono-tech text-xs">
          </div>
        </div>

      </div>
    </div>
  `;
}

window.renderAdminToolbar = renderAdminToolbar;
