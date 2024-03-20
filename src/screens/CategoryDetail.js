// import React, { useEffect, useState } from "react";
// import { View, Text, FlatList, StyleSheet } from "react-native";
// import { fetchMenuItemCategories } from "../Constant";

// const CategoryDetail = ({ route }) => {
//   const { categoryId } = route.params;
//   const [menuItems, setMenuItems] = useState([]);

//   useEffect(() => {
//     const fetchItems = async () => {
//       try {
//         const items = await fetchMenuItemCategories(categoryId);
//         setMenuItems(items);
//       } catch (error) {
//         console.error("Error fetching menu items:", error);
//       }
//     };
//     fetchItems();
//   }, [categoryId]);

//   return (
//     <View style={styles.container}>
//       <Text style={styles.header}>Menu Items for Category</Text>
//       <FlatList
//         data={menuItems}
//         renderItem={({ item }) => (
//           <View style={styles.item}>
//             <Text>{item.name}</Text>
//             <Text>{item.description}</Text>
//             <Text>{item.price} ₺</Text>
//           </View>
//         )}
//         keyExtractor={(item) => item._id}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     padding: 16,
//   },
//   header: {
//     fontSize: 24,
//     fontWeight: "bold",
//     marginBottom: 16,
//   },
//   item: {
//     marginBottom: 16,
//   },
// });

// export default CategoryDetail;
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

const CategoryDetail = ({ route, navigation }) => {
  const { categoryId } = route.params;
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
    <View>
      <FlatList
        data={menuItems}
        renderItem={({ item }) => (
          <Pressable
            onPress={() =>
              navigation.navigate("CategoryDetail", { item: item })
            }
            style={{
              backgroundColor: colors.COLOR_LIGHT,
              shadowColor: "#000",
              shadowOffset: { width: 0, height: 4 },
              shadowOpacity: 0.1,
              shadowRadius: 7,
              borderRadius: 16,
              marginVertical: 16,
              alignItems: "center",
              paddingHorizontal: 8,
              paddingVertical: 26,
            }}
          >
            <Image
              source={{ uri: item.imageUrl }}
              style={{ width: 150, height: 150, resizeMode: "cover" }}
            />
            <Text>{item.name}</Text>
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
        keyExtractor={(item) => item._id}
      />
    </View>
  );
};

export default CategoryDetail;

const styles = StyleSheet.create({});
