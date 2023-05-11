import FormDetail from './components/Form';
import './App.css';
import Header from "./components/Header"
import ShowItem from './components/ShowItem';
import CartItem from './components/CartItem';
import ContextProvider from './components/Store/ContextProvider';
import { Route, Routes } from 'react-router-dom';
function App(props) {
  return (<ContextProvider>
    <div className="App">
      <Header />
      <Routes>
      <Route exact path="/home" element={<div>
          <FormDetail />
          <hr />
          <ShowItem />
        </div>} />
        <Route  path="*" element={<div>
          <FormDetail />
          <hr />
          <ShowItem />
        </div>} />
        <Route exact path="/CartItem" element={<CartItem />} />
      </Routes>

    </div>
  </ContextProvider>
  );
}

export default App;
