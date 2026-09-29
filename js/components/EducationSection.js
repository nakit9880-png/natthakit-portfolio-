// Education Section Component - Interactive Blueprint Timeline
function renderEducationSection(data, isAdmin, isEditMode) {
  const education = data.education || [];

  return `
    <section id="education" class="py-16 border-b border-[var(--border-color)] bg-[var(--bg-elevated)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div class="font-mono-tech text-xs text-[var(--accent-primary)] font-semibold tracking-widest uppercase mb-1">
              SECTION 03 // ACADEMIC TRAJECTORY
            </div>
            <h2 class="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight">
              ประวัติการศึกษา<span class="text-[var(--accent-primary)] slash-accent">/</span>
            </h2>
          </div>
          <div class="mt-3 md:mt-0 font-mono-tech text-xs text-[var(--text-muted)]">
            TIMELINE 2561 — ปัจจุบัน
          </div>
        </div>

        <!-- Timeline Cards Container -->
        <div class="relative">
          
          <!-- Central Blueprint Line for Desktop -->
          <div class="hidden lg:block absolute left-8 top-6 bottom-6 w-0.5 bg-[var(--border-color)] border-l border-dashed border-[var(--accent-primary)]"></div>

          <div class="space-y-8">
            ${education.map((item, index) => {
              const isCurrent = item.status.includes("กำลังศึกษา");
              return `
                <div class="tech-box p-6 lg:ml-20 relative bg-[var(--bg-card)] ${isCurrent ? 'border-2 border-[var(--accent-primary)]' : ''}">
                  
                  <!-- Timeline Node Indicator -->
                  <div class="hidden lg:flex absolute -left-[5.75rem] top-6 w-8 h-8 items-center justify-center font-mono-tech text-xs font-bold ${isCurrent ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-card)] border border-[var(--border-color)] text-[var(--text-primary)]'}">
                    0${index + 1}
                  </div>

                  <!-- Header of Timeline Item -->
                  <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-[var(--border-subtle)]">
                    <div>
                      <span class="tech-tag text-[10px] mb-1.5 inline-block">
                        ${item.level}
                      </span>
                      <h3 class="font-display font-bold text-xl text-[var(--text-primary)]">
                        ${item.institution}
                      </h3>
                      <p class="font-thai text-sm text-[var(--accent-primary)] font-semibold">
                        ${item.faculty !== '-' ? item.faculty + ' • ' : ''}${item.major}
                      </p>
                    </div>

                    <!-- GPA Badge -->
                    <div class="flex items-center gap-3">
                      <div class="text-right">
                        <div class="font-mono-tech text-[10px] text-[var(--text-muted)] uppercase">เกรดเฉลี่ย (GPAX)</div>
                        <div class="font-display font-black text-2xl ${isCurrent ? 'text-[var(--accent-primary)]' : 'text-[var(--text-primary)]'}">
                          ${item.gpa}
                        </div>
                      </div>
                      ${isCurrent ? `
                        <span class="inline-flex items-center px-2 py-1 bg-blue-100 text-blue-700 font-mono-tech text-[10px] font-bold border border-blue-400">
                          CURRENT
                        </span>
                      ` : ''}
                    </div>
                  </div>

                  <!-- Item Details & Highlights -->
                  <div class="mt-4">
                    <div class="font-mono-tech text-xs text-[var(--text-muted)] mb-2 flex items-center gap-2">
                      <span>ช่วงเวลา: ${item.period}</span>
                      <span>•</span>
                      <span>สถานะ: ${item.status}</span>
                    </div>

                    <ul class="mt-3 space-y-1.5 font-thai text-sm text-[var(--text-secondary)]">
                      ${(item.highlights || []).map(hl => `
                        <li class="flex items-start gap-2">
                          <span class="text-[var(--accent-primary)] font-mono font-bold mt-0.5">›</span>
                          <span>${hl}</span>
                        </li>
                      `).join('')}
                    </ul>
                  </div>

                  ${isEditMode ? `
                    <div class="mt-4 pt-3 border-t border-dashed border-[var(--border-subtle)] flex items-center justify-end gap-2">
                      <button 
                        onclick="window.portfolioApp.editEducationItem('${item.id}')"
                        class="btn-tech-secondary text-[11px] py-1 px-2.5"
                      >
                        แก้ไขข้อมูล
                      </button>
                    </div>
                  ` : ''}

                </div>
              `;
            }).join('')}
          </div>

        </div>

      </div>
    </section>
  `;
}

window.renderEducationSection = renderEducationSection;
