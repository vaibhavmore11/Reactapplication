import React from "react";
import Posts from "../post/Posts";

const Home = () => (
  <div>
    <div className="jumbotron">
      <h2>Blog Engine</h2>
      <p className="lead">Welcome to Blog Engine</p>
    </div>
    <div className="container">
      <Posts />
    </div>
  </div>
);

export default Home;
