// Navbar Component - Inspired by GRID.GUILD Technical Header
function renderNavbar(data, isAdmin, isEditMode) {
  const currentTheme = data.settings?.theme || 'blueprint';

  return `
    <header class="sticky top-0 z-40 bg-[var(--bg-card)] border-b border-[var(--border-color)] transition-colors">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex items-center justify-between h-16">
          
          <!-- Logo & Student Identification -->
          <div class="flex items-center gap-3">
            <a href="#overview" class="flex items-center gap-2 group">
              <span class="font-display font-extrabold text-xl tracking-tight text-[var(--text-primary)]">
                NATTHAKIT.SYS<span class="text-[var(--accent-primary)] font-mono">/</span>
              </span>
              <span class="hidden sm:inline-block font-mono-tech text-xs px-2 py-0.5 border border-[var(--border-color)] bg-[var(--bg-elevated)] text-[var(--text-muted)]">
                RMUTI.KKC
              </span>
            </a>
          </div>

          <!-- Navigation Links -->
          <nav class="hidden md:flex items-center gap-1 font-mono-tech text-xs tracking-wider">
            <a href="#overview" class="px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
              01.OVERVIEW
            </a>
            <a href="#profile" class="px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
              02.PROFILE
            </a>
            <a href="#education" class="px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
              03.EDUCATION
            </a>
            <a href="#courses" class="px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
              04.COURSES
            </a>
            <a href="#projects" class="px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
              05.WORKS
            </a>
            <a href="#contact" class="px-3 py-2 text-[var(--text-secondary)] hover:text-[var(--accent-primary)] hover:bg-[var(--bg-elevated)] border border-transparent hover:border-[var(--border-subtle)] transition-all">
              06.CONTACT
            </a>
          </nav>

          <!-- Right Action Controls -->
          <div class="flex items-center gap-2">
            
            <!-- Theme Selector -->
            <div class="relative inline-block text-left">
              <select 
                id="theme-select" 
                class="font-mono-tech text-xs bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-color)] px-2.5 py-1.5 focus:outline-none focus:ring-1 focus:ring-[var(--accent-primary)] cursor-pointer"
                onchange="window.portfolioApp.setTheme(this.value)"
              >
                <option value="blueprint" ${currentTheme === 'blueprint' ? 'selected' : ''}>[THEME: BLUEPRINT]</option>
                <option value="monochrome" ${currentTheme === 'monochrome' ? 'selected' : ''}>[THEME: MONOCHROME]</option>
                <option value="industrial-amber" ${currentTheme === 'industrial-amber' ? 'selected' : ''}>[THEME: AMBER]</option>
                <option value="cyber-emerald" ${currentTheme === 'cyber-emerald' ? 'selected' : ''}>[THEME: EMERALD]</option>
                <option value="dark-blueprint" ${currentTheme === 'dark-blueprint' ? 'selected' : ''}>[THEME: NIGHT]</option>
              </select>
            </div>

            <!-- Admin Status / Trigger Button -->
            ${isAdmin ? `
              <div class="flex items-center gap-1.5">
                <span class="inline-flex items-center px-2 py-1 bg-green-100 dark:bg-green-950/80 text-green-700 dark:text-green-300 font-mono-tech text-xs border border-green-500 font-medium">
                  <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse mr-1.5"></span>
                  ADMIN
                </span>
                <button 
                  onclick="window.portfolioApp.toggleEditMode()"
                  class="font-mono-tech text-xs px-2.5 py-1.5 border border-[var(--border-color)] ${isEditMode ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-card)] text-[var(--text-primary)]'} hover:opacity-90 font-bold"
                  title="Toggle In-Place Edit Mode"
                >
                  ${isEditMode ? 'EDITING ON' : 'EDIT MODE'}
                </button>
              </div>
            ` : `
              <button 
                onclick="window.portfolioApp.openAdminModal()" 
                class="hidden sm:inline-flex items-center gap-1.5 font-mono-tech text-xs px-2.5 py-1.5 border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)] transition-colors"
                title="กด Ctrl+Alt+P เพื่อเข้าสู่ระบบจัดการ"
              >
                <svg class="w-3.5 h-3.5 text-[var(--accent-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <rect x="3" y="11" width="18" height="11" rx="2" ry="2" stroke-width="2"/>
                  <path d="M7 11V7a5 5 0 0110 0v4" stroke-width="2"/>
                </svg>
                <span>LOGIN</span>
                <span class="text-[10px] text-[var(--text-muted)] bg-[var(--bg-elevated)] px-1 border border-[var(--border-subtle)]">Ctrl+Alt+P</span>
              </button>
            `}

            <!-- Mobile Easter Egg / Menu Trigger -->
            <button 
              onclick="window.portfolioApp.openAdminModal()"
              class="p-2 border border-[var(--border-color)] bg-[var(--bg-card)] text-[var(--text-primary)] hover:bg-[var(--bg-elevated)]"
              title="ระบบภายใน / เมนูล็อกอิน"
            >
              <svg class="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                <circle cx="5" cy="5" r="2"/>
                <circle cx="12" cy="5" r="2"/>
                <circle cx="19" cy="5" r="2"/>
                <circle cx="5" cy="12" r="2"/>
                <circle cx="12" cy="12" r="2"/>
                <circle cx="19" cy="12" r="2"/>
                <circle cx="5" cy="19" r="2"/>
                <circle cx="12" cy="19" r="2"/>
                <circle cx="19" cy="19" r="2"/>
              </svg>
            </button>

          </div>

        </div>
      </div>
    </header>
  `;
}

window.renderNavbar = renderNavbar;
