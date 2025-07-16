import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Inicio from "../Pages/Inicio";
import Login from "../Components/Login/login";
import CriarConta from "../Components/Login/criarConta";

const Stack = createNativeStackNavigator();

export default function NoAuthRotas() {
  return (
    <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}
    >
    <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="CriarConta" component={CriarConta} />

    </Stack.Navigator>
  );
}
