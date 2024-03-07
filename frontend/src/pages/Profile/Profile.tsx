import React, { useEffect, useState } from 'react';
import "./css/index.css";
import { Link, useParams } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis } from '@fortawesome/free-solid-svg-icons';

type Props = {

}
const Profile = ({

}: Props) => {
    const [ellipsisClick, setEllipsisClick] = useState(null);
    const EllipsisClick = (id: any) => setEllipsisClick(prev => prev === id ? null : id);
    const params = useParams();
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('http://localhost:4000/video/views', {
                method: "GET"
            });
            const responseData = await response.json()
            console.log('best views', responseData);
        }
        fetchData();
    }, [])
    return (
        <main className='profile-page'>
            <section className='profile-section'>
                <div className='user-profile-wrapper'>
                    <div className='user-info'>

                    </div>
                </div>

                <div className='user-videos-wrapper'>
                    <h2 className='videos-title'>내 비디오</h2>
                    <div className='videos-wrapper'>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Profile;