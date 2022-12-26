import React from "react";

const User = ({person}) => {
    const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER
    const handleFollow = () => {
        
    }
  return (
    <div className="follower">
      <div>
        <img src={person.profilePicutre ? serverPublic + person.profilePicutre : serverPublic + "DefImages/def_profile_pic.png"} alt="" className="followerImage" />
        <div className="name">
          <span>{person.firstname}</span>
          <span>{person.username}</span>
        </div>
      </div>
      <button className="button fc-button" onClick={handleFollow}>Follow</button>
    </div>
  );
};

export default User;
