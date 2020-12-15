import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { StyleSheet, Text, View } from 'react-native';
import RestaurantsContainer from './components/RestaurantsContainer';

export default function App() {
  const store = createStore(reducers)

  return (
    <Provider store={store}>
      <View style={styles.container}>
        <RestaurantsContainer />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 255, 255)',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
