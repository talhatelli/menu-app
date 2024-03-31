import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { colors } from "../Requests";

const Header = ({ headerText, headerIcon, headerExit, navigation }) => {
  return (
    <View style={{ flexDirection: "row", alignItems: "center" }}>
      <Text style={{ flex: 1, fontSize: 22, fontWeight: "700" }}>
        {headerText}
      </Text>

      <FontAwesome name={headerIcon} size={24} color="#f96163" />
      {headerExit && (
        <TouchableOpacity
          onPress={() => navigation.navigate("MenuItemList")}
          style={{
            borderRadius: 50,
            backgroundColor: colors.COLOR_PRIMARY,
            width: 30,
            height: 30,
            alignItems: "center",
            justifyContent: "center",
            marginLeft: 10,
          }}
        >
          <FontAwesome
            name="chevron-right"
            size={15}
            color={colors.COLOR_LIGHT}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});
