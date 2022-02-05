import React from "react"
import { TouchableOpacity, Image, Text } from "react-native"
import styles from "../../styles/card"

const CardVertical = ({ data, navigation }) => {
    return (
        <TouchableOpacity style={styles.card} onPress={() => navigation.navigate('Preview')}>
            <Image source={data.image} style={styles.cardImage} />
            <Text style={styles.cardTitle}>{data.title}</Text>
            <Text style={styles.cardText}>{data.price}</Text>
        </TouchableOpacity>
    )
}

export default CardVertical
