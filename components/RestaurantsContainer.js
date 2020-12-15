import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, ImageBackgroundComponent, Button } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import RestaurantCard from './RestaurantCard';


const apiKey = 

const termValue = "restaurants"
const locationValue = "denver"
const apiUrl = `https://api.yelp.com/v3/businesses/search?term=${termValue}&location=${locationValue}`


export default function RestaurantsContainer() {
    // const dispatch = store.dispatch
    const dispatch = useDispatch()
    const restaurants = useSelector(state => state.restaurants)
    const [searchTerm, setSearchTerm] = useState('')

    useEffect(() => {
    fetch(apiUrl, {
        headers: {
        "Authorization": `Bearer ${apiKey}`
        }
    })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
    }, [])

    const showRestaurants = () => restaurants.map((restaurant, i) => {
        return <RestaurantCard 
            key={restaurant.id} 
            restaurant={restaurant} 
            index={i + 1}
        />
    })

    const handleSearchText = (text) => {
        setSearchTerm(text)
    }
    const handleSearch = (text) => {
        const updatedURL = `https://api.yelp.com/v3/businesses/search?term=${termValue}&location=${searchTerm}`

        fetch(updatedURL, {
            headers: {
                "Authorization": `Bearer ${apiKey}`
            }
        })
        .then(response => response.json())
        .then(({businesses}) => dispatch({type: "SET_RESTAURANTS", restaurants: businesses}))
    }

    return (
        <>
            <TextInput style={styles.textInputBox} onChangeText={handleSearchText} value={searchTerm} />
            <Button 
                onPress={handleSearch}
                title='Search'

            />
            <ScrollView style={styles.container}>
                {showRestaurants()}
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 15,
    },
    textInputBox: {
        // flex: 1,
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        backgroundColor: '#dedddc'
    }
});
