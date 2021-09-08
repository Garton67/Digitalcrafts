//import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import DisplayBooks from './DisplayBooks';


class App extends Component {
  

    constructor() {
      super()

      this.state = {
        books: []
      }
    }

    componentDidMount() {
      fetch('https://raw.githubusercontent.com/benoitvallon/100-best-books/master/books.json')
        .then(response => response.json())
        .then(results => {
          this.setState({
            books: results
          })
        })
    }

render() {
    return (
      <div className="App">
        
          <DisplayBooks books={this.state.books} />

      </div>
    );
  }
}

export default App;