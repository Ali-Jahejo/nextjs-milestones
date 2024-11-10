import Link from "next/link";
import "../../styles/Header.css"; // Adjust path as needed

function Header() {
  return (
    <header>
      <div className="header-container">
        <Link href="/">
          <h2>M.A Web</h2>
        </Link>
        <nav>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
