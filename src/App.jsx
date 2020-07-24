// Core
import React, { useState, useEffect } from 'react';

import './app.css';

// Tools
import { useHttp } from './hooks/useHttp';

// Components
import { 
  InputText,
  BackDrop,
  Avatar,
  TextList,
  UnorderedList,
} from './components';

export const App = () => {
  const [userName, setUserName] = useState(''); 
  const { loading, request, error, clearError } = useHttp();

  const [userData, setUserData] = useState(null);
  const [subscriptions, setSubscriptions] = useState(null);

  const submitHandler = async event => {
    if (event.key === 'Enter') {  
      clearError();
      try {
        const response = await request(`https://api.github.com/users/${userName.trim()}`)

        setUserData(response)
        console.log(response);
      } catch (error) {}
    }   
  }

  useEffect(() => {

    if (userData) {
      try {
        const getSubscriptions = async () => {
          const userSubscriptions = await request(`https://api.github.com/users/${userData.login}/subscriptions`);
          setSubscriptions(userSubscriptions);
        }
        getSubscriptions()  
      } catch (error) {}
    }
  }, [userData, request]);

  return (
    <div className="container">
      <BackDrop show={loading} />
      <h1>GitHub Users</h1>
      <h2 className="app_subtitle">Please, enter login of User</h2>
      <InputText
        value={userName} 
        onChange={e => setUserName(e.target.value)} 
        onKeyPress={submitHandler}
      />
      {Boolean(error)
        ? <div className="error">
            <strong>{error}</strong>
            {/* <button
              type='button'
              aria-label="clear Error"
              onClick={clearError}
            >
              Try again
            </button> */}
          </div>
        : <>    
            {Boolean(userData) && 
            <>
              <div className="user-wrapper">
                <Avatar url={userData.avatar_url} name={userData.name}/>
                <TextList 
                  location={userData.location}
                  company={userData.company}
                  email={userData.email}
                  twitter={userData.twitter_username}
                />
              </div>
              {subscriptions && <UnorderedList data={subscriptions} />}
            </>
            }
          </>
      }
    </div>
  );
}
