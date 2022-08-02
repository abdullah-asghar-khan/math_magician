import React from 'react';

export default class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      first: true,
    };
  }

  render() {
    const { first } = this.state;
    return (
      <div className="calculator-container">
        <div className="cal-screen">
          <span>0</span>
        </div>
        <form className="calculator-digits" name="calculator">
          {first}
          <input type="button" value="AC" />
          <input type="button" value="+/-" />
          <input type="button" value="%" />
          <input type="button" value={'\u00f7'} className="peach-color divide" />
          <input type="button" value="7" />
          <input type="button" value="8" />
          <input type="button" value="9" />
          <input type="button" value={'\u00D7'} className="peach-color" />
          <input type="button" value="4" />
          <input type="button" value="5" />
          <input type="button" value="6" />
          <input type="button" value={'\u2212'} className="peach-color" />
          <input type="button" value="3" />
          <input type="button" value="2" />
          <input type="button" value="1" />
          <input type="button" value={'\u1429'} className="peach-color" />
          <input type="button" value="0" className="zero" />
          <input type="button" value="." />
          <input type="button" value={'\u003D'} className="peach-color" />
        </form>
      </div>
    );
  }
}