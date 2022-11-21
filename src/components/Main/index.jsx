import React, { useState, useEffect } from "react";
import "./Maincomponent.css";
import { Pagination } from "react-pagination-bar";
import "react-pagination-bar/dist/index.css";
import CardComponent from "../card";

function MainComponent() {
  const [posts, setPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pagePostsLimit = 8;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((response) => response.json())
      .then((data) => setPosts(data))
      .catch((err) => console.log(err));
  });

  return (
    <div>
      <div className="Robot-container">
        <CardComponent
          posts={posts}
          currentPage={currentPage}
          pagePostsLimit={pagePostsLimit}
        />
      </div>
      <div className="pagination-container">
        <Pagination
          currentPage={currentPage}
          itemsPerPage={pagePostsLimit}
          onPageChange={(pageNumber) => setCurrentPage(pageNumber)}
          totalItems={posts.length}
          pageNeighbours={2}
          withProgressBar={true}
          startLabel={"<<"}
          endLabel={">>"}
          nextLabel={"Next"}
          prevLabel={"Previous"}
        />
      </div>
    </div>
  );
}

export default MainComponent;
