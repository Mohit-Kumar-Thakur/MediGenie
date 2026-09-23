import PropTypes from 'prop-types';

const Profile = ({ user }) => (
  <div className="card profile">
    <div className="avatar" aria-hidden="true">{user.username.charAt(0).toUpperCase()}</div>
    <h2>Your profile</h2>
    <dl className="profile-info">
      <dt>Username</dt>
      <dd>{user.username}</dd>
      <dt>Email</dt>
      <dd>{user.email}</dd>
      {user.createdAt && (
        <>
          <dt>Member since</dt>
          <dd>{new Date(user.createdAt).toLocaleDateString(undefined, { dateStyle: 'long' })}</dd>
        </>
      )}
    </dl>
  </div>
);

Profile.propTypes = {
  user: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    createdAt: PropTypes.string
  }).isRequired
};

export default Profile;
