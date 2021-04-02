import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'



import RestaurantsStack from './RestaurantsStack'
import SerchStack from './SerchStack'
import AccountStack from './AccountSack'
import FavoritesStack from './FavoritesStack'
import TopRestaurantsStack from './TopRestaurantsStack'


const Tab = createBottomTabNavigator()

export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator>
                <Tab.Screen
                    name = "restaurants"
                    component = {RestaurantsStack}
                    options = {{ title: "Restaurantes" }}
                />
                <Tab.Screen
                    name = "favorites"
                    component = {FavoritesStack}
                    options = {{ title: "Favoritos" }}
                />
                <Tab.Screen
                    name = "top-restaurants"
                    component = {TopRestaurantsStack}
                    options = {{ title: "Top 5" }}
                />
                <Tab.Screen
                    name = "serch"
                    component = {SerchStack}
                    options = {{ title: "Buscar" }}
                />
                <Tab.Screen
                    name = "account"
                    component = {AccountStack}
                    options = {{ title: "Cuenta" }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    )
}