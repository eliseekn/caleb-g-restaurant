import React from 'react'
import { Text, View, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import { Container, Stack } from '../components'
import styles from '../styles/welcome'

export default function Welcome({ navigation }) {
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={styles.container}>
                <View style={styles.logo}>
                    <Image source={require('../../assets/logo.png')} style={{ width: 40, height: 40 }} />
                </View>

                <Stack mt={25}>
                    <Text style={[{ textTransform: 'uppercase', marginBottom: 5 }, styles.title]}>Caleb G</Text>
                    <Text style={styles.title}>Restaurant</Text>
                </Stack>

                <View style={styles.images}>
                    <Image source={require('../../assets/woman.png')} style={{ width: 280, height: 380, left: -45, zIndex: 11, resizeMode: 'stretch' }} />
                    <Image source={require('../../assets/man.png')} style={{ width: 200, height: 300, left: -114, top: 65, resizeMode: 'stretch' }} />
                </View>
            
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
                    <Text style={{ color: '#ff4b3a', textAlign: 'center' }}>Get started</Text>
                </TouchableOpacity>
            </Container>
        </SafeAreaView>
    )
}
