import logo from './logo.svg';
import './App.css';
import React from 'react';

class TodoElement extends React.Component {

  render() {
    return <p>Tâche 1</p>;
  }

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
      <Card>
      <TodoElement />
      </Card>
    </div>
  );
}

export default App;
