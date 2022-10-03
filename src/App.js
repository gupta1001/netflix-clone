import React from 'react';
import './App.css';
import HomeScreen from './HomeScreen';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Router
} from "react-router-dom";


function App() {
  return (
    <div className="app">
      <Router>
          <Route path="/">
            <HomeScreen />
          </Route>
      </Router>
    </div>
  );
}

export default App;
