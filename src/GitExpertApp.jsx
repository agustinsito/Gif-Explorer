import { useState } from "react";
import { AddCategories, GifGrid } from "./components";

export const GitExpertApp = () => {
  const [categories, setCategories] = useState(['One Piece']);

  const onAddCategory = (newCategory) => {
    if (
      categories.find(
        (category) => category.toLowerCase() === newCategory.toLowerCase()
      )
    ) {
      return;
    }
    setCategories([newCategory, ...categories]);
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

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
      <footer >
          <p>Developed by agustinsito</p>
      </footer>
    </>
  );
};
