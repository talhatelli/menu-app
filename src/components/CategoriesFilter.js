import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import {
  fetchMenuItemCategories,
  fetchCategories,
  colors,
  fetchMenuItems,
} from "../Constant";
import { useNavigation } from "@react-navigation/native";

const CategoriesFilter = () => {
  const [categories, setCategories] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const categoriesData = await fetchCategories();
        setCategories(categoriesData);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };
    fetchData();
  }, []);

  const handleCategoryPress = async (categoryId, categoryName) => {
    try {
      const menuItems = await fetchMenuItemCategories(categoryId);
      navigation.navigate("CategoryDetail", {
        categoryId: categoryId,
        categoryName: categoryName,
      });
    } catch (error) {
      console.error("Error fetching menu items:", error);
    }
  };

  return (
    <View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((category, index) => {
          return (
            <View
              key={index}
              style={{
                backgroundColor:
                  index === 0 ? colors.COLOR_PRIMARY : colors.COLOR_LIGHT,
                marginRight: 36,
                borderRadius: 8,
                paddingHorizontal: 16,
                paddingVertical: 10,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.1,
                shadowRadius: 7,
                marginVertical: 16,
              }}
            >
              <Text
                style={{
                  color: index === 0 && colors.COLOR_LIGHT,
                  fontSize: 18,
                }}
                onPress={() => handleCategoryPress(category._id, category.name)}
              >
                {category.name}
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default CategoriesFilter;

const styles = StyleSheet.create({});
