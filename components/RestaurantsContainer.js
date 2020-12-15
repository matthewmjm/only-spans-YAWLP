import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';


const apiKey = 
const termValue = "restaurants"
const locationValue = "denver"
const apiUrl = `https://api.yelp.com/v3/businesses/search?term=${termValue}&location=${locationValue}`


export default function RestaurantsContainer() {
    // const dispatch = store.dispatch
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants)

    useEffect(() => {
    fetch(apiUrl, {
        headers: {
        "Authorization": `Bearer ${apiKey}`
        }
    })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
    }, [])

    const showRestaurants = () => restaurants.map(restaurant => {
        return <Text>{restaurant.name}</Text>
    })

    return (
        <View style={styles.container}>
            {showRestaurants()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    }
});
