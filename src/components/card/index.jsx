import React from "react";
import "./Cardcomponent.css";
import { Link } from "react-router-dom";

function CardComponent({ posts, currentPage, pagePostsLimit }) {
  return (
    <>
      {posts
        .slice((currentPage - 1) * pagePostsLimit, currentPage * pagePostsLimit)
        .map((post) => (
          <div key={post.id} className="card">
            <img src={`https://robohash.org/${post.id}`} alt="robot.png" />
            <h3>ID:{post.id}</h3>
            <Link
              to={`view`}
              state={[post.id, post.name, post.email, post.body]}
            >
              <button>View</button>
            </Link>
          </div>
        ))}
    </>
  );
}

export default CardComponent;
