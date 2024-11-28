import React from "react";
import { View, Text } from "react-native";
import Config from "react-native-config";

const Country = () => {
  return (
    <View>
      <Text>{`Content is unavailable in ${Config.COUNTRY}`}</Text>
      <Text>{`контенту не буду`}</Text>
    </View>
  )
}

export default Country;
