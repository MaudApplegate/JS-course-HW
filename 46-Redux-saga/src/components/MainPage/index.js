import { connect } from 'react-redux';
import { dataListSelector } from '../../ducks/list/selector';
import {
  ACTION_GET_POKEMON_LIST,
  ACTION_GET_POKEMON_IMAGES,
} from '../../redux/actions';
import { useEffect } from 'react';

import PokemonImage from './pokemonImage';

import { Link } from 'react-router-dom';
import { dataImageSelector } from '../../ducks/listImages/selector';

const MainPage = ({
  actionGetData,
  pokemonList,
  actionGetImages,
  imagesList,
}) => {
  useEffect(() => {
    actionGetData();
  }, []);

  useEffect(() => {
    pokemonList.map((item) => actionGetImages(item.url));
  }, [pokemonList]);

  return (
    <div>
      list
      <ul>
        {pokemonList.map((item) => (
          <li key={item.name}>
            {item.name}
            <PokemonImage url={item.url} />
            {imagesList
              .filter((q) => q.name == item.name)
              .forEach((el) => (
                <p>
                  {el.image} <img src={el.image} />
                </p>
              ))}
            <Link to={`/${item.url.slice(34, -1)}`}>Details</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonList: dataListSelector(state),
  imagesList: dataImageSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetData: () => {
    dispatch(ACTION_GET_POKEMON_LIST());
  },
  actionGetImages: (url) => {
    dispatch(ACTION_GET_POKEMON_IMAGES(url));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
