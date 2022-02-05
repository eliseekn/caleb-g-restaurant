import React from 'react'
import { SafeAreaView, View, Image, Text, TouchableOpacity } from "react-native"
import styles from "../styles/preview"
import { Container, Stack } from '../components'

export default function Preview({ navigation }) {
    return(
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={styles.container}>
                <Image source={require('../../assets/menu_1.png')} style={styles.image} />
                    
                <View style={{ top: -80 }}>
                    <Text style={styles.title}>Veggie Tomato Mix</Text>
                    <Text style={styles.price}>$15</Text>

                    <Stack mt={30}>
                        <Stack mb={35}>
                            <Text style={styles.infoTitle}>Delivery info</Text>
                            <Text style={styles.infoText}>Delivered between monday aug and thursday 20 from 8pm to 91:32 pm</Text>
                        </Stack>

                        <Text style={styles.infoTitle}>Return policy</Text>
                        <Text style={styles.infoText}>All our foods are double checked before leaving our stores so by any case you found a broken food please contact our hotline immediately.</Text>
                    </Stack>
                </View>

                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Main')}>
                    <Text style={{ color: '#ffffff' }}>Add to cart</Text>
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}
