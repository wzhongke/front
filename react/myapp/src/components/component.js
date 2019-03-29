import React from 'react'

function Welcome (props) {
    return <h1>Hello, {props.name}</h1>;
}

class WelcomeClass extends React.Component {
    render () {
        return <h1>Hello, {this.props.name}</h1>;
    }
}

class Clock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {date: new Date()};
    }

    componentDidMount () {
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick () {
        this.setState({
            date: new Date()
        });
    }
  
    render() {
      return (
        <div>
          <h1>Hello, world!</h1>
          <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
  }

export {Welcome, WelcomeClass, Clock};