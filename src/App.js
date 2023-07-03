import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Main from './Pages/Main'
import Delete from './Pages/Main'

function App() {
  return (
    <div>
      <BrowserRouter>
        <div className='To_do_list'>
          <Sidebar/>
            <Routes>
              <Route path="/" element={<Main/>}/>
              <Route path="/delete" element={<Delete/>}/>
            </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
