import React, {Component} from 'react';
import GameComponent from './components/GameComponent'
import './App.css';
import './bootstrap.css';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div className="expand">
            <GameComponent/>
          </div>
        <div className="credits">Ⓒ כל הזכויות שמורות להגר גוטשטדט, שחר גוטשטדט, עדי אבלס ואורית גודקאר</div>
      </div>
    );
  }
}

export default App;
