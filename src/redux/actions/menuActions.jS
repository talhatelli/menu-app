export const setMenuItems = (items) => ({
  type: "SET_MENU_ITEMS",
  payload: items,
});

export const fetchMenuItems = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:5001/menu-items");
      const data = await response.json();

      dispatch(setMenuItems(data));
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };
};
