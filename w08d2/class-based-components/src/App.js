import React from 'react';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import './App.css';

class ClassComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      greeting: 'Hello from class component!',
      counter: props.counter || 0,
    };

    this.incrementCounter = this.incrementCounter.bind(this);
  }

  incrementCounter() {
    // this is bad, never mutate the state directly
    // this.state.counter = this.state.counter + 1;

    // this is good, call a function to change internal values
    this.setState({ counter: this.state.counter + 1 });
  }

  componentDidMount() {
    console.log('componentDidMount');

    this.interval = setInterval(() => {
      console.log('interval running!');
      this.incrementCounter();
    }, 1000);
  }

  componentDidUpdate() {
    console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    console.log('componentWillUnmount');
    clearInterval(this.interval);
  }

  render() {
    return (
      <div>
        <h1>{this.state.greeting}</h1>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={this.incrementCounter}>Add to counter</button>
        {this.props.children}
      </div>
    );
  }
}

function App() {
  return (
    <Router>
      <Link to='/'>Hello app!</Link>
      <Link to='/counter'>Counter</Link>
      <Routes>
        <Route path='/' element={<h1>Hello from App!</h1>}></Route>
        <Route
          path='/counter'
          element={<ClassComponent counter={100} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
