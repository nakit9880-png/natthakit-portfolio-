// Hero Component - Faithfully reconstructed from Image 2 (GRID.GUILD / BUILD WITH LOGIC)
function renderHero(data, isAdmin, isEditMode) {
  const profile = data.profile;
  const avatar = profile.avatarUrl || "assets/profile.png";

  return `
    <section id="overview" class="border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div class="max-w-7xl mx-auto border-x border-[var(--border-color)] bg-[var(--bg-card)]">
        
        <!-- Main Bento Grid (Inspired by GRID.GUILD) -->
        <div class="grid grid-cols-1 lg:grid-cols-12 border-b border-[var(--border-color)]">
          
          <!-- Left Large Hero Box (Col 1-7) -->
          <div class="lg:col-span-7 p-6 sm:p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-[var(--border-color)] flex flex-col justify-between relative bg-grid-blueprint">
            
            <!-- Technical Tag / Status -->
            <div class="flex items-center justify-between mb-8">
              <span class="tech-tag">
                <span class="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-ping"></span>
                PORTFOLIO / 2026 EDITION
              </span>
              <span class="font-mono-tech text-xs text-[var(--text-muted)] tracking-wider">
                SYS.ID: ${profile.studentId}
              </span>
            </div>

            <!-- Massive Display Typography -->
            <div class="my-6">
              <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-display tracking-tight text-[var(--text-primary)] leading-[0.95] uppercase">
                <span data-editable="profile.headline" contenteditable="${isEditMode}">BUILD<br/>WITH<br/>PRECISION</span>
                <span class="slash-accent text-[var(--accent-primary)]">/</span>
              </h1>
              
              <div class="mt-6 pt-4 border-t border-[var(--border-subtle)]">
                <p class="font-display text-xl sm:text-2xl font-bold text-[var(--text-primary)] flex items-center gap-2">
                  <span data-editable="profile.fullName" contenteditable="${isEditMode}">${profile.fullName}</span>
                  <span class="text-sm font-normal text-[var(--text-muted)] font-mono-tech">(${profile.nickname})</span>
                </p>
                <p class="font-mono-tech text-xs sm:text-sm text-[var(--accent-primary)] font-semibold mt-1" data-editable="profile.subheadline" contenteditable="${isEditMode}">
                  ${profile.subheadline}
                </p>
                <p class="font-thai text-sm sm:text-base text-[var(--text-secondary)] mt-3 leading-relaxed max-w-xl" data-editable="profile.tagline" contenteditable="${isEditMode}">
                  ${profile.tagline}
                </p>
              </div>
            </div>

            <!-- Action Buttons with Slanted Accent Slash -->
            <div class="pt-6 flex flex-wrap items-center gap-3">
              <a href="#projects" class="btn-tech-primary group">
                <span>EXPLORE WORKS</span>
                <span class="text-white font-bold group-hover:translate-x-0.5 transition-transform">/</span>
              </a>
              <a href="#education" class="btn-tech-secondary group">
                <span>VIEW EDUCATION</span>
                <span class="text-[var(--accent-primary)] font-bold group-hover:translate-x-0.5 transition-transform">/</span>
              </a>
              <a href="#contact" class="btn-tech-secondary group text-xs">
                <span>CONTACT</span>
                <span class="text-[var(--text-muted)]">↗</span>
              </a>
            </div>

          </div>

          <!-- Right Column Group (Col 8-12) -->
          <div class="lg:col-span-5 flex flex-col justify-between">
            
            <!-- Top Box: Featured Profile / Photo Module -->
            <div class="p-6 border-b border-[var(--border-color)] bg-[var(--bg-card)] relative">
              <div class="flex items-center justify-between mb-3">
                <span class="font-mono-tech text-xs tracking-wider text-[var(--text-muted)] uppercase">
                  FEATURED IDENTITY
                </span>
                <span class="font-mono-tech text-xs text-[var(--accent-primary)] font-semibold">
                  ACTIVE.STU /
                </span>
              </div>

              <!-- Student Profile Card with HUD Border & Photo -->
              <div class="flex items-center gap-5 p-3 border border-[var(--border-color)] bg-[var(--bg-elevated)] relative corner-cross">
                <div class="relative w-24 h-28 sm:w-28 sm:h-32 flex-shrink-0 border border-[var(--border-color)] overflow-hidden bg-black/5">
                  <img 
                    src="${avatar}" 
                    alt="${profile.fullName}" 
                    class="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300"
                    id="hero-avatar-img"
                  />
                  ${isEditMode ? `
                    <label class="absolute inset-0 bg-black/60 flex flex-col items-center justify-center text-white text-[10px] cursor-pointer hover:bg-black/75">
                      <svg class="w-5 h-5 mb-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-width="2"/></svg>
                      เปลี่ยนรูป
                      <input type="file" accept="image/*" class="hidden" onchange="window.portfolioApp.handleAvatarUpload(this)"/>
                    </label>
                  ` : ''}
                </div>
                <div class="flex-1 min-w-0">
                  <div class="font-display font-bold text-base sm:text-lg text-[var(--text-primary)] truncate" data-editable="profile.fullName" contenteditable="${isEditMode}">
                    ${profile.fullName}
                  </div>
                  <div class="font-mono-tech text-xs text-[var(--accent-primary)] font-medium mt-0.5">
                    ${profile.faculty}
                  </div>
                  <div class="font-thai text-xs text-[var(--text-secondary)] mt-1 truncate">
                    ${profile.major}
                  </div>
                  <div class="mt-2.5 pt-2 border-t border-[var(--border-subtle)] flex items-center justify-between text-[11px] font-mono-tech">
                    <span class="text-[var(--text-muted)]">AGE: ${profile.age} YRS</span>
                    <span class="text-green-600 font-semibold">● RMUTI KKC</span>
                  </div>
                </div>
              </div>

              <!-- Dotted Matrix Graphic Preview (from Image 2) -->
              <div class="mt-3 p-2 border border-[var(--border-subtle)] bg-dot-matrix h-8 flex items-center justify-between px-3 text-[10px] font-mono-tech text-[var(--text-muted)]">
                <span>COORD: 16.4322° N, 102.8236° E</span>
                <span>STATUS: LEVEL 1 ENG</span>
              </div>
            </div>

            <!-- Middle Box: System Principles (3 Mini Columns like Image 2) -->
            <div class="p-6 border-b border-[var(--border-color)] bg-[var(--bg-card)]">
              <div class="font-mono-tech text-xs tracking-wider text-[var(--text-muted)] uppercase mb-3">
                SYSTEM PRINCIPLES / อัตลักษณ์สำคัญ
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
                
                <div class="p-2.5 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="w-5 h-5 mb-1.5 flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <span class="text-xs">⚡</span>
                  </div>
                  <div class="font-mono-tech font-bold text-[11px] text-[var(--text-primary)] uppercase">
                    STRUCTURE
                  </div>
                  <div class="font-thai text-[11px] text-[var(--text-secondary)] mt-1 line-clamp-2">
                    สมาธิจดจ่อสูง ทำงานเชิงตรรกะได้ยาวนาน
                  </div>
                </div>

                <div class="p-2.5 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="w-5 h-5 mb-1.5 flex items-center justify-center bg-[var(--accent-primary)] text-white">
                    <span class="text-xs">✏️</span>
                  </div>
                  <div class="font-mono-tech font-bold text-[11px] text-[var(--text-primary)] uppercase">
                    ARTISTRY
                  </div>
                  <div class="font-thai text-[11px] text-[var(--text-secondary)] mt-1 line-clamp-2">
                    รักการวาดรูป ดรออิ้ง และไดอะแกรมเทคนิค
                  </div>
                </div>

                <div class="p-2.5 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="w-5 h-5 mb-1.5 flex items-center justify-center bg-[var(--bg-card)] border border-[var(--border-color)]">
                    <span class="text-xs font-mono font-bold">/</span>
                  </div>
                  <div class="font-mono-tech font-bold text-[11px] text-[var(--text-primary)] uppercase">
                    PEDAGOGY
                  </div>
                  <div class="font-thai text-[11px] text-[var(--text-secondary)] mt-1 line-clamp-2">
                    ครุศาสตร์ไฟฟ้า ถ่ายทอดความรู้ได้ชัดเจน
                  </div>
                </div>

              </div>
            </div>

            <!-- Bottom Box: Quick Index & Doc Navigation (like Image 2) -->
            <div class="grid grid-cols-2 divide-x divide-[var(--border-color)] bg-[var(--bg-card)]">
              <div class="p-4 flex flex-col justify-between">
                <div class="font-mono-tech text-[10px] text-[var(--text-muted)] uppercase">ACADEMIC PATH</div>
                <div class="font-display font-bold text-sm text-[var(--text-primary)] mt-1">
                  B.S.Tech.Ed. Electrical
                </div>
                <a href="#education" class="mt-2 text-xs font-mono-tech text-[var(--accent-primary)] font-semibold inline-flex items-center gap-1 hover:underline">
                  VIEW TIMELINE <span>+</span>
                </a>
              </div>
              <div class="p-4 flex flex-col justify-between">
                <div class="font-mono-tech text-[10px] text-[var(--text-muted)] uppercase">DOCUMENTATION</div>
                <div class="space-y-1 mt-1 text-xs font-thai text-[var(--text-secondary)]">
                  <a href="#profile" class="block hover:text-[var(--accent-primary)]">ข้อมูลส่วนบุคคล ↗</a>
                  <a href="#courses" class="block hover:text-[var(--accent-primary)]">รายวิชาและชิ้นงาน ↗</a>
                  <a href="#projects" class="block hover:text-[var(--accent-primary)]">ผลงานและกิจกรรม ↗</a>
                </div>
              </div>
            </div>

          </div>

        </div>

        <!-- Metric Stat Strip (Reconstructed from Image 2: 128 Components, 16 Columns...) -->
        <div class="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-[var(--border-color)] border-b border-[var(--border-color)] bg-[var(--bg-elevated)]">
          ${profile.stats.map((stat, i) => `
            <div class="p-4 sm:p-5">
              <div class="font-display text-2xl sm:text-3xl font-black text-[var(--text-primary)]">
                ${stat.value}
              </div>
              <div class="font-mono-tech text-xs uppercase text-[var(--text-muted)] mt-1 tracking-wider flex items-center justify-between">
                <span>${stat.label}</span>
                <span class="text-[10px] text-[var(--accent-primary)] font-semibold">${stat.unit}</span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Quick Module Navigation Bar (Browse Modules in Image 2) -->
        <div class="p-4 bg-[var(--bg-card)] flex flex-wrap items-center justify-between gap-3 text-xs font-mono-tech">
          <div class="text-[var(--text-muted)] uppercase tracking-wider font-semibold">
            QUICK SECTIONS:
          </div>
          <div class="flex flex-wrap items-center gap-2">
            <a href="#profile" class="px-2.5 py-1 border border-[var(--border-subtle)] hover:border-[var(--border-color)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-card)] transition-colors flex items-center gap-1.5">
              <span>PROFILE</span><span class="text-[var(--accent-primary)]">+</span>
            </a>
            <a href="#education" class="px-2.5 py-1 border border-[var(--border-subtle)] hover:border-[var(--border-color)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-card)] transition-colors flex items-center gap-1.5">
              <span>EDUCATION</span><span class="text-[var(--accent-primary)]">+</span>
            </a>
            <a href="#courses" class="px-2.5 py-1 border border-[var(--border-subtle)] hover:border-[var(--border-color)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-card)] transition-colors flex items-center gap-1.5">
              <span>COURSES</span><span class="text-[var(--accent-primary)]">+</span>
            </a>
            <a href="#projects" class="px-2.5 py-1 border border-[var(--border-subtle)] hover:border-[var(--border-color)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-card)] transition-colors flex items-center gap-1.5">
              <span>PROJECTS</span><span class="text-[var(--accent-primary)]">+</span>
            </a>
            <a href="#sketchpad" class="px-2.5 py-1 border border-[var(--border-subtle)] hover:border-[var(--border-color)] bg-[var(--bg-elevated)] hover:bg-[var(--bg-card)] transition-colors flex items-center gap-1.5">
              <span>DRAWING CANVAS</span><span class="text-[var(--accent-primary)]">+</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  `;
}

window.renderHero = renderHero;
