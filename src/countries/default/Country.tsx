import React from "react";
import { View, Text } from "react-native";
import Config from "react-native-config";

const Country = () => {
  return (
    <View>
      <Text>{`The country is: ${Config.COUNTRY}`}</Text>
      <Text>{`And this is the default content that user can see.`}</Text>
    </View>
  )
}

export default Country;
