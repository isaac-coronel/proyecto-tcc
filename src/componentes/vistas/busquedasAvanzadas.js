//import RNPickerSelect from "@react-native-picker/picker";
import RNPickerSelect, {
  defaultStyles,
} from "react-native-picker-select";
import React from "react";
import {
  View,
  ScrollView,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";

const Dropdown = () => {
  return (
    <>
      <View>
        <RNPickerSelect
          onValueChange={(value) => console.log(value)}
          items={[
            { label: "Football", value: "football" },
            { label: "Baseball", value: "baseball" },
            { label: "Hockey", value: "hockey" },
          ]}
        />
      </View>
    </>
  );
};
export default Dropdown;
