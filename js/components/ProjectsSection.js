// Projects & Activities Showcase Component
function renderProjectsSection(data, isAdmin, isEditMode, activeCategory = 'all') {
  const projects = data.projects || [];
  
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(p => p.category === activeCategory);

  return `
    <section id="projects" class="py-16 border-b border-[var(--border-color)] bg-[var(--bg-elevated)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div class="font-mono-tech text-xs text-[var(--accent-primary)] font-semibold tracking-widest uppercase mb-1">
              SECTION 05 // ACTIVITIES & PORTFOLIO
            </div>
            <h2 class="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight">
              กิจกรรมและผลงานเด่น<span class="text-[var(--accent-primary)] slash-accent">/</span>
            </h2>
          </div>
          
          <div class="mt-4 md:mt-0 flex items-center gap-3">
            ${isEditMode ? `
              <button 
                onclick="window.portfolioApp.addNewProjectPrompt()"
                class="btn-tech-primary text-xs py-2 px-3"
              >
                <span>+ เพิ่มผลงานใหม่</span>
              </button>
            ` : ''}
            <span class="font-mono-tech text-xs text-[var(--text-muted)]">
              SHOWING ${filteredProjects.length} / ${projects.length} ITEMS
            </span>
          </div>
        </div>

        <!-- Category Filters (Swiss Grid Buttons) -->
        <div class="flex flex-wrap items-center gap-2 mb-8 font-mono-tech text-xs">
          <button 
            onclick="window.portfolioApp.setProjectFilter('all')" 
            class="px-3 py-1.5 border border-[var(--border-color)] ${activeCategory === 'all' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-card)] text-[var(--text-primary)]'} hover:opacity-90 font-semibold"
          >
            [ALL WORKS]
          </button>
          <button 
            onclick="window.portfolioApp.setProjectFilter('electrical')" 
            class="px-3 py-1.5 border border-[var(--border-color)] ${activeCategory === 'electrical' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-card)] text-[var(--text-primary)]'} hover:opacity-90"
          >
            [01. ELECTRICAL & TECH]
          </button>
          <button 
            onclick="window.portfolioApp.setProjectFilter('teaching')" 
            class="px-3 py-1.5 border border-[var(--border-color)] ${activeCategory === 'teaching' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-card)] text-[var(--text-primary)]'} hover:opacity-90"
          >
            [02. TEACHING & VOLUNTEER]
          </button>
          <button 
            onclick="window.portfolioApp.setProjectFilter('art')" 
            class="px-3 py-1.5 border border-[var(--border-color)] ${activeCategory === 'art' ? 'bg-[var(--accent-primary)] text-white' : 'bg-[var(--bg-card)] text-[var(--text-primary)]'} hover:opacity-90"
          >
            [03. ART & DRAWING]
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          ${filteredProjects.map((project, index) => `
            <div class="tech-box p-6 bg-[var(--bg-card)] flex flex-col justify-between relative group">
              
              <div>
                <!-- Top Identification Bar -->
                <div class="flex items-center justify-between pb-3 border-b border-[var(--border-subtle)] mb-4">
                  <span class="tech-tag text-[10px]">
                    ${project.categoryLabel || project.category}
                  </span>
                  <span class="font-mono-tech text-xs text-[var(--text-muted)]">
                    YEAR: ${project.date}
                  </span>
                </div>

                <!-- Preview Image Frame -->
                <div class="relative w-full aspect-[16/9] border border-[var(--border-color)] overflow-hidden bg-slate-900 mb-4 cursor-pointer" onclick="window.portfolioApp.viewProjectDetail('${project.id}')">
                  <img 
                    src="${project.imageUrl || 'assets/reference-grid.webp'}" 
                    alt="${project.title}" 
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 opacity-90 hover:opacity-100"
                  />
                  <div class="absolute bottom-2 left-2 right-2 p-1.5 bg-black/80 text-white font-mono-tech text-[10px] flex items-center justify-between">
                    <span>${project.metrics || 'PROJECT SPEC'}</span>
                    <span class="text-[var(--accent-primary)] font-bold">CLICK TO INSPECT +</span>
                  </div>
                </div>

                <!-- Project Title -->
                <h3 class="font-display font-bold text-xl text-[var(--text-primary)] mb-2 group-hover:text-[var(--accent-primary)] transition-colors">
                  ${project.title}
                </h3>

                <!-- Project Description -->
                <p class="font-thai text-sm text-[var(--text-secondary)] leading-relaxed mb-4">
                  ${project.description}
                </p>

                <!-- Tags Strip -->
                <div class="flex flex-wrap gap-1.5 mt-2">
                  ${(project.tags || []).map(tag => `
                    <span class="font-mono-tech text-[10px] px-2 py-0.5 border border-[var(--border-subtle)] bg-[var(--bg-elevated)] text-[var(--text-secondary)]">
                      #${tag}
                    </span>
                  `).join('')}
                </div>
              </div>

              <!-- Footer with Action -->
              <div class="mt-6 pt-4 border-t border-[var(--border-color)] flex items-center justify-between">
                <button 
                  onclick="window.portfolioApp.viewProjectDetail('${project.id}')"
                  class="font-mono-tech text-xs text-[var(--accent-primary)] font-bold inline-flex items-center gap-1 hover:underline"
                >
                  <span>VIEW SPECIFICATION</span> <span>+</span>
                </button>

                ${isEditMode ? `
                  <div class="flex items-center gap-2">
                    <button 
                      onclick="window.portfolioApp.editProject('${project.id}')"
                      class="btn-tech-secondary text-[10px] py-1 px-2"
                    >
                      แก้ไข
                    </button>
                    <button 
                      onclick="window.portfolioApp.deleteProject('${project.id}')"
                      class="text-red-600 font-mono-tech text-[10px] hover:underline px-2 py-1"
                    >
                      ลบผลงาน
                    </button>
                  </div>
                ` : ''}
              </div>

            </div>
          `).join('')}
        </div>

      </div>
    </section>
  `;
}

window.renderProjectsSection = renderProjectsSection;
