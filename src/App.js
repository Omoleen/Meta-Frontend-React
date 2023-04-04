import logo from './logo.svg';
import './App.css';
import {Header} from "./components/Header";
import {Nav} from "./components/Nav";
import {Promo} from "./components/Promo";
import {Card} from './components/Card'
import {Clickme} from "./components/Clickme";
import {Child} from "./components/Child";
import {useState} from "react";
import {InputComponent} from "./components/InputComponent";


function App() {
  return (
      <div>
          <Clickme />
      </div>
  );
}

export default App;
