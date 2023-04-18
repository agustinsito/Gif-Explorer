import { useState } from "react";
import { AddCategories, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [category, setCategory] = useState('One Piece');
  const onAddCategory = (newCategory) => {
    setCategory(newCategory);
  };
  return (
    <>
      <header className="bg-Svg">
      <div className="header-title">
        <h1 className="gif">
          GIF <span className="titleSpan">explorer</span>
        </h1>
      </div>
      <h3 className="textInputBottom">Explore GIFs and save your Favorites</h3>
      </header>


      <AddCategories onNewCategory={onAddCategory} />
        <GifGrid category={category} />
      <footer >
          <p>Developed by agustinsito</p>
      </footer>
    </>
  );
};
