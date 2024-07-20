const API_BASE = "https://example.com//api;";

export const fecthProducts = async () => {
  const response = await fecth("${API_BASE}/products");
  return response.json();
};

export const fecthProductsById = async (id) => {
  const response = await fetch("${API_BASE}/products/${id}");
  return response.json();
};
export const loginUser = async (credentials) => {
  const response = await fetch("${API_BASE}/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  return response.json();
};
