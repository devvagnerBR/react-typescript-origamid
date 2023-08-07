import React from 'react'
import videoSrc from '../../content/assets/video.mp4'

const Ref = () => {

    const video = React.useRef<HTMLVideoElement>( null );
    const [isPlaying, setIsPlaying] = React.useState( false )


    const forward = () => {
        if ( !video.current ) return;
        video.current.currentTime += 2;
    }

    const changePlaybackRate = ( speed: number ) => {

        if ( !video.current ) return;
        video.current.playbackRate = speed;
    }

    const muteVideo = () => {

        if ( !video.current ) return;
        video.current.muted = !video.current.muted;
    }

    const pictureInPicture = async () => {
        if ( !video.current ) return;
        if ( document.pictureInPictureElement ) {
            await document.exitPictureInPicture()
        } else {
            await video.current.requestPictureInPicture();
        }
    }

    return (
        <div>
            <div className='flex items-center justify-center'>
                {isPlaying ?
                    <button onClick={() => video.current?.pause()}>PAUSE</button> :
                    <button onClick={() => video.current?.play()}>PLAY</button>}
                <button onClick={forward}>+2s</button>
                <button onClick={() => changePlaybackRate( 1 )}>1x</button>
                <button onClick={() => changePlaybackRate( 2 )}>2x</button>
                <button onClick={pictureInPicture}>PiP</button>
                <button onClick={muteVideo}>mute</button>
            </div>
            <video
                controls
                onPlay={() => setIsPlaying( true )}
                onPause={() => setIsPlaying( false )}
                ref={video}
                src={videoSrc} />
        </div>
    )
}

export default Ref