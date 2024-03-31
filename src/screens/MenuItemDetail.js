import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { fetchMenuItemDetail, colors } from "../Requests";
import Header from "../components/Header";
import SearchFilter from "../components/SearchFilter";

const MenuItemDetail = ({ route, navigation }) => {
  const menuItemId = route.params.item._id;
  const [menuItem, setMenuItem] = useState(null);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const items = await fetchMenuItemDetail(menuItemId);
        setMenuItem(items);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchItems();
  }, [menuItemId]);

  return (
    <View style={{ flex: 1, marginTop: 70, marginHorizontal: 16 }}>
      <Header
        headerText={"Menu Marvel"}
        headerIcon={"bell-o"}
        headerExit={true}
        navigation={navigation}
      />

      <View style={{ marginTop: 40 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>
          Categories:{" "}
          {menuItem &&
            menuItem.categories.map((category) => (
              <Text
                key={category._id}
                style={{
                  fontSize: 22,
                  color: colors.COLOR_PRIMARY,
                  fontWeight: "bold",
                }}
              >
                {category.name}
              </Text>
            ))}
        </Text>
      </View>

      <View style={{ marginTop: 40, flex: 1 }}>
        <Text style={{ fontSize: 22, fontWeight: "bold" }}>Menu Items</Text>
        <View style={styles.container}>
          {menuItem && (
            <View>
              <Image source={{ uri: menuItem.imageUrl }} style={styles.image} />
              <Text style={styles.name}>{menuItem.name}</Text>
              {menuItem.description ? (
                <Text style={styles.description}>{menuItem.description}</Text>
              ) : null}
              <View style={styles.priceContainer}>
                <Text style={styles.price}>Price: {menuItem.price} ₺</Text>
              </View>
            </View>
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
  image: {
    width: "100%",
    height: "60%",
    resizeMode: "cover",
    marginTop: 30,
    marginBottom: 8,
    borderRadius: 8,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 4,
  },
  description: {
    fontSize: 17,
    marginBottom: 4,
  },
  priceContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 4,
  },
  price: {
    fontSize: 17,
    marginRight: 4,
  },
});

export default MenuItemDetail;
