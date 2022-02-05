import React, { useState } from 'react'
import { Text } from "react-native"
import { SafeAreaView, TouchableOpacity, ScrollView, View } from "react-native"
import { Container, Stack } from '../components'
import styles from "../styles/checkout"
import { CheckBox, Icon } from 'react-native-elements'
import MapView, { Marker } from 'react-native-maps'

export default function Checkout({ navigation }) {
    const [checkCreditCard, setCheckCreditCard] = useState(true)
    const [checkMobileMoney, setCheckMobileMoney] = useState(false)

    const [region, setRegion] = useState({
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
    })

    const checkCreditCardMethod = () => {
        setCheckCreditCard(!checkCreditCard)
        setCheckMobileMoney(!checkMobileMoney)
    }

    const checkMobileMoneyMethod = () => {
        setCheckCreditCard(!checkCreditCard)
        setCheckMobileMoney(!checkMobileMoney)
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={styles.container}>
                <Stack mb={30} />

                <ScrollView showsVerticalalScrollIndicator={false}>
                    <Text>Payment method</Text>

                    <Stack mb={10} />

                    <View style={styles.card}>
                        <CheckBox
                            title="Credit card"
                            checkedIcon={
                                <Icon
                                    name="radio-button-checked"
                                    type="material"
                                    color="#fa4a0c"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            uncheckedIcon={
                                <Icon
                                    name="radio-button-unchecked"
                                    type="material"
                                    color="grey"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            checked={checkCreditCard}
                            onPress={() => checkCreditCardMethod()}
                            containerStyle={{ borderWidth: 0, backgroundColor: '#fff', padding: 0 }}
                        />

                        <CheckBox
                            title="Mobile money"
                            checkedIcon={
                                <Icon
                                    name="radio-button-checked"
                                    type="material"
                                    color="#fa4a0c"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            uncheckedIcon={
                                <Icon
                                    name="radio-button-unchecked"
                                    type="material"
                                    color="grey"
                                    size={25}
                                    iconStyle={{ marginRight: 10 }}
                                />
                            }
                            checked={checkMobileMoney}
                            onPress={() => checkMobileMoneyMethod()}
                            containerStyle={{ borderWidth: 0, backgroundColor: '#fff', padding: 0 }}
                        />
                    </View>

                    <Stack mt={30} />

                    <Text>Address details</Text>

                    <Stack mb={10} />

                    <View style={[{height: 280}, styles.card]}>
                        <MapView
                            initialRegion={region}
                            onRegionChange={region => setRegion(region)}
                            style={styles.map}
                        >
                            <Marker coordinate={region} />
                        </MapView>
                    </View>
                </ScrollView>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Payment')}>
                    <Text style={{ color: '#ffffff' }}>Proceed payment</Text>
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}
