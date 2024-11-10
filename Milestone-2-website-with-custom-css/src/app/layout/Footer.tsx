import Link from "next/link";
import "../../styles/Footer.css"

function Footer() {
  return (
    <section className="footer-section">
      <footer className="footer-container">
        <div className="footer-content">
          <h2 className="footer-heading">M.A Web</h2>
          <nav className="footer-nav">
            <Link href="/">Home</Link>
            <Link href="/about">About Us</Link>
            <Link href="/contact">Contact Us</Link>
          </nav>
          <div className="footer-links">
            <a href="">LinkedIn</a>
           </div>
        </div> 
        <hr />
        <p id="p">M.A web &copy; 2024 All rights reserved</p>
      </footer>
    </section>
  );
}

export default Footer;
