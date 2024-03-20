import {
  FlatList,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";
import React, { useEffect, useState } from "react";
import { colors, fetchMenuItems } from "../Constant";
import { useNavigation } from "@react-navigation/native";

const RecipeCard = () => {
  const [data, setData] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const menuItems = await fetchMenuItems();
        setData(menuItems);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    };
    fetchData();
  }, []);

  return (
    <View>
      {data.length === 0 ? (
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
          data={data}
          renderItem={({ item }) => (
            <Pressable
              onPress={() =>
                navigation.navigate("RecipeDetail", { item: item })
              }
              style={{
                backgroundColor: colors.COLOR_LIGHT,
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.2,
                shadowRadius: 7,
                borderRadius: 16,
                marginVertical: 16,
                alignItems: "center",
                paddingHorizontal: 16,
                paddingVertical: 26,
              }}
            >
              <Image
                source={{ uri: item.imageUrl }}
                style={{
                  borderRadius: 16,
                  width: 150,
                  height: 150,
                  resizeMode: "cover",
                }}
              />
              <Text
                style={{ fontSize: 20, marginTop: 8 }}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.name.length > 10
                  ? `${item.name.substring(0, 10)}...`
                  : item.name}
              </Text>

              <View style={{ flexDirection: "row", marginTop: 8 }}>
                <Text>{item.price} ₺</Text>
              </View>
            </Pressable>
          )}
          numColumns={2}
          columnWrapperStyle={{
            justifyContent: "space-between",
          }}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
};

export default RecipeCard;

const styles = StyleSheet.create({});
