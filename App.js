import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers/index';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import RestaurantsContainer from './components/RestaurantsContainer';

export default function App() {
  const store = createStore(reducers)

  return (
    <Provider store={store}>
      <SafeAreaView style={styles.container}>
        <RestaurantsContainer />
      </SafeAreaView>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: '#ffffff',
  },
});
