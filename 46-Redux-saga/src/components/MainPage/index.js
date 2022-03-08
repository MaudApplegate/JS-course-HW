import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataListSelector } from '../../ducks/list/selector';
import {
  ACTION_GET_POKEMON_LIST,
  ACTION_GET_POKEMON_IMAGES,
} from '../../redux/actions';
import { useEffect } from 'react';

const MainPage = ({ actionGetData, pokemonList, actionGetImages }) => {
  useEffect(() => {
    actionGetData();
    actionGetImages();
  }, []);

  return (
    <div>
      list
      <input />
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
  actionGetImages: () => {
    dispatch(ACTION_GET_POKEMON_IMAGES());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
