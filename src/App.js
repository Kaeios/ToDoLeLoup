import logo from './logo.svg';
import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';



import { ReactElement } from 'react'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'







function TodoElement(props) {
  return  <div>
            <input type="checkbox" checked={ props.checked } />
            <label>{ props.children }</label>
          </div>;
}

class Card extends React.Component {

  render() {
    return  <div class="card">
              <ul class="list-group list-group-flush">
                <li class="list-group-item"><TodoElement checked={false}>Tâche 1</TodoElement></li>
                <li class="list-group-item"><TodoElement checked={false}>Tâche 2</TodoElement></li>
                <li class="list-group-item"><TodoElement checked={true}>Tâche 2</TodoElement></li>
                
              </ul>

              <i class="fa-thin fa-abacus"></i>
                <a class="btn btn-outline-primary">test</a>
              </div>
      
  }

}

function App() {
  return (
    <div>
      <Card />
    </div>
  );
}

export default App;
