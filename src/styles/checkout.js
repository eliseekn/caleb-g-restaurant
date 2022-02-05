import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        borderTopStartRadius: 50,
        borderTopEndRadius: 50,
        paddingHorizontal: 30
    },
    
    button: {
        alignItems: 'center',
        backgroundColor: '#fa4a0c',
        position: 'relative',
        padding: 20,
        borderRadius: 20,
        top: -50
    },

    card: {
        borderRadius: 30,
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'column',
        padding: 10,
    },

    map: {
        ...StyleSheet.absoluteFillObject,
    }
})

export default styles