// Storage Management: LocalStorage for Data + IndexedDB for Big Files (Media, Fonts, PDFs)
const STORAGE_KEY = "natthakit_portfolio_state_v1";
const DB_NAME = "NatthakitPortfolioDB";
const DB_VERSION = 1;
const STORE_NAME = "user_media_files";

class PortfolioStorage {
  constructor() {
    this.db = null;
    this.initIndexedDB();
  }

  // Initialize IndexedDB for large media and binary files
  initIndexedDB() {
    return new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(STORE_NAME)) {
          db.createObjectStore(STORE_NAME, { keyPath: "id" });
        }
      };

      request.onsuccess = (event) => {
        this.db = event.target.result;
        resolve(this.db);
      };

      request.onerror = (event) => {
        console.error("IndexedDB initialization error:", event.target.error);
        resolve(null); // Fallback gracefully
      };
    });
  }

  // Load portfolio state from LocalStorage or default
  loadData() {
    try {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const parsed = JSON.parse(stored);
        // Merge with default in case new fields were added
        return {
          ...DEFAULT_PORTFOLIO_DATA,
          ...parsed,
          profile: { ...DEFAULT_PORTFOLIO_DATA.profile, ...(parsed.profile || {}) },
          settings: { ...DEFAULT_PORTFOLIO_DATA.settings, ...(parsed.settings || {}) }
        };
      }
    } catch (e) {
      console.warn("Failed to load saved portfolio data, using default:", e);
    }
    return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  }

  // Save portfolio state to LocalStorage
  saveData(data) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
      return true;
    } catch (e) {
      console.error("Error saving to LocalStorage:", e);
      return false;
    }
  }

  // Reset to default data
  resetData() {
    localStorage.removeItem(STORAGE_KEY);
    return JSON.parse(JSON.stringify(DEFAULT_PORTFOLIO_DATA));
  }

  // Export data as JSON file for download
  exportJSON(data) {
    const jsonString = JSON.stringify(data, null, 2);
    const blob = new Blob([jsonString], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `natthakit_portfolio_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  }

  // Store large file in IndexedDB
  async saveFile(file) {
    return new Promise(async (resolve, reject) => {
      if (!this.db) {
        await this.initIndexedDB();
      }

      const reader = new FileReader();
      reader.onload = () => {
        const fileRecord = {
          id: "file_" + Date.now() + "_" + Math.random().toString(36).substr(2, 9),
          name: file.name,
          type: file.type,
          size: file.size,
          lastModified: file.lastModified,
          dataUrl: reader.result,
          uploadedAt: new Date().toISOString()
        };

        try {
          const transaction = this.db.transaction([STORE_NAME], "readwrite");
          const store = transaction.objectStore(STORE_NAME);
          const request = store.put(fileRecord);

          request.onsuccess = () => {
            resolve(fileRecord);
          };

          request.onerror = (e) => {
            reject(e.target.error);
          };
        } catch (err) {
          // If IndexedDB fails, return the DataURL directly
          resolve(fileRecord);
        }
      };

      reader.onerror = (e) => reject(e);
      reader.readAsDataURL(file);
    });
  }

  // Retrieve file by ID
  async getFile(id) {
    return new Promise(async (resolve, reject) => {
      if (!this.db) await this.initIndexedDB();
      if (!this.db) return resolve(null);

      try {
        const transaction = this.db.transaction([STORE_NAME], "readonly");
        const store = transaction.objectStore(STORE_NAME);
        const request = store.get(id);

        request.onsuccess = () => resolve(request.result);
        request.onerror = () => resolve(null);
      } catch (err) {
        resolve(null);
      }
    });
  }
}

// Global instance
window.portfolioStorage = new PortfolioStorage();
