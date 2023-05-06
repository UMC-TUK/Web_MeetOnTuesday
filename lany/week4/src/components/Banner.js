import React, { useState, useRef, useEffect } from "react";

export default function Banner({ isMarket }) {
  const marketBanner = [
    "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b02b95ef-c984-493d-946f-3ccfdf182094.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/b7607924-0e4d-4d0b-a14d-0bb4e65e2a4c.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/26982c88-8f42-4702-997a-24f489f8bf38.jpg",
  ];

  const beautyBanner = [
    "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/8c9af4e2-03ca-45ec-9a2a-926b969018ea.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/ce754b50-f8f5-4e50-a9be-cdcdf844d94d.jpg",
    "https://product-image.kurly.com/cdn-cgi/image/quality=85/banner/main/pc/img/0ab1d119-e257-40c0-82ac-03304f7ca850.jpg",
  ];

  const banner = isMarket ? marketBanner : beautyBanner;

  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      {/* 배너  */}
      <div className="banner">
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K"
          alt="none"
          className="arrowL"
        />
        <img src={banner[2]} alt="none" style={{ marginTop: "10px" }} />
        <img
          src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNTIiIGhlaWdodD0iNTIiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CiAgICA8ZyB0cmFuc2Zvcm09InRyYW5zbGF0ZSgxIDEpIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxjaXJjbGUgZmlsbC1vcGFjaXR5PSIuMiIgZmlsbD0iIzAwMCIgY3g9IjI1IiBjeT0iMjUiIHI9IjI1Ii8+CiAgICAgICAgPHBhdGggZD0iTTIyLjI4NSAzMy42OTlhMSAxIDAgMCAwIDEuMzE5LjA5OGwuMDk1LS4wODIgOC03LjgxN2ExIDEgMCAwIDAgLjEwOC0xLjMwNmwtLjA4LS4wOTYtNy43MjMtOC4xODJhMSAxIDAgMCAwLTEuNTM1IDEuMjc2bC4wOC4wOTYgNy4wNDkgNy40NjktNy4yOTcgNy4xM2ExIDEgMCAwIDAtLjA5OCAxLjMxOWwuMDgyLjA5NXoiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyIvPgogICAgPC9nPgo8L3N2Zz4K"
          alt="none"
          className="arrowR"
        />
      </div>
    </div>
  );
}
