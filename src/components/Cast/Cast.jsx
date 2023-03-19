import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieCredits, getActorImage } from 'services';

export const Cast = () => {
  const [cast, setCast] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchCast = async () => {
      try {
        const res = await getMovieCredits(id);
        setCast(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCast();
    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <>
      {cast.length !== 0 ? (
        <ul>
          {cast.map(item => {
            const { cast_id, profile_path, name, character } = item;
            return (
              <li key={cast_id}>
                <img
                  src={getActorImage(profile_path)}
                  width="100px"
                  alt="name"
                />
                <p>{name}</p>
                <p>Character: {character}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Ой, лишенько. Can't find any info about cast:(</p>
      )}
    </>
  );
};
