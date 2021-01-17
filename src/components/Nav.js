import { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMusic } from '@fortawesome/free-solid-svg-icons'

const Nav = ({ setLibraryStatus, libraryStatus}) => {
    return(
        <nav>
            <h1>Muse</h1>
            <button onClick={() => {setLibraryStatus(!libraryStatus)}}>
                Library <FontAwesomeIcon icon={faMusic}/>
            </button>
        </nav>
    )
}

export default Nav;