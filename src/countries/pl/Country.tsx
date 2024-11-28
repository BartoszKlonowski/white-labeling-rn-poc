import React from "react";
import { View, Text } from "react-native";
import Config from "react-native-config";

const Country = () => {
  return (
    <View>
      <Text>{`The country is: ${Config.COUNTRY}`}</Text>
      <Text>{`And the content is as follows: `}</Text>
      <Text>{`To jest treść dostępna po polsku z polskimi znakami`}</Text>
    </View>
  )
}

export default Country;
