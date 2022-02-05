import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 30,
        justifyContent: 'space-between',
        backgroundColor: '#ff4b3a'
    },

    logo: {
        padding: 8,
        backgroundColor: '#ffffff',
        width: 55,
        borderRadius: 100,
    },

    title: {
        color: '#ffffff',
        fontSize: 45,
        fontWeight: 'bold'
    },

    images: { 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 30
    },

    button: {
        backgroundColor: '#ffffff',
        padding: 20,
        borderRadius: 20,
    }
})

export default styles