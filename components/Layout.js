import Link from 'next/link';

export default function Layout({ children }) {
  return (
    <>
      <header className="bg-gray-100 py-4 border-b">
        <nav className="max-w-6xl mx-auto px-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold">MigraineCare</h1>
          <ul className="flex space-x-6 text-sm">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/intake">Start Your Care</Link></li>
            <li><Link href="/learn">Learn</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
      </header>
      <main>{children}</main>
    </>
  );
}
