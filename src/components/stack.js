import React from 'react'
import { View } from 'react-native'

const Stack = ({
    pt = 0, 
    pb = 0, 
    ps = 0, 
    pe = 0,
    mt = 0, 
    mb = 0, 
    ms = 0, 
    me = 0,
    style,
    children
}) => {
    return (
        <View style={[
            {
                paddingBottom: pb, 
                paddingTop: pt, 
                paddingStart: ps, 
                paddingEnd: pe,
                marginBottom: mb, 
                marginTop: mt, 
                marginStart: ms, 
                marginEnd: me,
            },
            {style}
        ]}>
            {children}
        </View>
    )
}

export default Stack
