import React from "react";
function Profile({name, size}){
    return (
        <div>
            <h2>{name}</h2>
            <img 
            src={`https://unavatar.io/${name}`}
            alt={`Foto de ${name}`}
            style={{width: `${size}px`, height: `${size}px`}} />
        </div>
    );
}
export default Profile;