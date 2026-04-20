const envApiBase = (import.meta.env.VITE_API_BASE || "").trim();

export const API_BASE = (envApiBase || "http://localhost:5000").replace(/\/+$/, "");
