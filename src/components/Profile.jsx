import PropTypes from 'prop-types';

function Profile( {name, picture, email} ) {
    return (
      <div className=' w-fit flex flex-col items-center p-2 space-y-2 border-2 border-cyan-400'>
          <img src={picture} width={100} height={100} alt="picture" />
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