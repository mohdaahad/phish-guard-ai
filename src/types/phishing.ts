export interface UrlResult {
  url: string;
  domain: string;
  classification: 'PHISHING' | 'SAFE' | 'SUSPICIOUS';
  score: number;
  confidence: number;
  cse_target?: string;
  evidence_path?: string;
  ocr_text?: string;
  is_phishing?: boolean;
}

export interface Progress {
  total: number;
  processed: number;
  active: number;
  inactive: number;
  phishing_count: number;
  safe_count: number;
  suspicious_count: number;
  phishing_percentage: number;
  safe_percentage: number;
  suspicious_percentage: number;
}

export interface DashboardStats {
  total_urls: number;
  total_phishing: number;
  total_safe: number;
  total_suspicious: number;
  total_live: number;
  total_dead: number;
}
