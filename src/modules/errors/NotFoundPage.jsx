import { Link } from 'react-router-dom'

function NotFoundPage() {
  return (
    <>
      <div>404</div>
      <p>Page not found</p>
      <nav>
        <ul>
          <li>
            <Link to="/">Back to Home</Link>
          </li>
        </ul>
      </nav>
    </>
  )
}

export default NotFoundPage
