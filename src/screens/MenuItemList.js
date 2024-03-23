import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import Categories from "../components/Categories";
import RecipeCard from "../components/RecipeCard";
import { fetchMenuItems } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const MenuItemList = () => {
  const navigation = useNavigation();
  const [menuItems, setMenuItems] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    const fetchMenuItemsData = async () => {
      try {
        const items = await fetchMenuItems();
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchMenuItemsData();
  }, []);
  const handleMenuItemPress = (menuItem) => {
    navigation.navigate("MenuItemDetail", { menuItemId: menuItem._id });
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Menu Marvel"} headerIcon={"bell-o"} />
      <SearchFilter
        icon="search"
        placeholder={"Enter your menu item"}
        data={menuItems}
        setSearchResults={(results) => {
          console.log("New Search Results:", results); // Add this line to check searchResults
          setSearchResults(results);
        }}
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
        searchResults={searchResults} // searchResults prop'unu geçirin
      />

      {showDropdown && (
        <ScrollView style={styles.dropdown}>
          {searchResults.map((item) => (
            <Text
              key={item._id}
              style={styles.dropdownItem}
              onPress={() => handleMenuItemPress(item)}
            >
              {item.name}
            </Text>
          ))}
        </ScrollView>
      )}
      <View style={{ marginTop: 22 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
        <Categories />
      </View>

      <View style={{ marginTop: 22, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Menu Items</Text>
        <RecipeCard />
      </View>
    </SafeAreaView>
  );
};

export default MenuItemList;

const styles = StyleSheet.create({
  dropdown: {
    maxHeight: 200,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginTop: 5,
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});
