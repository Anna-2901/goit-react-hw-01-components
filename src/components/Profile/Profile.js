import React from "react";
import s from "./Profile.module.css";
import defaultImg from "./defaultImg.jpg";
import PropTypes from 'prop-types';


const Profile =({ avatar, name, tag, location, followers, views, likes }) => {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img
          src={avatar}
          alt={name}
          className={s.avatar}
        />
        <p className={s.name}>{name}</p>
        <p className={s.tag}>{tag}</p>
        <p className={s.location}>{location}</p>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}>{followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}>{views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};
Profile.defaultProps = {
  avatar: defaultImg,
};

Profile.propTypes = {
  tag: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  followers: PropTypes.number.isRequired,
  views: PropTypes.number.isRequired,
  likes: PropTypes.number.isRequired,
}

export default Profile;