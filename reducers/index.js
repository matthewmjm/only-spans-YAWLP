import {combineReducers} from 'redux';

const restaurants = (state=[], action) => {
    switch(action.type){
        case 'SET_RESTAURANTS':
            // return action.payload 
            return action.restaurants 
        default: 
            return state
    }
}

// export default () => {}
export default combineReducers({
    // restaurants: restaurants
    restaurants,
})




// PAYLOAD: can be ANY information that you need to send to a reducer through the action
// ACTION: is an object; one is type (tells reducer how to change state) & payload 