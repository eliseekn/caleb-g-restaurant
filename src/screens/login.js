import React from 'react'
import { Text, SafeAreaView, View, Image, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { useState } from 'react'
import styles from '../styles/login'
import { Stack, Container } from '../components'
import { Input } from 'react-native-elements'

export default function Login({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [name, setName] = useState('')
    const [activeTab, setActiveTab] = useState('Log in')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <Container style={styles.container}>
                <View style={styles.header}>
                    <Image source={require('../../assets/logo.png')} style={styles.logo} />

                    <View style={styles.tabs}>
                        <TouchableOpacity style={[styles.tab, activeTab === 'Log in' && styles.activeTab]} onPress={() => setActiveTab('Log in')}>
                            <Text style={[styles.tabTitle, activeTab == 'Log in' && styles.activeTabTitle]}>Log in</Text>
                        </TouchableOpacity>
                        
                        <TouchableOpacity style={[styles.tab, activeTab === 'Sign up' && styles.activeTab]} onPress={() => setActiveTab('Sign up')}>
                            <Text style={[styles.tabTitle, activeTab == 'Sign up' && styles.activeTabTitle]}>Sign up</Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View style={styles.footer}>
                    <View>
                        {activeTab === 'Sign up' && <Stack mb={30}>
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                                <Input
                                    label='Name'
                                    labelStyle={{ fontWeight: 'normal' }}
                                    value={name}
                                    onChangeText={value => setName(value)}
                                />
                            </KeyboardAvoidingView>
                        </Stack>}

                        <Stack mb={30}>
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                                <Input
                                    label='Email address'
                                    labelStyle={{ fontWeight: 'normal' }}
                                    value={email}
                                    onChangeText={value => setEmail(value)}
                                />
                            </KeyboardAvoidingView>
                        </Stack>

                        <Stack mb={30}>
                            <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? "padding" : "height"}>
                                <Input
                                    label='Password'
                                    labelStyle={{ fontWeight: 'normal' }}
                                    value={password}
                                    onChangeText={value => setPassword(value)}
                                    secureTextEntry={true}
                                />
                            </KeyboardAvoidingView>
                        </Stack>

                        {activeTab === 'Log in' && <Text style={{ color: '#fa4a0c' }}>Forgot password ?</Text>}
                    </View>

                    {activeTab === 'Log in' && <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabStack')}>
                        <Text style={{ color: '#ffffff' }}>Log in</Text>
                    </TouchableOpacity>}

                    {activeTab === 'Sign up' && <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('TabStack')}>
                        <Text style={{ color: '#ffffff' }}>Sign up</Text>
                    </TouchableOpacity>}
                </View>
            </Container>
        </SafeAreaView>
    )
}
