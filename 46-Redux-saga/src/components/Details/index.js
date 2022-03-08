import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import { dataDetailsSelector } from '../../ducks/details/selector';
import { ACTION_GET_POKEMON_DETAILS } from '../../redux/actions';

const Details = ({ actionGetDetails, pokemonDetails }) => {
  const { id } = useParams();
  console.log(id);

  useEffect(() => {
    actionGetDetails(id);
  }, []);

  console.log(pokemonDetails);

  return (
    <>
      {pokemonDetails && (
        <div>
          <h3>Name</h3>
          <p>{pokemonDetails.name}</p>
          <h3>Abilities</h3>
          {pokemonDetails.abilities.map((item) => (
            <p>{item.ability.name}</p>
          ))}
          <h3>Types</h3>
          {pokemonDetails.types.map((item) => (
            <p>{item.type.name}</p>
          ))}
          <h3>Moves </h3>
          <ul>
            {pokemonDetails.moves.map((item) => (
              <li>{item.move.name}</li>
            ))}
          </ul>
        </div>
      )}
    </>
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