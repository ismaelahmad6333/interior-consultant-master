import { useState } from 'react'

const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <nav className="container nav">
      <div className="nav-center">
        <div className="nav-header">
          <h2>This interior</h2>
          <ul className={open ? 'links show-links' : 'links'}>
            <li>Home</li>
            <li>Collection</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
          <button className="btn" onClick={() => setOpen(!open)}>
            |||||
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
