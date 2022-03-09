import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { dataListSelector } from '../../ducks/list/selector';

import {
  ACTION_GET_POKEMON_LIST,
  ACTION_GET_POKEMON_IMAGES,
  ACTION_CHANGE_INPUT,
} from '../../redux/actions';

import Loader from './Loader';
import ErrorMessage from './ErrorMessage';
import PokemonList from './PokemonList';

const MainPage = ({
  actionGetData,
  pokemonList,
  actionGetImages,
  actionChangeInput,
}) => {
  useEffect(() => {
    actionGetData();
    actionGetImages();
  }, []);

  const handleChange = (e) => {
    actionChangeInput(e.target.value);
  };

  return (
    <div>
      list
      <input onChange={handleChange} />
      <Loader />
      <ErrorMessage />
      <ul>
        {pokemonList.map((item) => (
          <PokemonList
            name={item.name}
            id={item.id}
            image={item.image}
            isDisabled={item.isDisabled}
            key={item.name}
          />
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonList: dataListSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetData: () => {
    dispatch(ACTION_GET_POKEMON_LIST());
  },
  actionGetImages: () => {
    dispatch(ACTION_GET_POKEMON_IMAGES());
  },
  actionChangeInput: (value) => {
    dispatch(ACTION_CHANGE_INPUT(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);

MainPage.propTypes = {
  actionGetData: PropTypes.func.isRequired,
  actionGetImages: PropTypes.func.isRequired,
  actionChangeInput: PropTypes.func.isRequired,
  pokemonList: PropTypes.array.isRequired,
};
