import React from 'react';
import './style.css';

export const Avatar = ({
  url,
  name,
}) => {
  return (
    <div className="avatar">
      <figure>
        <img src={url} alt="avatar" />
        <figcaption>{name}</figcaption>
      </figure>    
    </div>
  );
};
