// Interactive Drawing Canvas & Circuit Sketchpad Component
function renderDrawingWidget(data, isAdmin, isEditMode) {
  return `
    <section id="sketchpad" class="py-16 border-b border-[var(--border-color)] bg-[var(--bg-primary)]">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <!-- Section Header -->
        <div class="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-[var(--border-color)]">
          <div>
            <div class="font-mono-tech text-xs text-[var(--accent-primary)] font-semibold tracking-widest uppercase mb-1">
              SPECIAL TALENT // INTERACTIVE SKETCHPAD
            </div>
            <h2 class="text-3xl sm:text-4xl font-black font-display text-[var(--text-primary)] uppercase tracking-tight">
              พื้นที่วาดแบบ & สเก็ตช์ลายเส้น<span class="text-[var(--accent-primary)] slash-accent">/</span>
            </h2>
            <p class="font-thai text-sm text-[var(--text-secondary)] mt-1">
              ทดลองวาดภาพ ไดอะแกรมวงจร หรือสัญลักษณ์ไฟฟ้าด้วยมือ เพื่อสัมผัสทักษะการวาดรูปและสมาธิจดจ่อ
            </p>
          </div>
          
          <div class="mt-4 md:mt-0 font-mono-tech text-xs text-[var(--text-muted)]">
            CANVAS RESOLUTION: 1000x500 PX
          </div>
        </div>

        <!-- Canvas Container Box -->
        <div class="tech-box p-4 bg-[var(--bg-card)]">
          
          <!-- Drawing Toolbar -->
          <div class="flex flex-wrap items-center justify-between gap-3 pb-3 mb-3 border-b border-[var(--border-subtle)] text-xs font-mono-tech">
            <div class="flex items-center gap-2">
              <span class="text-[var(--text-muted)]">BRUSH:</span>
              <button onclick="window.portfolioCanvas.setColor('#0047FF')" class="w-6 h-6 rounded-none border border-[var(--border-color)] bg-[#0047FF] hover:scale-110 transition-transform" title="Blueprint Blue"></button>
              <button onclick="window.portfolioCanvas.setColor('#09090B')" class="w-6 h-6 rounded-none border border-[var(--border-color)] bg-[#09090B] hover:scale-110 transition-transform" title="Black Ink"></button>
              <button onclick="window.portfolioCanvas.setColor('#DC2626')" class="w-6 h-6 rounded-none border border-[var(--border-color)] bg-[#DC2626] hover:scale-110 transition-transform" title="Phase Red"></button>
              <button onclick="window.portfolioCanvas.setColor('#16A34A')" class="w-6 h-6 rounded-none border border-[var(--border-color)] bg-[#16A34A] hover:scale-110 transition-transform" title="Ground Green"></button>
              
              <div class="h-4 w-[1px] bg-[var(--border-subtle)] mx-1"></div>

              <select onchange="window.portfolioCanvas.setSize(this.value)" class="bg-[var(--bg-elevated)] border border-[var(--border-subtle)] px-2 py-1 text-xs">
                <option value="2">เส้นบาง (2px)</option>
                <option value="4" selected>เส้นมาตรฐาน (4px)</option>
                <option value="8">เส้นหนา (8px)</option>
              </select>
            </div>

            <div class="flex items-center gap-2">
              <button onclick="window.portfolioCanvas.clear()" class="btn-tech-secondary text-xs py-1 px-3">
                ล้างหน้ากระดาษ
              </button>
              <button onclick="window.portfolioCanvas.download()" class="btn-tech-primary text-xs py-1 px-3">
                <span>บันทึกภาพวาด (PNG)</span>
              </button>
            </div>
          </div>

          <!-- Drawing Canvas Element -->
          <div class="relative w-full h-[400px] border border-[var(--border-color)] bg-[var(--bg-primary)] bg-grid-blueprint overflow-hidden cursor-crosshair">
            <canvas id="interactive-sketchpad" class="w-full h-full block"></canvas>
            
            <div class="absolute bottom-2 right-2 pointer-events-none font-mono-tech text-[10px] text-[var(--text-muted)] bg-[var(--bg-card)]/80 px-2 py-0.5 border border-[var(--border-subtle)]">
              SKETCH ENGINE ACTIVE // DRAW FREELY
            </div>
          </div>

        </div>

      </div>
    </section>
  `;
}

// Canvas Manager Script
class CanvasManager {
  constructor() {
    this.canvas = null;
    this.ctx = null;
    this.isDrawing = false;
    this.color = '#0047FF';
    this.size = 4;
  }

  init() {
    this.canvas = document.getElementById('interactive-sketchpad');
    if (!this.canvas) return;

    this.ctx = this.canvas.getContext('2d');
    
    // Set actual pixel dimensions to match element size
    const rect = this.canvas.getBoundingClientRect();
    this.canvas.width = rect.width * window.devicePixelRatio;
    this.canvas.height = rect.height * window.devicePixelRatio;
    this.ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    
    this.ctx.lineCap = 'round';
    this.ctx.lineJoin = 'round';

    // Mouse & Touch events
    const start = (e) => {
      this.isDrawing = true;
      const pos = this.getPos(e);
      this.ctx.beginPath();
      this.ctx.moveTo(pos.x, pos.y);
    };

    const draw = (e) => {
      if (!this.isDrawing) return;
      e.preventDefault();
      const pos = this.getPos(e);
      this.ctx.strokeStyle = this.color;
      this.ctx.lineWidth = this.size;
      this.ctx.lineTo(pos.x, pos.y);
      this.ctx.stroke();
    };

    const stop = () => {
      this.isDrawing = false;
    };

    this.canvas.addEventListener('mousedown', start);
    this.canvas.addEventListener('mousemove', draw);
    this.canvas.addEventListener('mouseup', stop);
    this.canvas.addEventListener('mouseleave', stop);

    this.canvas.addEventListener('touchstart', start, { passive: false });
    this.canvas.addEventListener('touchmove', draw, { passive: false });
    this.canvas.addEventListener('touchend', stop);
  }

  getPos(e) {
    const rect = this.canvas.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;
    return {
      x: clientX - rect.left,
      y: clientY - rect.top
    };
  }

  setColor(c) {
    this.color = c;
  }

  setSize(s) {
    this.size = parseInt(s, 10);
  }

  clear() {
    if (!this.ctx || !this.canvas) return;
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  }

  download() {
    if (!this.canvas) return;
    const a = document.createElement('a');
    a.download = `natthakit_sketch_${Date.now()}.png`;
    a.href = this.canvas.toDataURL('image/png');
    a.click();
  }
}

window.portfolioCanvas = new CanvasManager();
window.renderDrawingWidget = renderDrawingWidget;
