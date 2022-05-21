import React from "react";

// Made with Bootstrap , But looks ugly

const Newsitem = (props) => {
  return (
    <div className="my-3">
      <div className="card text-bg-dark">
        <a href={props.newsurl} target="_blank" rel="noopener noreferrer">
          {" "}
          <img
            src={
              props.imgurl
                ? props.imgurl
                : "https://images-ext-1.discordapp.net/external/FkKqIohvc-LiYxj5Fy0D41XccReIWCcegOgALnCL3Es/https/openai.com/content/images/2022/04/dall-e-2-og.jpg?width=946&height=567"
            }
            className="card-img-top"
            alt="..."
          />
        </a>

        <div className="card-body">
          <span className="badge text-bg-light my-2">{props.newsC}</span>
          <br />
          <span className="badge text-bg-warning my-1">{props.author}</span>
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.description}</p>
          {/* /newsdetail/ */}
          <span className="badge text-bg-success my-2">{props.time}</span>
          <br />
          <a
            href={props.newsurl}
            target="_blank"
            rel="noreferrer"
            className="btn btn-sm btn-secondary"
          >
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default Newsitem;
