import logo from './logo.svg';
import './App.css';
import React from 'react';

function TodoElement(props) {
  return  <div>
            <input type="checkbox" checked={ props.checked } />
            <label>{ props.children }</label>
          </div>;
}

class Card extends React.Component {

  render() {
    return <div class="card">
            <button>test</button>
          </div>;
      
  }

}

function App() {
  return (
    <div>
      <TodoElement checked={false}>Tâche 1</TodoElement>
      <TodoElement checked={false}>Tâche 2</TodoElement>
      <TodoElement checked={true}>Tâche 3</TodoElement>
    </div>
  );
}

export default App;
