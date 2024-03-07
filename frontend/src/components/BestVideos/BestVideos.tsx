import React from 'react';
import "./css/index.css";
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare } from '@fortawesome/free-solid-svg-icons';

type Props = {

}
const BestVideos = ({ }: Props) => {

    return (
        <main className='best-videos-page'>
            <section className='best-videos-section'>
                <div className='videos-wrapper'>

                </div>
            </section>
        </main>
    );
};

export default BestVideos;