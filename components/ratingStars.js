import React from "react";
import StarRating from 'react-native-star-rating';

const RatingStars = (props) => {
  const {
    count = 4,
    setter = () => { },
    customStyle = {},
    size = 40,
    disabled = false
  } = props;

  const handleSubmit = () => {
    console.log('submited!');
  };

  return (
    <StarRating
      containerStyle={customStyle}
      disabled={disabled}
      maxStars={5}
      starSize={starSize}
      rating={count}
      starSize={size}
      emptyStarColor='rgba(0, 0, 0, 0.26)'
      emptyStar='star'
      fullStarColor='#FFC700'
      selectedStar={(rating) => setter(rating)}
    />
  );
};

export default RatingStars;
