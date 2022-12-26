import React from "react";
import { Link } from "react-router-dom";
import "./ProfileCard.css";

import { useSelector } from "react-redux";

const ProfileCard = ({location}) => {
  const { user } = useSelector((state) => state.AuthReducer.authData);
  const posts = useSelector((state) => state.postReducer.posts)
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <div className="ProfileCard">
      <div className="ProfileImages">
        <img
          src={
            user.coverPicture
              ? serverPublic + user.coverPicture
              : serverPublic + "DefImages/def_cover_pic.jpg"
          }
          alt=""
        />
        <img
          src={
            user.profilePicture
              ? serverPublic + user.profilePicture
              : serverPublic + "DefImages/def_profile_pic.png"
          }
          alt=""
        />
      </div>

      <div className="ProfileName">
        <span>
          {user.firstname} {user.lastname}
        </span>
        <span>{user.worksAt ? user.worksAt : "Write about yourself"}</span>
      </div>

      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>
          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>

          {location === 'profilePage' && (
            <>
              <div className="vl"></div>
              <div className="follow">
                <span>{posts.filter((post) => post.userId === user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location === 'profilePage' ? (
        ""
      ) : (
        <span>
          <Link style={{textDecoration : "none", color: "inherit"}} to={`/profile/${user._id}`}>My Profile</Link>
        </span>
      )}
    </div>
  );
};

export default ProfileCard;
