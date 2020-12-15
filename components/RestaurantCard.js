import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function RestaurantCard({restaurant, index}) {
    return (
        <View style={styles.container}>
            <Image style={styles.cardImage} source={{uri: restaurant.image_url}} />
            <View style={styles.infoContainer}>
                <View style={styles.rowView}>
                    <Text style={styles.name}>{index}. {restaurant.name}</Text>
                    <Text style={styles.price}>{restaurant.price}</Text>
                </View>
                <Text style={styles.rating}>Rating: {restaurant.rating}</Text>
                <Text style={styles.address}>{restaurant.location.address1}</Text>
                <View style={[styles.rowView, {justifyContent: "flex-start"}]}>
                    {restaurant.categories.map(category => (
                        <Text>{category.title},</Text>
                    ))}
                </View>
                <TouchableOpacity style={styles.visitWebsiteButton} >
                    <Text style={styles.buttonText}>Visit Website</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        borderTopWidth: 1,
        borderTopColor: '#hsl(0, 0%, 80%)',
        paddingVertical: 30,
    },
    name: {
        fontSize: 18,
        fontWeight: '600'
    },
    cardImage: {
        width: '100%',
        height: 150
    },
    infoContainer: {
        marginVertical: 15,
    },
    rowView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    price: {
        color: 'green'
    },
    rating: {
        marginVertical: 5
    },
    address: {
        color: 'hsl(0, 0%, 50%)'
    },
    visitWebsiteButton: {
        backgroundColor: '#009fff',
        padding: 10,
        textAlign: 'center',
        marginTop: 10,
        borderRadius: 8
    },
    buttonText: {
        textAlign: 'center',
        color: 'white',
        fontSize: 16,
        fontWeight: '700'
    }

});