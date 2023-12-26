import React, { useState } from 'react';
import StarRating from 'react-stars';

const RatingComponent = () => {
  const [rating, setRating] = useState(3.4);
  const [reviews, setReviews] = useState(12); 
  return (
    <div className='flex gap-2 items-center'>
      <StarRating
        count={5}
        size={20}
        value={rating}
        half={true} // Enable half stars
        edit = {false}
      />
      <h2>{`reviews ${reviews}`}</h2>
    </div>
  );
};

export default RatingComponent;
