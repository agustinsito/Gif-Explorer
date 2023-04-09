import PropTypes from "prop-types";

export const ItemGif = ({ title, url }) => {
  return (
    <div className="card">
      <img src={url} alt={title} />
    </div>
  );
};

ItemGif.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.stringisRequired,
};
