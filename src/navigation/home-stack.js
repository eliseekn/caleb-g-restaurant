import React, { useState } from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Icon } from 'react-native-elements'
import { Home, Preview, Search, Cart, Checkout, Payment } from '../screens'
import { Text, TextInput, TouchableOpacity } from 'react-native'

const Stack = createNativeStackNavigator()

export default function HomeStack() {
    return (
        <NavigationContainer independent={true}>
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#f2f2f2',
                        borderBottomColor: '#f2f2f2',
                    }
                 }}
            >
                <Stack.Screen
                    name="Home" 
                    component={Home} 
                    options={({ navigation }) => ({
                        headerTitle: () => (<Icon name="menu" type='material-icon' color='#000000' />),
                        headerLeft: () => (<Text></Text>),
                        headerRight: () => (
                            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
                                <Icon name="shopping-cart" type='material-icon' color='#000000' style={{ marginRight: 15 }} />
                            </TouchableOpacity>
                        ),
                    })}
                />

                <Stack.Screen
                    name="Preview"
                    component={Preview}
                    options={{
                        headerTitle: () => (<Text></Text>),
                        headerRight: () => (
                            <Icon name="favorite-border" type='material-icon' color='#000000' style={{ marginRight: 15 }} />
                        ),
                    }}
                />

                <Stack.Screen name="Search" component={Search}
                    options={({ route }) => ({
                        headerTitle: () => (<Text>Search results for: "{ route.params.searchText}"</Text>),
                    })}
                />

                <Stack.Screen name="Cart" component={Cart} />
                <Stack.Screen name="Checkout" component={Checkout} />
                <Stack.Screen name="Payment" component={Payment} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}
