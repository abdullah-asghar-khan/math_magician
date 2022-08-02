import React from 'react';
import Calculator from './components/calculator';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: '',
    };
  }

  render() {
    const { first } = this.state;
    return (
      <div className="App">
        <Calculator name={first} />
      </div>
    );
  }
}

export default App;
