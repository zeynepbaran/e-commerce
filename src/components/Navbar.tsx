import Link from 'next/link';

const Navbar: React.FC = () => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <div className="container">
      <Link className="navbar-brand" href="/">E-Commerce</Link>
      <div>
        <Link className="nav-link" href="/login">Login</Link>
        <Link className="nav-link" href="/register">Register</Link>
        <Link className="nav-link" href="/products">Products</Link>
        <Link className="nav-link" href="/cart">Cart</Link>
        <Link className="nav-link" href="/profile">Profile</Link>
        <Link className="nav-link" href="/admin">Api</Link>
        <Link className="nav-link" href="/admin">Checkout</Link>
        <Link className="nav-link" href="/admin">Logout</Link>
      </div>
    </div>
  </nav>
);

export default Navbar;