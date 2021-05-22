import React from "react";
import StarRating from 'react-native-star-rating';

const RatingStars = (props) => {
  const {
    count = 4,
    setter = () => {},
    customStyle = {}
  } = props;

  const handleSubmit = () => {
    console.log('submited!');
  };

  return (
    <StarRating
      containerStyle={customStyle}
      disabled={false}
      maxStars={5}
      rating={count}
      emptyStarColor='rgba(0, 0, 0, 0.26)'
      emptyStar='star'
      fullStarColor='#FFC700'
      selectedStar={(rating) => setter(rating)}
    />
  );
};

export default RatingStars;
