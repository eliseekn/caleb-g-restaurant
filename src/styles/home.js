import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 30,
        paddingVertical: 15
    },

    title: {
        fontSize: 40,
    },

    tabs: {
        flexDirection: 'row'
    },

    tab: {
        paddingHorizontal: 10,
        marginHorizontal: 10,
        paddingVertical: 10,
    },

    tabTitle: {
        fontSize: 18,
        color: '#adadaf'
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
