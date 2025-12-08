import "../styless/Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Plus Gym. Todos los derechos reservados.</p>
    </footer>
  );
}

export default Footer;