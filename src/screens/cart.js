import React from 'react'
import { Text } from "react-native"
import { SafeAreaView, TouchableOpacity, ScrollView, View } from "react-native"
import { Container, CardHorizontal, Stack } from '../components'
import styles from "../styles/search"

const menuItems = [
    {
        image: require('../../assets/menu_1.png'),
        title: 'Veggie Tomato Mix',
        price: '$15'
    },

    {
        image: require('../../assets/menu_2.png'),
        title: 'Fried Chicken Sauce',
        price: '$30'
    },

    {
        image: require('../../assets/menu_3.png'),
        title: 'Rice and Beef Soup',
        price: '$50'
    },
]

export default function Cart({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={styles.container}>
                <Stack mb={30} />

                <ScrollView showsVerticalalScrollIndicator={false}>
                    <View style={{ alignItems: 'center' }}>
                        <Text style={{ fontSize: 30 }}>Total: <Text style={{ fontSize: 30, fontWeight: 'bold', color: '#fa4a0c' }}>$500</Text></Text>
                    </View>

                    <Stack mb={20} />

                    {menuItems.map((item, index) => {
                        return (
                            <Stack mb={20} key={index}>
                                <CardHorizontal data={item} navigation={navigation} />
                            </Stack>
                        )
                    })}

                </ScrollView>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Checkout')}>
                    <Text style={{ color: '#ffffff' }}>Complete order</Text>
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}
