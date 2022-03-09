import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PokemonList = ({ name, id, image, isDisabled }) => {
  return (
    <>
      {isDisabled || (
        <li>
          {name}
          <img src={image} />
          <Link to={`/${id}`}>Details</Link>
        </li>
      )}
    </>
  );
};

export default PokemonList;

PokemonList.propTypes = {
  name: PropTypes.string,
  url: PropTypes.string,
  isDisabled: PropTypes.bool,
  image: PropTypes.string,
  id: PropTypes.number,
};
