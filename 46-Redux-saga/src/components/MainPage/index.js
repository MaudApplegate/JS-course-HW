import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { dataListSelector } from '../../ducks/list/selector';
import {
  ACTION_GET_POKEMON_LIST,
  ACTION_GET_POKEMON_IMAGES,
  ACTION_CHANGE_INPUT,
} from '../../redux/actions';
import { useEffect } from 'react';
import { dataInputFilterSelector } from '../../ducks/input/selector';
import Loader from './Loader';
import ErrorMessage from './ErrorMessage';

const MainPage = ({
  actionGetData,
  pokemonList,
  actionGetImages,
  actionChangeInput,
  filterList,
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
      {handleChange && <p>Hello</p>}
      <Loader />
      <ErrorMessage />
      <ul>
        {pokemonList.map((item) => (
          <div>
            {item.isDisabled || (
              <li key={item.name}>
                {item.name}
                <img src={item.image} />
                <Link to={`/${item.id}`}>Details</Link>
              </li>
            )}
          </div>
        ))}
      </ul>
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonList: dataListSelector(state),
  filterList: dataInputFilterSelector(state),
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
