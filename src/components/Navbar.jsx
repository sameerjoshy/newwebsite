import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>Growth Engineers</div>
      <div style={styles.links}>
        <Link to="/" style={styles.link}>Home</Link>
        <Link to="/about" style={styles.link}>About</Link>
        <Link to="/services" style={styles.link}>Services</Link>
        <Link to="/frameworks" style={styles.link}>Frameworks</Link>
        <Link to="/tools" style={styles.link}>Tools</Link>
        <Link to="/resources" style={styles.link}>Resources</Link>
        <Link to="/contact" style={styles.link}>Contact</Link>
      </div>
    </nav>
  )
}

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1.2rem 2rem',
    backgroundColor: '#f5f5f5',
    borderBottom: '1px solid #ddd',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#222',
  },
  links: {
    display: 'flex',
    gap: '1.5rem',
  },
  link: {
    textDecoration: 'none',
    color: '#333',
    fontWeight: '500',
  },
}
