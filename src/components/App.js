import React from "react";
import Header from "./Header"; // Make sure to import the Header component
import About from "./About"; // Make sure to import the About component
import ArticleList from "./ArticleList"; // Make sure to import the ArticleList component
import blogData from "../data/blog";

function App() {
  return (
    <div className="App">
      <Header name="Your Blog Name" />
      <About />
      <ArticleList posts={blogData} />
    </div>
  );
}

export default App;
