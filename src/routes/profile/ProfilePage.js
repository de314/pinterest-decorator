import React from 'react'

import withAuth from 'hoc/withAuth'

import Profile from 'components/profile/Profile'

const ProfilePage = ({ user }) => (
  <div className="ProfilePage">
    <Profile user={user} />
  </div>
)

export default withAuth(ProfilePage)
