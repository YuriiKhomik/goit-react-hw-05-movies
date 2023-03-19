import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieReviews } from 'services';

export const Reviews = () => {
  const [reviews, setReviews] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const abortController = new AbortController();
    const fetchReviews = async () => {
      try {
        const res = await getMovieReviews(id);
        setReviews(res);
      } catch (error) {
        console.log(error);
      }
    };
    fetchReviews();
    return () => {
      abortController.abort();
    };
  }, [id]);

  return (
    <>
      {reviews.length !== 0 ? (
        <ul>
          {reviews.map(item => {
            const { author, content, id } = item;
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>Wo don't have any reviews for this movie</p>
      )}
    </>
  );
};
