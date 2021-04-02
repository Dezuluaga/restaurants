import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'

import Serch from '../screens/Serch'

const Stack = createStackNavigator()

export default function SerchStack() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name = "serch"
                component = {Serch}
                options = {{ title: "Buscar" }}
            />   
        </Stack.Navigator>
    )
}
