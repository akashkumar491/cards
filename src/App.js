import logo from './logo.svg';
import './App.css';
import Card from './components/Card';
import {BrowserRouter,Route,Link,Routes} from 'react-router-dom'

function App() {
  return (
    <>
    {/* <BrowserRouter>
      <Link to="/card">CARD LIST</Link>
      <Routes>
      <Route exact path="/card" element={<Card />} />
      </Routes>
    </BrowserRouter> */}

    {/* --------------------------------------- */}

    <Card />
    </>
  );
}

export default App;
