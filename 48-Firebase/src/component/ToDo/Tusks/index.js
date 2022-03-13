import { useContext } from 'react';
import { DataContext } from '../../../context/Context';
import ButtonDelete from './button';

const Tusks = () => {
  const data = useContext(DataContext);

  return (
    <div>
      {!!data &&
        Object.values(data).map((item) => {
          return (
            <div key={item.id}>
              <p>{item.task}</p>
              <ButtonDelete id={item.id} />
            </div>
          );
        })}
    </div>
  );
};

export default Tusks;
