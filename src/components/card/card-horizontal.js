import React, { useState } from "react"
import { TouchableOpacity, Image, Text, View } from "react-native"
import styles from "../../styles/card"

const CardHorizontal = ({ data, navigation }) => {
    const [quantity, setQuantity] = useState(1)

    const increment = () => {
        if (quantity < 5) setQuantity(quantity => quantity + 1)
    }

    const decrement = () => {
        if (quantity > 1) setQuantity(quantity => quantity - 1)
    }

    return (
        <View style={styles.cardHorizontal} onPress={() => navigation.navigate('Preview')}>
            <Image source={data.image} style={styles.cardImageHorizontal} />
            
            <View style={{ alignItems: 'flex-start' }}>
                <Text style={styles.cardTitle}>{data.title}</Text>

                <View style={{ flexDirection: "row", alignItems: "center" }}>
                    <Text style={styles.cardText}>{data.price}</Text>

                    <View style={{ flexDirection: "row", justifyContent: "center", alignItems: "center", marginLeft: 40 }}>
                        <TouchableOpacity style={styles.decrementButton} onPress={() => decrement()}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>-</Text>
                        </TouchableOpacity>

                        <Text style={styles.quantityText}>{quantity}</Text>
                    
                        <TouchableOpacity style={styles.incrementButton} onPress={() => increment()}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>+</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default CardHorizontal
