
const LibrarySong = ({song, songs, setSongs, setCurrentSong, audioRef, isPlaying}) => {

    const songSelectHandler = () => {

        const newSongs = songs.map((track) => { return { ...track, active: track.id === song.id,}})

        setSongs(newSongs)

        setCurrentSong(song)

        if (isPlaying) {
            const playPromise = audioRef.current.play()
            if (playPromise !== undefined) {
                playPromise.then(() => {
                    audioRef.current.play()
                })
            }
        }
    }

    return (
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''} `}>
            <img src={song.cover} alt={song.name + ' cover art'}/>
            <div className="song-description">
                 <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;