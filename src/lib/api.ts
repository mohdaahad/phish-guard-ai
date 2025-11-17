// Configure your Python backend URL here
const API_BASE_URL = import.meta.env.VITE_PYTHON_API_URL || 'http://localhost:5000';

export const api = {
  async uploadExcel(file: File) {
    const formData = new FormData();
    formData.append('file', file);
    
    const response = await fetch(`${API_BASE_URL}/process-excel`, {
      method: 'POST',
      body: formData,
    });
    
    if (!response.ok) {
      throw new Error('Failed to upload file');
    }
    
    return response.json();
  },

  async getProgress() {
    const response = await fetch(`${API_BASE_URL}/progress`);
    if (!response.ok) {
      throw new Error('Failed to fetch progress');
    }
    return response.json();
  },

  async getResults() {
    const response = await fetch(`${API_BASE_URL}/results`);
    if (!response.ok) {
      throw new Error('Failed to fetch results');
    }
    return response.json();
  },

  async submitManualVerification(url: string, isPhishing: boolean) {
    const response = await fetch(`${API_BASE_URL}/manual-verification`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        url,
        is_phishing: isPhishing,
      }),
    });
    
    if (!response.ok) {
      throw new Error('Failed to submit verification');
    }
    
    return response.json();
  },

  getEvidenceUrl(domain: string) {
    return `${API_BASE_URL}/evidence/${domain}.png`;
  },
};
