import Link from 'next/link';
import { useRouter } from 'next/router';

export function Navbar() {
  const router = useRouter();

  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Menu Button */}
        <div className="text-lg font-bold">
          <Link href="/departments">
            <span className="hover:text-gray-300 cursor-pointer">Menu</span>
          </Link>
        </div>

        {/* Navigation Links */}
        <div className="space-x-4">
          <Link href="/departments">
            <span className={`${router.pathname === '/departments' ? 'text-yellow-400' : ''} hover:text-gray-300 cursor-pointer`}>Departments</span>
          </Link>
          <Link href="/employees">
            <span className={`${router.pathname === '/employees' ? 'text-yellow-400' : ''} hover:text-gray-300 cursor-pointer`}>Employees</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}