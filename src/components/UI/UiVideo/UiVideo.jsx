import React, {useEffect, useRef} from 'react';
import cn from 'classnames';
import styles from './UiVideo.module.css';
import PropTypes from "prop-types";

function UiVideo({src, classes, playbackRate = 1.0}) {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.playbackRate = playbackRate;
    }, [])

    return (
        <video
            Loop
            autoPlay
            muted
            className={cn(styles.video, classes)}
            playbackRate={playbackRate}
            ref={videoRef}>
            <source src={src}/>
        </video>
    );
}

UiVideo.propTypes = {
    src: PropTypes.string,
    classes: PropTypes.string,
    playbackRate: PropTypes.number,

}

export default UiVideo;