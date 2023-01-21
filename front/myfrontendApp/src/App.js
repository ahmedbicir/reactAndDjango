import React from 'react'
import AddMovie from './AddMovie';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AddStudent from './components/AddStudent';
import List from './components/List';
import Header from './components/Header';


function App() {
  return (
    <div>
        {/* <AddStudent/>
        <StudentList/> */}
        <AddMovie/>

        <Router>
          {/* <Header/> */}
          <Routes>

        {/* <Route exact path="/AddStudent" element={<AddStudent />} /> */}
        {/* <Route exact path="/" element={<AddStudent />} /> */}

        
          {/* <Route exact path="/List" element={<List />} /> */}
          </Routes>

      
        </Router>

    </div>
  )
}

export default App