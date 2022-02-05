import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    card: {
        borderRadius: 30,
        backgroundColor: '#ffffff',
        flex: 1,
        flexDirection: 'column',
        paddingHorizontal: 20,
        paddingBottom: 20,
        marginEnd: 20,
    },

    cardHorizontal: {
        flex: 1,
        flexDirection: 'row',
        borderRadius: 30,
        backgroundColor: '#ffffff',
        alignItems: 'center'
    },

    cardTitle: {
        fontSize: 20,
        marginBottom: 10,
        textAlign: 'center',
    },

    cardText: {
        color: '#fa4a0c',
        fontSize: 23,
        fontWeight: 'bold',
        textAlign: 'center',
    },

    cardImage: {
        width: 180,
        height: 200,
        resizeMode: 'stretch',
        top: 20,
        alignSelf: "center"
    },

    cardImageHorizontal: {
        width: 100,
        height: 100,
        resizeMode: 'stretch',
        top: 20
    },

    decrementButton: {
        backgroundColor: '#fa4a0c',
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    incrementButton: {
        backgroundColor: '#fa4a0c',
        paddingHorizontal: 9,
        paddingVertical: 7,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    },

    quantityText: {
        borderWidth: 1,
        paddingHorizontal: 10,
        paddingVertical: 6,
        backgroundColor: '#fa4a0c',
        borderColor: '#fa4a0c',
        color: 'white'
    }
})

export default styles