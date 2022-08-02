import React from 'react';
import calculate from './logic/calculate';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        total: '',
        next: '',
        operation: '',
    };
    his.handleClick = this.handleClick.bind(this);
  }

  handleClick = (e) => {
    const buttonName = e.target.name;
    this.setState((prevState) => ({
      ...calculate(prevState, buttonName),
    }));
  }

  render() {
    const { total, next, operation } = this.state;
    return (
      <div className="calculator-container">
        <div className="cal-screen">
        <span>{ next || operation || total || ''}</span>
        </div>
        <form className="calculator-digits" name="calculator">
          
        </form>
      </div>
    );
  }
}
