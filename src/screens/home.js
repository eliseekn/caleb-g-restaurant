import React, { useState } from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, ScrollView, Platform, KeyboardAvoidingView } from "react-native"
import { CardVertical, Container, Stack } from '../components'
import styles from "../styles/home"
import { SearchBar } from 'react-native-elements'


const tabsItems = ['Foods', 'Drinks', 'Snacks', 'Sauces']

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

export default function Home({ navigation }) {
    const [search, setSearch] = useState('')
    const [activeTab, setActiveTab] = useState('Foods')

    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={styles.container}>
                <Stack mb={30}>
                    <Text style={styles.title}>Delicious</Text>
                    <Text style={styles.title}>food for you</Text>
                </Stack>

                <Stack mb={20}>
                    <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                        <SearchBar
                            placeholder="Search"
                            onChangeText={value => setSearch(value)}
                            value={search}
                            inputStyle={{ backgroundColor: '#efeeee' }}
                            inputContainerStyle={{ backgroundColor: '#efeeee' }}
                            containerStyle={{ backgroundColor: '#efeeee', borderRadius: 20, borderTopColor: '#efeeee', borderBottomColor: '#efeeee' }}
                            onEndEditing={() => navigation.navigate('Search', { searchText: search })}
                        />
                    </KeyboardAvoidingView>
                </Stack>

                <Stack mb={40}>
                    <View style={styles.tabs}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {tabsItems.map((tab, index) => {
                                return (
                                    <TouchableOpacity style={[styles.tab, activeTab === tab && styles.activeTab]} onPress={() => setActiveTab(tab)} key={index}>
                                        <Text style={[styles.tabTitle, activeTab === tab && styles.activeTabTitle]}>{tab}</Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </Stack>

                <View style={styles.tabs}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                        {menuItems.map((item, index) => { return <CardVertical data={item} navigation={navigation} key={index} /> })}
                    </ScrollView>
                </View>
            </Container>
        </SafeAreaView>
    )
}
