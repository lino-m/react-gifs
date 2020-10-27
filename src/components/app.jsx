import React, { Component } from "react";

import SearchBar from "./search_bar.jsx";
import Gif from "./gif.jsx";
import GifList from "./gif_list.jsx";
import giphyApi from "giphy-api";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: "1Pyi8KuRGJ3AA",
    };

    this.search("coding css");
  }

  search = (query) => {
    giphyApi("3Fgt0IweBijEW1n5MZIYLOUP3GRGTf9i").search(
      {
        q: query,
        rating: "g",
        limit: 10,
      },
      (error, result) => {
        this.setState({
          gifs: result.data,
        });
      }
    );
  };

  render() {
    const gifs = [{ id: "1Pyi8KuRGJ3AA" }, { id: "13FrpeVH09Zrb2" }];
    return (
      <div>
        <div className="left-scene">
          <SearchBar search={this.search} />
          <div className="selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} />
        </div>
      </div>
    );
  }
}

export default App;
