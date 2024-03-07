import React, { useEffect, useRef, useState } from "react";
// import { AuthData } from "../../store/authSlice";
import { Link, useLocation, useParams } from "react-router-dom";
import "./css/index.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faExpand, faVolumeLow, faPause, faVolumeXmark } from '@fortawesome/free-solid-svg-icons';


type Props = {

}
type VideoPlay = {
    // volumn: boolean,
    // play: boolean;
    // screen: boolean;
}
const WatchVideo = ({
}: Props) => {
    return (
        <main className="watch-video-page">
            <section className="watch-video-section">
                <div className="video-wrapper">
                    <div className="video-container">

                        <div className="video-time">
                            <div className="current-time"></div>
                            <div className="total-time">  /</div>
                        </div>

                    </div>
                    <div className="video-info">
                        <div className="video-title"></div>

                    </div>


                </div>
            </section>
        </main>
    )
};

export default WatchVideo;