import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../Pages/Dashboard/Home'
const Stack = createNativeStackNavigator()

export default function Auth() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name='Home'
                component={Home}
                options={{ headerShown: false }}
            />
        </Stack.Navigator>
    )
}