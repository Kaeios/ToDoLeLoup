import logo from './logo.svg';
import './App.css';
import React from 'react';

class TodoElement extends React.Component {

  render() {
    return <p>Tâche 1</p>;
  }

}

function App() {
  return (
    <div>
      <TodoElement />
    </div>
  );
}

export default App;
