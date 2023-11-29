import React,{useState} from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App-v2';
import StarRating from './StarRating';
import './index'

function Test(){
  const [movieRating, setMovieRating] = useState(0);
  return (<>
  <StarRating color="blue" maxRating={7} onSetRating={setMovieRating}/>
  <p>This movies was rated {movieRating} stars</p>
  </>)
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={5} messages={['Terrible', 'Bad', 'Okay', 'Good', 'Amazing']}/>
    <StarRating maxRating={7} size={30} color="red" className="test" defaultRating={3}/> */}
    {/* <Test /> */}
  </React.StrictMode>
);


