import Link from "next/link";

export default function Header() {
  return (
    <header className="site-header">
      <Link className="site-logo" href="/" aria-label="Elle home">
        ELLE
      </Link>

      <nav className="site-nav" aria-label="Main navigation">
        <a href="#behandlungen">Behandlungen</a>
        <a href="#about">Über Elle</a>
      </nav>
    </header>
  );
}
