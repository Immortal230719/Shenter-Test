import React from 'react';
import './style.css';

export const BackDrop = ({ show }) => (
  <>
    {show && (
    <div className="backDrop">
      <div className="mesh-loader">
        <div className="set-one">
          <div className="circle" />
          <div className="circle" />
        </div>
        <div className="set-two">
          <div className="circle" />
          <div className="circle" />
        </div>
      </div>
    </div>
    )}
  </>
);
