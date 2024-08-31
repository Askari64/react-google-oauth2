import PropTypes from 'prop-types';

function Profile( {name, picture, email} ) {
    return (
      <div>
          <img src={picture} alt="picture" />
          <p>{name}</p>
          <p>{email}</p>
      </div>
    )
  };

  Profile.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    picture: PropTypes.string.isRequired
  }
  
  export default Profile