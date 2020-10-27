import React, { Component } from "react";

import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";

class App extends Component {
  render() {
    const gifs = [{ id: "1Pyi8KuRGJ3AA" }, { id: "13FrpeVH09Zrb2" }];
    return (
      <div>
        <div className="left-scene">
          <SearchBar />
          <div className="selected-gif">
            <Gif id="1Pyi8KuRGJ3AA" />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={gifs} />
        </div>
      </div>
    );
  }
}

export default App;
