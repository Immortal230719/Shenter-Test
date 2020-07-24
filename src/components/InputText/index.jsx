import React from 'react';
import './style.css';

export const InputText = ({ value, onChange, onKeyPress, ...props }) => {
  return (
    <div className="inputText">
      <label htmlFor="name">Name of User</label>
      <input
        type="text"
        id="name" 
        name="name"
        value={value}
        onChange={onChange}
        onKeyPress={onKeyPress}
        placeholder="Type login and press 'Enter', e.g webpack"
        aria-label="input name"
        {...props}
      />
    </div>
  );
}
