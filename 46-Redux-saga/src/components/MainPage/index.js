import { connect } from 'react-redux';
import { dataListSelector } from '../../ducks/list/selector';
import {
  ACTION_GET_POKEMON_LIST,
  ACTION_GET_POKEMON_IMAGES,
  ACTION_INPUT_CHANGED,
} from '../../redux/actions';
import { useEffect } from 'react';

import { Link } from 'react-router-dom';

const MainPage = ({
  actionGetData,
  pokemonList,
  actionGetImages,
  actionInputChange,
}) => {
  useEffect(() => {
    actionGetData();
    // pokemonList.map((item) => actionGetImages(item.url));
    // async function a() {
    //   await actionGetData();
    //   return pokemonList.map((item) => actionGetImages(item.url));
    // }
    // a();
  }, []);

  useEffect(() => {
    pokemonList.map((item) => actionGetImages(item.url));
  }, [actionGetData]);

  // useEffect(() => {
  //   pokemonList.map((item) => actionGetImages(item.url));
  // }, [actionGetData]);

  const handleChange = (e) => {
    actionInputChange(e.target.value);
  };

  return (
    <div>
      list
      <input onChange={handleChange} />
      <ul>
        {pokemonList.map((item) => (
          <li key={item.name}>
            {item.name}
            <img src={item.image} />
            <Link to={`/${item.id}`}>Details</Link>
          </li>
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
  actionGetImages: (url) => {
    dispatch(ACTION_GET_POKEMON_IMAGES(url));
  },
  actionInputChange: (value) => {
    dispatch(ACTION_INPUT_CHANGED(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
