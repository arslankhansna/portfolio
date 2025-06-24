import Navbar from './Navbar';
import '../styles/globals.css';

export default function Layout({ children }) {
  return (
    <>
      <Navbar />
      <main style={{ padding: '2rem' }}>{children}</main>
    </>
  );
}
