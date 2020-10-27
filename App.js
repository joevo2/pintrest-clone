import React from 'react';
import { View, StyleSheet, Image, Animated } from 'react-native';
import MasonryList from "react-native-masonry-list";
import {
  SharedElement,
  SharedElementTransition,
  nodeFromRef
} from 'react-native-shared-element';

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
  let startAncestor;
  let startNode;

  let endAncestor;
  let endNode;

  const position = new Animated.Value(0);
  return (
    // <MasonryList
    //   images={IMAGELISTS}
    //   imageContainerStyle={{
    //     borderRadius: 20,
    //   }}
    //   onPressImage={(item, index) => {
    //     alert(JSON.stringify(item))
    //   }}
    // />
    <View ref={ref => startAncestor = nodeFromRef(ref)}>
      <SharedElement onNode={node => startNode = node}>
        <Image style={styles.image} source={{
          uri: 'https://source.unsplash.com/random"',
        }} />
      </SharedElement>
      <SharedElement onNode={node => endNode = node}>
        <Image style={styles.image} source={{
          uri: 'https://source.unsplash.com/random"',
        }} />
      </SharedElement>
      <SharedElementTransition
        start={{
          node: startNode,
          ancestor: startAncestor
        }}
        end={{
          node: endNode,
          ancestor: endAncestor
        }}
        position={position}
        animation='move'
        resize='auto'
        align='auto'
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 50,
    height: 50,
  }
});
