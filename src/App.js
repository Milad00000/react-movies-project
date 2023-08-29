import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './Component/Header/Header';
import Add from './Component/Add/Add';
import Watched from './Component/Watched/Watched';
import WatchList from './Component/WatchList/WatchList';
import Provieder from './Component/Reducer/Context';

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Provieder>
          <Header />
          <Routes>
            <Route path='/' element={<WatchList />} />
            <Route path='/watched' element={<Watched />} />
            <Route path='/add' element={<Add />} />
          </Routes>
        </Provieder>
      </BrowserRouter>
    </div>
  );
}

export default App;
