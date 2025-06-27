export default function Navbar() {
  return (
    <nav className="bg-gray-100 p-4">
      <a href="/dashboard" className="mr-4">Dashboard</a>
      <a href="/upload" className="mr-4">Upload</a>
      <a href="/summary">Summary</a>
    </nav>
  );
}
