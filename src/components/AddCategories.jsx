import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const AddCategories = ({ onNewCategory }) => {
  const [inputValue, setInputValue] = useState([]);

  const onInputChange = ({ target }) => {
    setInputValue(target.value);
  };

  const onSubtmit = (e) => {
    e.preventDefault();
    if (inputValue.trim().length <= 1) return (
      toast(`❌ "${inputValue}" is not valid!`, {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        })
    )

    // setCategories((categories) => [inputValue, ...categories]);
    onNewCategory(inputValue.trim());
    setInputValue("");
  };

  return (
    <div>
      <form onSubmit={onSubtmit}>
        <input
          type="text"
          placeholder="Search a GIF..."
          value={inputValue}
          onChange={onInputChange}
        />
      </form>

    </div>
  );
};
