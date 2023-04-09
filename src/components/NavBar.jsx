import React from "react";

const NavBar = ({ isFavorite, handleShowFavorites, handleBackToSearch }) => {
  return (
    <nav className="nav-list">
      {!isFavorite ? (
        <div className="favorites">
          <button className="button" onClick={handleShowFavorites}>
            My Favorites ⭐
          </button>
        </div>
      ) : (
        <div className="favorites">
          <button className="button" onClick={handleBackToSearch}>
            Back to Search 🔍
          </button>
        </div>
      )}
    </nav>
  );
};

export default NavBar;