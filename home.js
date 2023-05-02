import React from 'react';
import './home.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

export default function Home() {
  return (
    <div>
      <div className='body'>
        <div className='main'>
          <div className='sub-main'>
            <div>
              <div className='images'>
                <div className='cont-img'>
                  <img src='https://thumbs.dreamstime.com/z/pink-book-face-illustration-vector-white-background-207057320.jpg'></img>
                </div>
              </div>
            </div>
            <div className='login'>
              <h2>DEAR DIARY</h2>
              <div>
                <input type='text' placeholder='Username'></input>
                <input type='password' placeholder='Password'></input>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


