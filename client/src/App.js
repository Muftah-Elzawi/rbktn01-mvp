import React from 'react';
import AppNavbar from './components/appNavbar'
import ShoppingList from './components/shoppingList'
import ItemModal from './components/ItemModel'
import {Provider} from 'react-redux'
import {Container} from 'reactstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import store from './store'


class App extends React.Component{
  render() {
    return (
      <Provider store = {store}>
      <div className="App">
      <AppNavbar></AppNavbar>
      <Container>
      <ItemModal></ItemModal>
      <ShoppingList></ShoppingList>
      </Container>
      
    </div>
    </Provider>
    );
  }
}



export default App;
