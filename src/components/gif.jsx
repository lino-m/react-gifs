import React, { Component } from "react";

class Gif extends Component {
  render() {
    const src = "https://media4.giphy.com/media/1Pyi8KuRGJ3AA/giphy.gif";
    return <img src={src} alt="" className="gif" />;
  }
}

export default Gif;
