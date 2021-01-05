import LibrarySong from './LibrarySong'

const Library = ({songs, setSongs, setCurrentSong, audioRef, isPlaying}) => {

    return (
        <div className="library">
            <h2>Library</h2>
            <div className="library-songs">
                {songs.map((song) => (
                    <LibrarySong
                        songs={songs}
                        song={song}
                        setCurrentSong={setCurrentSong}
                        key={song.id}
                        audioRef={audioRef}
                        isPlaying={isPlaying}
                        setSongs={setSongs}
                    />
                ))}
            </div>
        </div>
    )
}

export default Library;