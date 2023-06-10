import './App.css';
import { useState } from 'react';
import ReactPlayer from 'react-player';
import movieTrailer from  'movie-trailer';
   
function App() {
   

  const [video, setVideo] = useState("inception");
  const [videoURL, setVideoURL] = 
    useState("https://youtu.be/sa9l-dTv9Gk");
    useState("https://youtu.be/wDYlG0MiFhY");

  function handleSearch() {
    movieTrailer(video).then((res) => {
      setVideoURL(res);
    });
  }
   
  return (
    <div className="App">
      <div className="search-box">
        <label>
            Rechercher votre film ici:{ " " }
        </label>
        <input type="text" onChange=
            {(e) => { setVideo(e.target.value) }} />
  
        <button onClick={()=>{handleSearch()}}>
            Rechercher
        </button>
      </div>
  
  
      <ReactPlayer url={videoURL} controls={true}/>
    </div>
  );
}

export default App;
