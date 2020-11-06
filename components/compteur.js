import React, { Component } from 'react'
import logo from '../public/favicon.ico'

class Compteur extends Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      count: "?"
    };
  }

  refreshData() {
    fetch("api/compteur")
      .then(res => res.json())
      .then(
        (result) => {
          console.log("loaded");
          this.setState({
            count: result.body
          });
        },
        (error) => {
          this.setState({
            count: "?",
            error
          });
        }
      )
  }

  componentDidMount() {
    this.refreshData();
  }

  render() {
    const { error, count } = this.state;
    if (error) {
      return <div>Error: {error.message}</div>;
    } else {
      return (
        <div>
          VISITORS: {count}
        </div>
      );
    }
  }
}

export default Compteur