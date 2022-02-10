import React from 'react';
import PropTypes from 'prop-types';
import defaultAvatar from '../images/tarjetas-molonas.jpeg';

function Profile(props) {
  const avatar = props.avatar === '' ? defaultAvatar : props.avatar;
  return (
    <div
      className="card__photo profile__preview js__profile-preview"
      style={{ backgroundImage: `url(${avatar})` }}
    >
    </div>
  );
}

Profile.propTypes = {
  avatar: PropTypes.string.isRequired,
};

export default Profile;