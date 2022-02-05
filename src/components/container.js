import React from "react"
import { View } from "react-native"

const Container = ({ children, style }) => {
    return (
        <View style={[{ flex: 1, flexDirection: 'column' }, style]}>
            {children}
        </View>
    )
}

export default Container
