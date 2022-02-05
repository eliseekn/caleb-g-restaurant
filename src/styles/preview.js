import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
        paddingVertical: 15
    },

    image: {
        width: 300, 
        height: 320, 
        resizeMode: 'stretch', 
    },

    title: {
        fontSize: 28,
        marginBottom: 15,
        textAlign: 'center',
    },

    price: {
        color: '#fa4a0c',
        fontSize: 28,
        textAlign: 'center'
    },

    button: {
        alignItems: 'center',
        backgroundColor: '#fa4a0c',
        position: 'relative',
        padding: 20,
        borderRadius: 20,
        top: -50
    },

    infoTitle: {
        fontSize: 15,
        marginBottom: 5
    },

    infoText: {
        opacity: .5
    }
})

export default styles
