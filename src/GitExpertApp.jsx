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
      <header>
      <div className="header-title">
        <h1 className="gif">
          GIF <span className="titleSpan">explorer</span>
        </h1>
      </div>
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
