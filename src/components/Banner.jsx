import React, { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import "../styles/Banner.css";

const Banner = ({ url }) => {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    apiClient
      .get(url)
      .then((res) => {
        let data = res.data.results[Math.floor(Math.random() * 20 - 1)];
        setBanner(data);
      })
      .catch((error) => <h1>{error}</h1>);
  }, []);

  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  };

  return (
    <header>
      <div
        className="banner"
        style={{
          backgroundImage: `url("https://image.tmdb.org/t/p/original${banner?.backdrop_path}")`,
        }}
      >
        <div className="banner-contents">
          <h1 className="title-banner">
            {banner?.title || banner?.name || banner?.original_name}
          </h1>
          <div className="btn">
            <button>Play</button>
            <button>My List</button>
          </div>
          <p className="desc">{truncate(banner.overview, 250)}</p>
        </div>
      <div className="fade-bg"></div>
      </div>
      <div className="fade-bottom"></div>
    </header>
  );
};

export default Banner;
