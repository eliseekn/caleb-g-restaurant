import React from 'react'
import { SafeAreaView, View, ScrollView, Text } from "react-native"
import { Container, CardVertical, Stack } from '../components'
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

    {
        image: require('../../assets/menu_4.png'),
        title: 'Egg and Cuccumber',
        price: '$30'
    }
]

export default function Search({ route, navigation }) {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={styles.container}>
                <Stack mb={30} />

                <ScrollView showsVerticalalScrollIndicator={false}>
                    {/* {menuItems.map((item, index) => {
                        return (
                            <Stack mb={20} key={index}>
                                <CardVertical data={item} navigation={navigation} />
                            </Stack>
                        )
                    })} */}
                </ScrollView>
            </Container>
        </SafeAreaView>
    )
}
