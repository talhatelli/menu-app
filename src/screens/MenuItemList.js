import React, { useEffect, useState } from "react";
import { StyleSheet, View, Text, SafeAreaView, ScrollView } from "react-native";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";
import Categories from "../components/Categories";
import RecipeCard from "../components/RecipeCard";
import { fetchMenuItems } from "../Requests";
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
    if (menuItem && menuItem._id) {
      navigation.navigate("MenuItemDetail", { item: menuItem });
    } else {
      console.error("Invalid menuItem:", menuItem);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1, marginHorizontal: 16 }}>
      <Header headerText={"Menu Marvel"} headerIcon={"bell-o"} />
      <SearchFilter
        icon="search"
        placeholder={"Enter your menu item"}
        data={menuItems}
        setSearchResults={setSearchResults}
        setShowDropdown={setShowDropdown}
        showDropdown={showDropdown}
        searchResults={searchResults}
      />
      {searchResults.length > 0 ? (
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
      ) : (
        <View>
          <View style={{ marginTop: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Categories</Text>
            <Categories />
          </View>
          <View style={{ marginTop: 22 }}>
            <Text style={{ fontSize: 22, fontWeight: "bold" }}>Menu Items</Text>
            <RecipeCard />
          </View>
        </View>
      )}
    </SafeAreaView>
  );
};

export default MenuItemList;

const styles = StyleSheet.create({
  dropdown: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    backgroundColor: "white",
    marginTop: 5,
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    backgroundColor: "white",
  },
});
