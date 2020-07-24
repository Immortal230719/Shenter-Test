import React from 'react';
import './style.css';

export const UnorderedList = ({ data }) => {
  return (
    <>
      <h3 className="subscr-title">Subcriptions</h3>
      <ul className="unorderedList">
        {data.map(repo => (
          <li key={repo.id}>
            <a href={repo.html_url} target="_blank" rel="noreferrer noopener">
              {repo.name}
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
