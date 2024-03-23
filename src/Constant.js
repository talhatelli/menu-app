export const colors = {
  COLOR_PRIMARY: "#f96163",
  COLOR_LIGHT: "#fff",
  COLOR_DARK: "#000",
  COLOR_DARK_ALT: "#262626",
};

const BASE_URL = "http://localhost:5001";

export const fetchCategories = async () => {
  try {
    const response = await fetch(`${BASE_URL}/categories/app`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};
export const fetchMenuItemCategories = async (categoryId) => {
  try {
    const response = await fetch(`${BASE_URL}/categories/${categoryId}/items`);
    if (!response.ok) {
      throw new Error("Failed to fetch menu items for category");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items for category:", error);
    throw error;
  }
};
export const fetchMenuItems = async () => {
  try {
    const response = await fetch(`${BASE_URL}/menu-items/app`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};
export const fetchMenuItemDetail = async (menuItemId) => {
  try {
    const response = await fetch(`${BASE_URL}/menu-items/${menuItemId}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching menu items:", error);
    throw error;
  }
};
