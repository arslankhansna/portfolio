import Link from 'next/link';
//import styles from './Navbar.module.css'; // create this for custom styling

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      <Link href="/">Home</Link>
      <Link href="/about">About</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/skills">Skills</Link>
      <Link href="/certifications">Certifications</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}
