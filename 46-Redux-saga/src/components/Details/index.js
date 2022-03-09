import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { dataDetailsSelector } from '../../ducks/details/selector';
import { ACTION_GET_POKEMON_DETAILS } from '../../redux/actions';
import ErrorMessage from './ErrorMessage';
import Loader from './Loader';

const Details = ({ actionGetDetails, pokemonDetails }) => {
  const { id } = useParams();

  useEffect(() => {
    actionGetDetails(id);
  }, []);

  return (
    <div>
      <Loader />
      <ErrorMessage />
      {Object.keys(pokemonDetails).length !== 0 && (
        <div>
          <h3>Name</h3>
          <p>{pokemonDetails.name}</p>
          <h3>Abilities</h3>
          {pokemonDetails.abilities.map((item) => (
            <p key={item.ability.name}>{item.ability.name}</p>
          ))}
          <h3>Types</h3>
          {pokemonDetails.types.map((item) => (
            <p key={item.type.name}>{item.type.name}</p>
          ))}
          <h3>Moves </h3>
          <ul>
            {pokemonDetails.moves.map((item) => (
              <li key={item.move.name}>{item.move.name}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  pokemonDetails: dataDetailsSelector(state),
});
const mapDispatchToProps = (dispatch) => ({
  actionGetDetails: (id) => {
    dispatch(ACTION_GET_POKEMON_DETAILS(id));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Details);

Details.propTypes = {
  actionGetDetails: PropTypes.func.isRequired,
  pokemonDetails: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    abilities: PropTypes.array,
    moves: PropTypes.array,
    types: PropTypes.array,
  }),
};
