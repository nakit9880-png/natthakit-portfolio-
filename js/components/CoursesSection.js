// Courses & Academic Workpieces Component
function renderCoursesSection(data, isAdmin, isEditMode) {
  const courses = data.courses || [];

  return `
    <section id="courses" class="py-16 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-10 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div class="font-mono-tech text-xs text-[var(--accent-primary)] font-semibold tracking-widest uppercase mb-1">
              SECTION 04 // CURRICULAR ARTIFACTS
            </div>
            <h2 class="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight">
              รายวิชาและชิ้นงานในรายวิชา<span class="text-[var(--accent-primary)] slash-accent">/</span>
            </h2>
          </div>
          
          <div class="mt-3 md:mt-0 flex items-center gap-2">
            ${isEditMode ? `
              <button 
                onclick="window.portfolioApp.addNewCoursePrompt()"
                class="btn-tech-primary text-xs py-2 px-3"
              >
                <span>+ เพิ่มรายวิชาใหม่</span>
              </button>
            ` : `
              <span class="font-mono-tech text-xs text-[var(--text-muted)]">
                TOTAL: ${courses.length} MODULES
              </span>
            `}
          </div>
        </div>

        <!-- Course Cards Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
          ${courses.map(course => `
            <div class="tech-box p-6 bg-[var(--bg-card)] flex flex-col justify-between relative group">
              
              <div>
                <!-- Course Code & Term Header -->
                <div class="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
                  <span class="font-mono-tech text-xs px-2 py-0.5 border border-[var(--border-color)] bg-[var(--bg-elevated)] font-bold text-[var(--text-primary)]">
                    CODE: ${course.code}
                  </span>
                  <span class="font-mono-tech text-xs text-[var(--accent-primary)]">
                    ${course.credits} หน่วยกิต • ${course.term}
                  </span>
                </div>

                <!-- Course Title -->
                <h3 class="font-display font-bold text-lg text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  ${course.name}
                </h3>
                
                <p class="font-thai text-xs text-[var(--text-secondary)] leading-relaxed mb-4">
                  ${course.description}
                </p>

                <!-- Workpieces in Course Sub-section -->
                <div class="mt-4 pt-3 border-t border-[var(--border-subtle)]">
                  <div class="font-mono-tech text-[11px] text-[var(--text-muted)] uppercase mb-2 flex items-center justify-between">
                    <span>ชิ้นงานในรายวิชา (${(course.workpieces || []).length}):</span>
                    ${isEditMode ? `
                      <button 
                        onclick="window.portfolioApp.addWorkpiecePrompt('${course.id}')"
                        class="text-[var(--accent-primary)] hover:underline font-semibold"
                      >
                        + เพิ่มชิ้นงาน
                      </button>
                    ` : ''}
                  </div>

                  <div class="space-y-2">
                    ${(course.workpieces || []).map(wp => `
                      <div class="p-2.5 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] hover:border-[var(--accent-primary)] transition-colors cursor-pointer" onclick="window.portfolioApp.viewWorkpieceDetail('${course.id}', '${wp.id}')">
                        <div class="flex items-start justify-between gap-2">
                          <div class="flex items-center gap-2">
                            <span class="w-1.5 h-1.5 rounded-full bg-[var(--accent-primary)]"></span>
                            <span class="font-thai text-xs font-semibold text-[var(--text-primary)] hover:underline">
                              ${wp.title}
                            </span>
                          </div>
                          <span class="font-mono-tech text-[9px] px-1.5 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-card)] text-[var(--accent-primary)] whitespace-nowrap">
                            ${wp.tag || wp.type}
                          </span>
                        </div>
                        <div class="font-thai text-[11px] text-[var(--text-muted)] mt-1 line-clamp-1">
                          ${wp.summary}
                        </div>
                      </div>
                    `).join('')}
                    
                    ${(!course.workpieces || course.workpieces.length === 0) ? `
                      <div class="text-[11px] font-thai text-[var(--text-muted)] italic py-1">
                        ยังไม่มีชิ้นงานบันทึกในรายวิชานี้
                      </div>
                    ` : ''}
                  </div>
                </div>

              </div>

              <!-- Admin Controls -->
              ${isEditMode ? `
                <div class="mt-6 pt-3 border-t border-dashed border-[var(--border-subtle)] flex items-center justify-between">
                  <span class="font-mono-tech text-[10px] text-[var(--text-muted)]">COURSE ID: ${course.id}</span>
                  <div class="flex items-center gap-2">
                    <button 
                      onclick="window.portfolioApp.editCourse('${course.id}')"
                      class="btn-tech-secondary text-[10px] py-1 px-2"
                    >
                      แก้ไข
                    </button>
                    <button 
                      onclick="window.portfolioApp.deleteCourse('${course.id}')"
                      class="text-red-600 font-mono-tech text-[10px] hover:underline px-2 py-1"
                    >
                      ลบวิชา
                    </button>
                  </div>
                </div>
              ` : ''}

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

window.renderCoursesSection = renderCoursesSection;
