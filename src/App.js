import { useState, useRef } from 'react'
import Player from './components/Player'
import Song from './components/Song'
import Library from './components/Library'
import Nav from './components/Nav'
import './styles/app.scss'
import data from './util'

function App() {

  const [songs, setSongs] = useState(data())
  const [currentSong, setCurrentSong] = useState(songs[0])
  const [isPlaying, setIsPlaying] = useState(false)
  const [libraryStatus, setLibraryStatus] = useState(false)
  const [songInfo, setSongInfo] = useState({
          currentTime: 0,
          duration: 0,
        });

  const audioRef = useRef(null)

  const timeUpdateHandler = (e) => {
    const current = e.target.currentTime
    const duration = e.target.duration
    setSongInfo({...songInfo, currentTime: current, duration: duration})
  }

  return (
    <div className="App">
      <Nav  libraryStatus={libraryStatus} setLibraryStatus={setLibraryStatus} />
      <Song
        isPlaying={isPlaying}
        currentSong={currentSong}
      />
      <Player
        audioRef={audioRef}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
        currentSong={currentSong}
        songInfo={songInfo}
        setSongInfo={setSongInfo}
      />
      <Library
        audioRef={audioRef}
        songs={songs}
        isPlaying={isPlaying}
        setSongs={setSongs}
        setCurrentSong={setCurrentSong}
        libraryStatus={libraryStatus}
      />
      <audio
        ref={audioRef}
        src={currentSong.audio}
        onTimeUpdate={timeUpdateHandler}
        onLoadedMetadata={timeUpdateHandler}
      >
      </audio>
    </div>
  );
}

export default App;
