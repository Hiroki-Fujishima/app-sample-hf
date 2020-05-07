import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import MyPaper from './MyPaper';
import MyPanel from './MyPanel';
import MyGrid from './MyGrid';
import MyButton from './MyButton';
import MyCard from './MyCard';

function App() {
  return (
    <div>
      <Header/>
      <MyCard/>
      <MyPanel/>
      <MyButton/>
      <MyGrid/>
      

    </div>
  );
}

export default App;
