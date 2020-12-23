import React from "react";

export const PostBody = ({ title, content, modified_date, word_count, read_time, edit_link }) => (
  <div class="custom-pitch">
    <div class="container">
      <div class="custom-pitch-intro">
        <h1
          dangerouslySetInnerHTML={{ __html: title || "Content" }}
          className="wow fadeInDown"
          data-wow-delay="0.2s"
          style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
        />
        <div className={"pitch-timestamp"}>
          {modified_date} - {word_count} words ({read_time} min read)
        </div>
        <p
          dangerouslySetInnerHTML={{ __html: content || "Content" }}
          className="wow fadeInDown medium-body"
          data-wow-delay="0.2s"
          style={{ visibility: "visible", animationDelay: "0.2s", animationName: "fadeInDown" }}
        />
        <div className={"pitch-timestamp"}>
          <a target="_blank" href={edit_link}>
            Edit
          </a>
        </div>
      </div>
    </div>
  </div>
);
