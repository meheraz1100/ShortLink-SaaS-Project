import Container from "../shared/container";

export default function Navbar() {
  return (
    <header className="border-b">
      <Container>
        <div className="flex h-16 items-center justify-between">
          <h2 className="text-xl font-bold">ShortLink</h2>

          <nav className="flex gap-6">
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">Login</a>
          </nav>
        </div>
      </Container>
    </header>
  );
}