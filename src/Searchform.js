import React from "react";

export default function Searchform() {
  return (
    <div className="Searchform">
      <form className="form-inline" id="search-form">
        <input
          type="text"
          className="text search-box"
          id="city-input"
          placeholder=" I'm going to..."
          autoComplete="on"
        />
        <input type="submit" value="Go!" className="go-button" />
        <input
          type="button"
          value="📍"
          className="locate-me-button"
          id="locate-me-button"
        />
      </form>
    </div>
  );
}
