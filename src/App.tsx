import React from 'react';
import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';

import Projects from './Components/Projects/Projects.tsx';

function App() {
  return (
    <Router>
      <Routes>
          <Route path="/" element={<Projects/>} />
      </Routes>
    </Router>
  )
}

export default App
