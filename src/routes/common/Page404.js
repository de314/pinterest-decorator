import React from 'react'

import { Link } from 'react-router-dom'

const Page404 = () => (
  <div className="Page404 text-center">
    <h1>Not Found</h1>
    <p className="text-muted">
      Try the <Link to="/">home page</Link>.
    </p>
  </div>
)

export default Page404
