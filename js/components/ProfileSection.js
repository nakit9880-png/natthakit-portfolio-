// Profile Section Component - Comprehensive & Formal Personal Details
function renderProfileSection(data, isAdmin, isEditMode) {
  const profile = data.profile;
  const avatar = profile.avatarUrl || "assets/profile.png";

  return `
    <section id="profile" class="py-16 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header with Blueprint Index -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div class="font-mono-tech text-xs text-[var(--accent-primary)] font-semibold tracking-widest uppercase mb-1">
              SECTION 02 // PERSONAL SPECIFICATIONS
            </div>
            <h2 class="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight">
              ข้อมูลส่วนตัว & ประวัติทางการ<span class="text-[var(--accent-primary)] slash-accent">/</span>
            </h2>
          </div>
          <div class="mt-3 md:mt-0 font-mono-tech text-xs text-[var(--text-muted)]">
            FORMAL RECORD // RMUTI-KKC-TE
          </div>
        </div>

        <!-- Main Content Grid -->
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          <!-- Left Col: Official Student Identity Card (4 Cols) -->
          <div class="lg:col-span-4">
            <div class="tech-box p-6 relative corner-cross bg-[var(--bg-card)]">
              
              <!-- Card Header -->
              <div class="flex items-center justify-between pb-3 border-b border-[var(--border-color)] mb-4">
                <span class="font-mono-tech text-[11px] font-bold text-[var(--text-primary)]">
                  STUDENT ID PASS
                </span>
                <span class="tech-tag text-[10px]">
                  VERIFIED
                </span>
              </div>

              <!-- Uniform Photo Frame -->
              <div class="relative w-full aspect-[4/5] border border-[var(--border-color)] overflow-hidden bg-slate-100 dark:bg-slate-900 group">
                <img 
                  src="${avatar}" 
                  alt="${profile.fullName}" 
                  class="w-full h-full object-cover object-top"
                  id="profile-avatar-img"
                />
                
                <!-- Coordinate & Technical Overlays -->
                <div class="absolute bottom-2 left-2 right-2 p-1.5 bg-black/75 backdrop-blur-sm text-white font-mono-tech text-[10px] flex items-center justify-between">
                  <span>ID: ${profile.studentId}</span>
                  <span class="text-emerald-400">ACTIVE</span>
                </div>

                ${isEditMode ? `
                  <label class="absolute inset-0 bg-blue-900/70 flex flex-col items-center justify-center text-white text-xs font-mono-tech cursor-pointer p-4 text-center">
                    <svg class="w-8 h-8 mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" stroke-width="2"/></svg>
                    คลิกเพื่ออัปโหลดรูปประจำตัวใหม่
                    <input type="file" accept="image/*" class="hidden" onchange="window.portfolioApp.handleAvatarUpload(this)"/>
                  </label>
                ` : ''}
              </div>

              <!-- Quick ID Summary -->
              <div class="mt-4 pt-3 border-t border-[var(--border-subtle)] space-y-2 text-xs">
                <div class="flex justify-between items-center">
                  <span class="font-mono-tech text-[var(--text-muted)]">ชื่อ-สกุล:</span>
                  <span class="font-semibold text-[var(--text-primary)]" data-editable="profile.fullName" contenteditable="${isEditMode}">${profile.fullName}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-mono-tech text-[var(--text-muted)]">ชื่อเล่น:</span>
                  <span class="font-semibold text-[var(--text-primary)]" data-editable="profile.nickname" contenteditable="${isEditMode}">${profile.nickname}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-mono-tech text-[var(--text-muted)]">รหัสนักศึกษา:</span>
                  <span class="font-mono-tech font-bold text-[var(--accent-primary)]" data-editable="profile.studentId" contenteditable="${isEditMode}">${profile.studentId}</span>
                </div>
                <div class="flex justify-between items-center">
                  <span class="font-mono-tech text-[var(--text-muted)]">สถานะ:</span>
                  <span class="font-thai text-[var(--text-primary)]">นักศึกษาปริญญาตรี</span>
                </div>
              </div>

              <!-- Quick Contact Actions -->
              <div class="mt-6 pt-4 border-t border-[var(--border-color)] grid grid-cols-2 gap-2">
                <a href="tel:${profile.phone}" class="btn-tech-secondary text-center justify-center text-xs py-2">
                  <span>โทรออก</span> 📞
                </a>
                <a href="mailto:${profile.email}" class="btn-tech-primary text-center justify-center text-xs py-2">
                  <span>ส่งอีเมล</span> ✉️
                </a>
              </div>

            </div>
          </div>

          <!-- Right Col: Detailed Data Tables & Special Abilities (8 Cols) -->
          <div class="lg:col-span-8 space-y-6">
            
            <!-- Table 1: Academic & Institutional Information -->
            <div class="tech-box p-6 bg-[var(--bg-card)]">
              <div class="font-mono-tech text-xs tracking-wider text-[var(--accent-primary)] font-bold uppercase mb-4 flex items-center justify-between">
                <span>01 // สังกัดและสถานศึกษา</span>
                <span class="text-[10px] text-[var(--text-muted)]">INSTITUTIONAL PROFILE</span>
              </div>
              
              <div class="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm font-thai">
                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)] mb-1">มหาวิทยาลัย / สถาบัน:</div>
                  <div class="font-bold text-[var(--text-primary)]" data-editable="profile.university" contenteditable="${isEditMode}">
                    ${profile.university}
                  </div>
                </div>

                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)] mb-1">วิทยาเขต:</div>
                  <div class="font-bold text-[var(--text-primary)]">
                    วิทยาเขตขอนแก่น (RMUTI Khon Kaen)
                  </div>
                </div>

                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)] mb-1">คณะ:</div>
                  <div class="font-bold text-[var(--text-primary)]" data-editable="profile.faculty" contenteditable="${isEditMode}">
                    ${profile.faculty}
                  </div>
                </div>

                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)] mb-1">สาขาวิชา:</div>
                  <div class="font-bold text-[var(--accent-primary)]" data-editable="profile.major" contenteditable="${isEditMode}">
                    ${profile.major}
                  </div>
                </div>
              </div>
            </div>

            <!-- Table 2: Personal Demographics & Contact -->
            <div class="tech-box p-6 bg-[var(--bg-card)]">
              <div class="font-mono-tech text-xs tracking-wider text-[var(--accent-primary)] font-bold uppercase mb-4 flex items-center justify-between">
                <span>02 // ข้อมูลส่วนบุคคลและการติดต่อ</span>
                <span class="text-[10px] text-[var(--text-muted)]">DEMOGRAPHICS & CONTACT</span>
              </div>

              <div class="grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs sm:text-sm font-thai">
                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)]">วันเกิด:</div>
                  <div class="font-semibold text-[var(--text-primary)] mt-1" data-editable="profile.birthdate" contenteditable="${isEditMode}">
                    ${profile.birthdate}
                  </div>
                </div>

                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)]">อายุ:</div>
                  <div class="font-semibold text-[var(--text-primary)] mt-1">
                    <span data-editable="profile.age" contenteditable="${isEditMode}">${profile.age}</span> ปี
                  </div>
                </div>

                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)]">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)]">สัญชาติ / เชื้อชาติ:</div>
                  <div class="font-semibold text-[var(--text-primary)] mt-1">
                    <span data-editable="profile.nationality" contenteditable="${isEditMode}">${profile.nationality}</span> / 
                    <span data-editable="profile.ethnicity" contenteditable="${isEditMode}">${profile.ethnicity}</span>
                  </div>
                </div>

                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] col-span-1 sm:col-span-1">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)]">เบอร์โทรศัพท์:</div>
                  <a href="tel:${profile.phone}" class="font-mono-tech font-bold text-[var(--accent-primary)] mt-1 block hover:underline" data-editable="profile.phone" contenteditable="${isEditMode}">
                    ${profile.phone}
                  </a>
                </div>

                <div class="p-3 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] col-span-2 sm:col-span-2">
                  <div class="font-mono-tech text-xs text-[var(--text-muted)]">อีเมลทางการ (Email):</div>
                  <a href="mailto:${profile.email}" class="font-mono-tech font-bold text-[var(--accent-primary)] mt-1 block hover:underline" data-editable="profile.email" contenteditable="${isEditMode}">
                    ${profile.email}
                  </a>
                </div>
              </div>
            </div>

            <!-- Table 3: Special Abilities & Talents (Focus & Drawing Highlight) -->
            <div class="tech-box p-6 bg-[var(--bg-card)]">
              <div class="font-mono-tech text-xs tracking-wider text-[var(--accent-primary)] font-bold uppercase mb-4 flex items-center justify-between">
                <span>03 // ความสามารถพิเศษ & ทักษะเฉพาะตัว</span>
                <span class="text-[10px] text-[var(--text-muted)]">SPECIAL COMPETENCIES</span>
              </div>

              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <!-- Highlight 1: Deep Focus -->
                <div class="p-4 border-2 border-[var(--border-color)] bg-[var(--bg-elevated)] relative">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="p-1.5 bg-[var(--accent-primary)] text-white text-xs font-mono font-bold">01</span>
                    <h3 class="font-display font-bold text-base text-[var(--text-primary)]">
                      มีสมาธิสูง จดจ่อกับงานได้นาน
                    </h3>
                  </div>
                  <p class="font-thai text-xs text-[var(--text-secondary)] leading-relaxed">
                    มีความสามารถพิเศษในการเข้าสู่สภาวะ Deep Work สามารถจดจ่อกับการต่อวงจรไฟฟ้าที่ซับซ้อน การคำนวณวงจร และการทำงานประณีตได้ต่อเนื่องโดยไม่วอกแวก
                  </p>
                  <div class="mt-3 flex items-center gap-2 font-mono-tech text-[10px] text-[var(--accent-primary)] font-semibold">
                    <span>STATUS: HIGH FOCUS</span>
                    <span>• 100% PERSISTENCE</span>
                  </div>
                </div>

                <!-- Highlight 2: Passion for Drawing & Technical Art -->
                <div class="p-4 border-2 border-[var(--border-color)] bg-[var(--bg-elevated)] relative">
                  <div class="flex items-center gap-2 mb-2">
                    <span class="p-1.5 bg-[var(--border-color)] text-[var(--bg-card)] text-xs font-mono font-bold">02</span>
                    <h3 class="font-display font-bold text-base text-[var(--text-primary)]">
                      ชอบวาดรูป & งานดรออิ้งเชิงโครงสร้าง
                    </h3>
                  </div>
                  <p class="font-thai text-xs text-[var(--text-secondary)] leading-relaxed">
                    รักการวาดภาพลายเส้น การสเก็ตช์ และการเขียนแบบวิศวกรรมไฟฟ้า ช่วยให้การออกแบบวงจร การจัดวางเลย์เอาต์ และการทำสื่อการสอนออกมาสวยงามและเข้าใจง่าย
                  </p>
                  <div class="mt-3 flex items-center gap-2 font-mono-tech text-[10px] text-[var(--text-muted)] font-semibold">
                    <a href="#sketchpad" class="text-[var(--accent-primary)] hover:underline inline-flex items-center gap-1">
                      <span>ทดลองวาดรูปบนแคนวาส</span> <span>↗</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  `;
}

window.renderProfileSection = renderProfileSection;
