import { View, Text, FlatList } from "react-native";
import React from "react";
import Category from "../Components/Category";
import values from "../const/values";
import { categories } from "../const/data";
import styles from "../const/styles";

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={{ paddingLeft: values.horizontalPadding }}>
      <FlatList
        numColumns={2}
        data={categories}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <Category
            category={item}
            onPress={(val) => navigation.navigate(`${val}`)}
          />
        )}
      />
    </View>
  );
};

export default CategoryScreen;
