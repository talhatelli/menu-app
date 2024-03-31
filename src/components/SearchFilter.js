import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  FlatList,
  navigation,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SearchFilter = ({
  icon,
  placeholder,
  data,
  setSearchResults,
  setShowDropdown,
  searchResults,
}) => {
  const navigation = useNavigation();
  const [searchText, setSearchText] = useState("");

  const handleSearch = (text) => {
    setSearchText(text);
    const results = data.filter((item) =>
      item.name.toLowerCase().includes(text.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={20} color="#f96163" />
      <TextInput
        style={styles.input}
        placeholder={placeholder}
        onChangeText={handleSearch}
        value={searchText}
      />
      <TouchableOpacity
        style={styles.closeButton}
        onPress={() => {
          setSearchText("");
          setSearchResults([]);
          setShowDropdown(false);
        }}
      >
        <FontAwesome name="times" size={20} color="#f96163" />
      </TouchableOpacity>

      {searchResults && <View style={styles.dropdownContainer}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 8,
    paddingHorizontal: 16,
    marginVertical: 19,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
    height: 40,
  },
  input: {
    paddingLeft: 8,
    fontSize: 16,
    color: "#808080",
    flex: 1,
  },
  closeButton: {
    marginLeft: "auto",
  },
  dropdownContainer: {
    zIndex: 999,
    position: "absolute",
    // top: 43,
    // left: 16,
    // right: 16,
    backgroundColor: "#fff",
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 7,
  },
  dropdownItem: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  dropdownText: {
    fontSize: 16,
    color: "#333",
  },
});

export default SearchFilter;
