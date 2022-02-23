import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import TodoScreen from './src/screens/TodoScreen';
// import { Provider } from "./src/context/TodoContext";
//The <Provider> component from the react-redux library gives the components of an application access to the Redux store
import { Provider } from 'react-redux';
import { store } from './src/redux/store';


export default function App() {
  return (
    <Provider store={store}>
      <TodoScreen />
    </Provider>
  )
}

const styles = StyleSheet.create({});
