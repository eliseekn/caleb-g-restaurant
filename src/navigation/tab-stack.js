import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Orders, Profile, Favorites } from '../screens'
import HomeStack from './home-stack'
import { Icon } from 'react-native-elements'

const Tab = createBottomTabNavigator()

export default function TabStack() {
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                    let icon;
                        
                    switch (route.name) {
                        case 'HomeStack':
                            icon = 'home'
                            break
                        
                        case 'Favorites':
                            icon = 'favorite-border'
                            break
                        
                        case 'Profile':
                            icon = 'person-outline'
                            break
                        
                        case 'Orders':
                            icon = 'history'
                            break
                    }

                    return <Icon name={icon} type='material-icon' color={color} style={size} />
                },

                tabBarActiveTintColor: '#fa4a0c',
                tabBarInactiveTintColor: '#adadaf',
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: '#f2f2f2',
                    borderTopColor: '#f2f2f2',
                }
            })}
        >
            <Tab.Screen name="HomeStack" component={HomeStack} options={{ headerShown: false }} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
            <Tab.Screen name="Orders" component={Orders} />
        </Tab.Navigator>
    )
}
