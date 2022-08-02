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
    this.handleClick = this.handleClick.bind(this);
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
          <input type="button" name="AC" value="AC" onClick={this.handleClick} />
          <input type="button" name="+/-" value="+/-" onClick={this.handleClick} />
          <input type="button" name="%" value="%" onClick={this.handleClick} />
          <input
            type="button"
            name="÷"
            value="÷"
            className="peach-color divide"
            onClick={this.handleClick}
          />
          <input type="button" name="7" value="7" onClick={this.handleClick} />
          <input type="button" name="8" value="8" onClick={this.handleClick} />
          <input type="button" name="9" value="9" onClick={this.handleClick} />
          <input
            type="button"
            name="x"
            value={'\u00D7'}
            className="peach-color"
            onClick={this.handleClick}
          />
          <input type="button" name="4" value="4" onClick={this.handleClick} />
          <input type="button" name="5" value="5" onClick={this.handleClick} />
          <input type="button" name="6" value="6" onClick={this.handleClick} />
          <input
            type="button"
            name="-"
            value={'\u2212'}
            className="peach-color"
            onClick={this.handleClick}
          />
          <input type="button" name="3" value="3" onClick={this.handleClick} />
          <input type="button" name="2" value="2" onClick={this.handleClick} />
          <input type="button" name="1" value="1" onClick={this.handleClick} />
          <input
            type="button"
            name="+"
            value={'\u1429'}
            className="peach-color"
            onClick={this.handleClick}
          />
          <input
            type="button"
            name="0"
            value="0"
            className="zero"
            onClick={this.handleClick}
          />
          <input type="button" name="." value="." onClick={this.handleClick} />
          <input
            type="button"
            name="="
            value={'\u003D'}
            className="peach-color"
            onClick={this.handleClick}
          />
        </form>
      </div>
    );
  }
}
