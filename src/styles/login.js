import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#f2f2f2'
    },

    header: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomEndRadius: 40,
        borderBottomStartRadius: 40,
    },

    logo: { 
        width: 150, 
        height: 150,
        marginTop: 100,
        resizeMode: 'stretch',
    },

    footer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 45,
        paddingBottom: 30,
        marginTop: 30,
    },
    
    button: {
        alignItems: 'center',
        backgroundColor: '#fa4a0c',
        position: 'relative',
        padding: 20,
        borderRadius: 20,
    },

    label: {
        fontSize: 15,
        opacity: .4,
        marginBottom: 5
    },

    inputText: {
        paddingVertical: 3,
        borderBottomWidth: 1,
        fontSize: 20,
    },

    tabs: {
        flexDirection: 'row'
    },

    tab: {
        paddingHorizontal: 30,
        marginHorizontal: 30,
        paddingVertical: 10
    },

    tabTitle: {
        fontSize: 20,
        color: '#000000'
    },

    activeTab: {
        borderBottomColor: '#fa4a0c',
        borderBottomWidth: 3
    },

    activeTabTitle: {
        color: '#fa4a0c',
    }
})

export default styles