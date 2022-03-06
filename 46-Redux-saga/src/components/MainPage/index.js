import { connect } from 'react-redux';
import { dataListSelector } from '../../ducks/list/selector';
import { ACTION_GET_POKEMON_LIST } from '../../redux/actions';
import { useEffect } from 'react';

import PokemonImage from './pokemonImage';

const MainPage = ({ actionGetData, pokemonList }) => {
  useEffect(() => {
    actionGetData();
  }, []);

  return (
    <div>
      list
      <ul>
        {pokemonList.map((item) => (
          <li key={item.name}>
            {item.name}
            <PokemonImage url={item.url} />
            <button>Details</button>
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
});

export default connect(mapStateToProps, mapDispatchToProps)(MainPage);
