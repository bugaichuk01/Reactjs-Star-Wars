import React from 'react';
import style from './ErrorMessage.module.css'
import UiVideo from "../UI/UiVideo";
import video from '../../static/video.mp4'

function ErrorMessage(props) {
    return (
        <div>
            <p className={style.text}>The dark side of the force has won.<br/> We cannot display data.<br/> Please, come back later.</p>
            <UiVideo src={video} classes={style.video} />
        </div>
    );
}

export default ErrorMessage;