import React from "react";
import ModalSelector from "react-native-modal-selector";
import { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
  TextInput,
  Switch,
} from "react-native";

const Home = () => {
  const [estado, datos] = useState([]);
  let index = 0;
  const data = [
    { key: index++, section: true, label: "Fruits" },
    { key: index++, label: "Red Apples" },
    { key: index++, label: "Cherries" },
    {
      key: index++,
      label: "Cranberries",
      accessibilityLabel: "Tap here for cranberries",
    },
    // etc...
    // Can also add additional custom keys which are passed to the onChange callback
    { key: index++, label: "Vegetable", customKey: "Not a fruit" },
  ];
  return (
    <View
      style={{ flex: 1, justifyContent: "space-around", padding: 50 }}
    >
      // Default mode
      <ModalSelector
        data={data}
        initValue="Select something yummy!"
        onChange={(option) => {
          alert(`${option.label} (${option.key}) nom nom nom`);
        }}
      />
      // Wrapper
      <ModalSelector
        data={data}
        initValue="Select something yummy!"
        supportedOrientations={["landscape"]}
        accessible={true}
        scrollViewAccessibilityLabel={"Scrollable options"}
        cancelButtonAccessibilityLabel={"Cancel Button"}
        onChange={(option) => {
          estado.setState({ datos: option.label });
        }}
      >
        <TextInput
          style={{
            borderWidth: 1,
            borderColor: "#ccc",
            padding: 10,
            height: 30,
          }}
          editable={false}
          placeholder="Select something yummy!"
          value={datos}
        />
      </ModalSelector>
      // Custom component
      <ModalSelector
        data={data}
        ref={(selector) => {
          datos.selector = selector;
        }}
        customSelector={
          <Switch onValueChange={() => this.selector.open()} />
        }
      />
    </View>
  );
};
export default Home;
