import React, { useState, useEffect } from "react";
import Gallery from "./components/Gallery";
import "./App.css";
import axios from "axios";
const App = () => {
  const [search, setname] = useState("");
  const [data, setdata] = useState([]);

  const apiKey = "636e1481b4f3c446d26b8eb6ebfe7127";
  const nameHandler = (e) => {
    setname(e.target.value);
  };

  const submitForm = (e) => {
    e.preventDefault();

    axios
      .get(
        `https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=${apiKey}&tags=${search}&per_page=24&format=json&nojsoncallback=1`
      )
      .then((response) => {
        setdata(response.data.photos.photo);
      });
  };
  return (
    <div>
      <center>
        <h2 className="heading">Wallpapers Adda</h2>
        <form onSubmit={submitForm}>
          <input onChange={nameHandler} type="text" name="search" /> <br />
          <button className="btn btn-primary" type="submit">
            search
          </button>
        </form>
        <br />
        {data.length > 1 ? <Gallery data={data} /> : <h2>no items at</h2>}
      </center>
    </div>
  );
};

export default App;
