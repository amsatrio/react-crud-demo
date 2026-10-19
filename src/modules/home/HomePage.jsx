import { Link } from 'react-router-dom'

function HomePage() {
    return (
        <>
            <div>Home Page</div>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/hello-world">Hello World</Link>
                    </li>
                    <li>
                        <Link to="/counter">Counter</Link>
                    </li>
                </ul>
            </nav>
        </>
    )
}

export default HomePage