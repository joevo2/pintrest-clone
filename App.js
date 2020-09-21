import React from 'react';
import { StyleSheet } from 'react-native';
import MasonryList from "react-native-masonry-list";

const IMAGELISTS = [
  { uri: "https://source.unsplash.com/user/erondu" },
  { uri: "https://source.unsplash.com/collection/190727" },
  { uri: "https://source.unsplash.com/daily" },
  { uri: "https://source.unsplash.com/1600x900/?nature,water" },
  { uri: "https://source.unsplash.com/WLUHO9A_xik" },
  { uri: "https://source.unsplash.com/random" },
  { uri: "https://source.unsplash.com/collection/190227" },
  { uri: "https://source.unsplash.com/collection/191727" },
]

export default function App() {
  return (
    <MasonryList
      images={IMAGELISTS}
      imageContainerStyle={{
        borderRadius: 20,
      }}
      onPressImage={(item, index) => {
        alert(JSON.stringify(item))
      }}
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
