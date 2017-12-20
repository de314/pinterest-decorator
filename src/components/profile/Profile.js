import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

const Profile = ({ user }) => {
  const { username, first_name, bio, image, counts } = user
  const imgSrc =
    _.isPlainObject(image) && _.keys(image).length > 0
      ? _.values(image)[0].url
      : `https://robohash.org/${username}.png?set=set2&size=280x280&bgset=bg1`
  const { pins, following, followers, boards } = counts
  return (
    <div className="Profile">
      <div className="row mb-5">
        <div className="col col-md-3">
          <img src={imgSrc} className="img-fluid img-thumbnail w-100" alt="" />
        </div>
        <div className="col col-md-8">
          <div className="h1">
            {first_name} - {username}
          </div>
          <p>{bio}</p>
        </div>
      </div>
      <hr />
      <div className="stats-container mt-5">
        <h3>Stats</h3>
        <table className="table table-hover table-striped">
          <tbody>
            <tr>
              <th>Pins</th>
              <td>{pins}</td>
            </tr>
            <tr>
              <th>Boards</th>
              <td>{boards}</td>
            </tr>
            <tr>
              <th>Followers</th>
              <td>{followers}</td>
            </tr>
            <tr>
              <th>Following</th>
              <td>{following}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

Profile.propTypes = {
  user: PropTypes.shape({
    id: PropTypes.string.isRequired,
  }).isRequired,
}

export default Profile
