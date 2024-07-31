import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; 

const StarList = ({ number, color }) => {
  const stars = Array.from({ length: number }, (_, index) => (
    <span key={index} className={`fa fa-star ${color}`}></span>
  ));

  return <div>{stars}</div>;
};

export default StarList;
