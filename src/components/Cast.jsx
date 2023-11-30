import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getCast } from './services/services';
import { PropTypes } from 'prop-types';

const Cast = () => {
  const [cast, setCast] = useState([]);
  const [error, setError] = useState(null);

  const { id } = useParams();
  //   console.log(id);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getCast(id);
        // console.log(res.cast);
        setCast(res.cast);
      } catch (error) {
        // console.log(error.message);
        setError(error.message);
      }
    };
    fetchData();
  }, [id]);

  const imgPath = 'https://image.tmdb.org/t/p/w200';

  return (
    <div>
      {error !== null && <h1>Error</h1>}
      <ul>
        {cast.map(arr => (
          <li key={arr.id}>
            <img src={imgPath + arr.profile_path} alt={arr.name} />
            <p>{arr.name}</p>
            <p>Character: {arr.character}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      profile_path: PropTypes.img,
      name: PropTypes.string,
      character: PropTypes.string,
    })
  ),
};

export default Cast;
