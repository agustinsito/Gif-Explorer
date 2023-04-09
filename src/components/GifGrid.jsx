import React, { useState } from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import NavBar from "./navBar";


export const GifGrid = ({ category }) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [favorites, setFavorites] = useState([]);
  const { images, isLoading } = useFetchGifs(category);

  const handleAddFavorite = (id, title, url) => {
    // Verificar si la imagen ya está en favoritos
    const isAlreadyFavorite = favorites.some((favorite) => favorite.id === id);
    if (isAlreadyFavorite) {
      // Mostrar alerta de toastify
      toast.error("This image is already in your favorites!", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
      });
      return;
    }
    // Agregar la imagen a favoritos
    const newFavorite = { id, title, url };
    setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
    toast.success("Added to your favorites!", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  const handleShowFavorites = () => {
    setIsFavorite(true);
  };

  const handleBackToSearch = () => {
    setIsFavorite(false);
  };

  return (
    <>
      <NavBar
        isFavorite={isFavorite}
        handleShowFavorites={handleShowFavorites}
        handleBackToSearch={handleBackToSearch}
      />
      <div className="card-grid">
        {!isLoading && images.length === 0 && !isFavorite && (
          <h2>No results found</h2>
        )}
        {!isLoading && favorites.length === 0 && isFavorite && (
          <h2 className="no-favorites">No favorites added</h2>
        )}
        {isFavorite
          ? favorites.map((image) => (
              <ItemGif key={image.id} {...image} isFavorite={isFavorite} />
            ))
          : images.map((image) => (
              <ItemGif
                key={image.id}
                {...image}
                handleAddFavorite={handleAddFavorite}
                isFavorite={isFavorite}
              />
            ))}
      </div>

      <ToastContainer />
    </>
  );
};
export const ItemGif = ({ id, title, url, handleAddFavorite, isFavorite }) => {
  const [hover, setHover] = useState(false);

  const handleEvento = () => {
    handleAddFavorite(id, title, url);
  };

  return (
    <div
      className="card"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onClick={!isFavorite && handleEvento}
    >
      <img src={url} alt={title} />
      {hover && !isFavorite && (
        <div className="texto-oculto">
          <span className="textStar">⭐</span>
          <span className="likeSpan">Add to favorites</span>
        </div>
      )}
    </div>
  );
};
