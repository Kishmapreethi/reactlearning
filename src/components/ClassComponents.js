import React, { Component } from "react";

export default class ClassComponents extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      loading: true,
      error: null,
    };
  }

  componentDidMount() {
    console.log("component mounted");
    this.fetchData();
  }

  fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts/1")
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          this.setState({ data: data, loading: false });
        } else {
          throw new Error("No data found");
        }
      })
      .catch((error) => {
        this.setState({ error: error.message, loading: false });
      });
  }

  // Lifecycle method: called before the component is removed from the DOM
  componentWillUnmount() {
    console.log("Component will unmount");
  }

  render() {
    const { data, loading, error } = this.state;
    console.log(data);

    if (loading) {
      return <p>Loading...</p>;
    }

    if (error) {
      return <p>Error: {error}</p>;
    }
    return (
      <div>
        <h2>{data.title}</h2>
        <p>{data.body}</p>
      </div>
    );
  }
}
