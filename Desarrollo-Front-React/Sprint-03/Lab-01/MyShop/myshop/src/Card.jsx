import React from 'react';
import "./Card.css"

const Card = () => {
    return (
        <div className='card-container'>
            <div>
                <img 
                className='card-header-image'
                src="https://unavatar.io/Pikachu" 
                alt="Profile Picture" />
                <div>
                    <h3>username</h3>
                    <p>Location</p>
                </div>
            </div>
            <div>
                <img 
                className='card-content-image'
                src="https://via.placeholder.com/600x400" alt="" />
            </div>
            <div>
                <p>Likes: 1000</p>
                <p>This is the post caption. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, dolorum?</p>
                <p>#insta $instagram #post</p>
            </div>
        </div>
    )
}
export default Card;