import Link from 'next/link';

const NavBar = () => (
  <nav>
    <ul>
      <li><Link href="/"><a>Home</a></Link></li>
      <li><Link href="/about"><a>About</a></Link></li>
      <li><Link href="/services"><a>Services</a></Link></li>
      <li><Link href="/contact"><a>Contact</a></Link></li>
    </ul>
    <style jsx>{`
      nav {
        background: #333;
        padding: 1em;
      }
      ul {
        list-style: none;
        display: flex;
        justify-content: space-around;
      }
      li {
        margin: 0 1em;
      }
      a {
        color: white;
        text-decoration: none;
      }
    `}</style>
  </nav>
);

export default NavBar;
