import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import EpisodesScreen from "../screens/Episodes";
import HomeScreen from "../screens/Home";
import SeasonsScreen from "../screens/Seasons";

const { Navigator, Screen } = createStackNavigator();

export function StackRoutes() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName={"Home"}
    >
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Episodes" component={EpisodesScreen} />
      <Screen name="Seasons" component={SeasonsScreen} />
    </Navigator>
  );
}
