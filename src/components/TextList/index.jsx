import React from 'react';
import './style.css';

export const TextList = ({
  company,
  location,
  email,
  twitter,
}) => {
  return (
    <ul className="textlist">
      <li>
        company: 
        <strong>{company ? company : "doesn't set company"}</strong>
      </li>
      <li>
        location: 
        <strong>{location ? location : "does't set location"}</strong>
      </li>
      <li>
        email: 
        <strong>{email ? email : "does't set email"}</strong>
        </li>
      <li>
        twitter: 
        <strong>{twitter ? twitter : "does't set twitter"}</strong>
      </li>
    </ul>
  );
}
