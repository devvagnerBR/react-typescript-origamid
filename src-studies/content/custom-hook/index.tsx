import React from 'react'
import videoSrc from '../assets/video.mp4'
import useLocalStorage from './use-local-storage';



const CustomHook = () => {

    const video = React.useRef<HTMLVideoElement>( null );
    const [volume, setVolume] = useLocalStorage( "volume", "0" )

    React.useEffect( () => {

        if ( !video.current ) return;
        const volumeAsNumber = Number( volume );
        if ( volumeAsNumber >= 0 && volumeAsNumber <= 1 ) video.current.volume = volumeAsNumber

    }, [volume] );



    return (
        <div>
            <p>volume: {volume} </p>
            <div className='flex items-center justify-center'>
                <button onClick={() => setVolume( "0" )}>0</button>
                <button onClick={() => setVolume( "0.5" )}>50</button>
                <button onClick={() => setVolume( "1" )}>100</button>
            </div>
            <video controls ref={video} src={videoSrc} />
        </div>
    )
}

export default CustomHook