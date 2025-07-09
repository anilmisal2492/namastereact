import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  render() {
    return (
      <div className="user-class">
        <h1> This is User Class Component</h1>
        <h2>My Name is {this.props.name}</h2>
        <h2>count :{this.state.count}</h2>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          {" "}
          increase
        </button>
      </div>
    );
  }
}
export default UserClass;
