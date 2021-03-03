import React from "react";
//import NewsDetails from "./NewsDetails";
function NewsArticle({ data }) {
  return (
    <div className="news">
      <a className="news__title" href={data.url} target="blank">{data.title}</a>
      <p className="news__desc">{data.description}</p>
      <img class="news_img" src={data.urlToImage} alt="news-image"></img>


      <br></br>
      <span className="news__author">{data.author}</span> <br />
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <br></br>
     
    </div>
  );
}

export default NewsArticle;
