import './App.css';
import {Provider as ReduxProvider} from 'react-redux';
import {createStore} from 'redux';
import itemsReducer from './Pages/ItemsReducer';
import HomeScreen from './Components/HomeScreen';

const store = createStore(itemsReducer);

function App() {
  return (
    <ReduxProvider store={store}>
      <div className="App">
        <HomeScreen/>
      </div>
    </ReduxProvider>
  );
}

export default App;
