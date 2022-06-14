import './App.css';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSliders} from '@fortawesome/free-solid-svg-icons'


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
                <li class="list-group-item"><TodoElement checked={true}>Tâche </TodoElement></li>
                
              </ul>

              <FontAwesomeIcon icon={ faSliders } />
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
