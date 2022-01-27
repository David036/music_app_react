import { useState } from 'react';
import { Route, Routes } from 'react-router';
import './App.css';
import Content from './Components/Content/Content';
import InputField from './Components/InputField';
function App() {
  const [name, setName] = useState('');
  return (
    <div className="App">     
      <Routes >
        <Route path='/' element={<InputField setName={setName} />}/>
        <Route path='/home' element={<Content name = {name} />}/>
      </Routes>
    </div>
  );
}

export default App;
