import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function Navigationbar() {
  return (
    <nav className="nav">
      <Link to="/" className="site-title">
        SEEKMEAPP
      </Link>
      <ul>
        <CustomLink to="/Login">Login</CustomLink>
        <CustomLink to="/RegistrationScreen">Registration</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isActive = useMatch({ path: resolvedPath.pathname, end: true })

  return (
    <li className={isActive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}