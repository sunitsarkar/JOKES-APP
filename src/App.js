
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jokes from './component/jokes';
import Bookmark from './component/bookmark';

function App() {
    return (<div className="App">
      
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Jokes/>}/>
        <Route path='/bookmark' element={<Bookmark/>}/>
       </Routes>
       </BrowserRouter>
       
    </div>
    );

}

export default App;
