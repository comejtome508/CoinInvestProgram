import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';

import Dashboard from '../pages/dashboard';


const App = () => {
  return (
    <Routes>
        <Route path="/" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
