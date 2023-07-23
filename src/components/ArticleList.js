import React from "react";
import Article from "./Article"; // Make sure to import the Article component

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} title={post.title} date={post.date} preview={post.preview} />
      ))}
    </main>
  );
}

export default ArticleList;

