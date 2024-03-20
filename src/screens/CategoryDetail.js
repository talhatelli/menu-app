import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Pressable,
} from "react-native";
import { fetchMenuItemCategories, colors } from "../Constant";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const CategoryDetail = ({ route, navigation }) => {
  const { categoryId } = route.params;
  const { categoryName } = route.params;
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchMenuItemCategories(categoryId);
        setMenuItems(items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchItems();
  }, [categoryId]);

  return (
    <View style={{ flex: 1, marginTop: 70, marginHorizontal: 16 }}>
      <Header
        headerText={"Hi, bro "}
        headerIcon={"bell-o"}
        headerExit={true}
        navigation={navigation}
      />

      <SearchFilter icon="search" placeholder={"Enter your menu item"} />

      <View style={{ marginTop: 2 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Categories:{" "}
          <Text
            style={{
              fontSize: 22,
              color: colors.COLOR_PRIMARY,
              fontWeight: "bold",
            }}
          >
            {categoryName}
          </Text>
        </Text>
      </View>

      <View style={{ marginTop: 25, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Menu Items</Text>
        <View style={styles.container}>
          {menuItems.length === 0 ? (
            <View
              style={{
                flex: 1,
                marginTop: 230,
                alignItems: "center",
              }}
            >
              <Text style={styles.noItemsText}>No menu items available.</Text>
            </View>
          ) : (
            <FlatList
              data={menuItems}
              renderItem={({ item }) => (
                <Pressable
                  onPress={() =>
                    navigation.navigate("RecipeDetail", { item: item })
                  }
                  style={styles.itemContainer}
                >
                  <Image source={{ uri: item.imageUrl }} style={styles.image} />
                  <Text style={styles.name}>{item.name}</Text>
                  <View style={styles.priceContainer}>
                    <Text style={styles.price}>{item.price} ₺</Text>
                  </View>
                </Pressable>
              )}
              numColumns={2}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item) => item._id}
            />
          )}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.COLOR_BACKGROUND,
    paddingHorizontal: 16,
    paddingTop: 16,
  },
  noItemsText: {
    fontSize: 18,
    textAlign: "center",
  },
  itemContainer: {
    backgroundColor: colors.COLOR_LIGHT,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    borderRadius: 16,
    alignItems: "center",
    paddingHorizontal: 8,
    paddingVertical: 16,
    marginBottom: 16,
    flex: 1,
    marginHorizontal: 8,
  },
  image: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  price: {
    fontSize: 14,
    marginRight: 4,
  },
});

export default CategoryDetail;
