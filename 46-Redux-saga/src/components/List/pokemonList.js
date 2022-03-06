import { connect, useSelector } from 'react-redux';
import { getList } from '../../services/api/api';
import { listSelector } from '../../ducks/list/selector';
import { ACTION_GET_LIST_REQUESTED } from '../../ducks/list/actions';
import { fetchPokemonList } from '../../redux/actions';
import { useEffect } from 'react';
import PokemonImage from './pokemonImage';

const PokemonList = (props) => {
  useEffect(() => {
    props.actionGetData();
  }, []);

  const listItem = useSelector(listSelector);

  return (
    <div>
      list
      <ul>
        {listItem.map((item) => (
          <li key={item.name}>
            {item.name} <PokemonImage url={item.url} /> <button>Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  list: listSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  actionGetData: () => {
    dispatch(fetchPokemonList());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);
