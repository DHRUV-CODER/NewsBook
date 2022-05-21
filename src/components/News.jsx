import React, { useEffect, useState } from "react";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import NewsCard from "./NewsCard";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalArticles, setTotalArticles] = useState(0);

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  const UpdateNews = async () => {
    props.setProgress(10);
    const url = `https://newsapi.org/v2/top-headlines?country=${props.Country}&apiKey=${props.ApiKey}&page=${page}&pageSize=${props.PageSize}&category=${props.Category}`;
    setLoading(true);
    let data = await (await fetch(url)).json();
    props.setProgress(40);

    setArticles(data.articles);
    setTotalArticles(data.totalResults);
    setLoading(false);
    props.setProgress(100);
  };

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.Category)} - NewsBook`;
    UpdateNews();
  }, []);

  const handleArticleLen = (arg, len) => {
    if (arg.length >= len) {
      return arg.slice(0, len) + "...";
    } else if (arg.length === 0) {
      return "Click On Read More";
    } else {
      return arg;
    }
  };

  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.Country
    }&apiKey=${props.ApiKey}&page=${page + 1}&pageSize=${
      props.PageSize
    }&category=${props.Category}`;
    setPage(page + 1);
    let data = await (await fetch(url)).json();
    setArticles(articles.concat(data.articles));
    setTotalArticles(data.totalResults);
  };

  return (
    <>
      {" "}
      <div className="container my-3">
        {" "}
        <small style={{ color: "white" }}>
          Total News : <strong>{totalArticles}</strong> from Country{" "}
          <strong>
            {props.Country} <br />
          </strong>
          {articles.length} News , Page {page}
        </small>
      </div>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalArticles}
        loader={<Spinner />}
      >
        {loading && <Spinner />}
        <div className="container">
          <div className="row">
            {articles.map((Articles, index) => {
              return (
                <div className="col-md-4" key={index}>
                  <NewsCard
                    News_Title={handleArticleLen(Articles["title"], 59)}
                    News_Image_Url={Articles["urlToImage"]}
                    News_Company={Articles["source"]["name"]}
                    News_Author={
                      Articles["author"] ? Articles["author"] : "Author"
                    }
                    News_Time={Articles["publishedAt"].slice(0, 10)}
                    News_Content={
                      Articles["content"]
                        ? handleArticleLen(Articles["content"], 199)
                        : null
                    }
                    News_Url={Articles["url"]}
                  />{" "}
                </div>
              );
            })}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.deafultProps = {
  Country: "us",
  PageSize: 10,
  Category: "general",
};

News.propTypes = {
  Country: PropTypes.string,
  PageSize: PropTypes.number,
  Category: PropTypes.string,
};

export default News;
