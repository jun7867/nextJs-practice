import Link from 'next/link';
import { useRouter } from 'next/router';

export default function Navbar() {
  const router = useRouter();
  console.log(router);

  return (
    <nav>
      <Link href="/">
        <a style={{ color: router.pathname === '/' ? 'red' : 'black' }}>Home</a>
      </Link>
      <Link href="/about">
        <a style={{ color: router.pathname === '/about' ? 'red' : 'black' }}>
          About
        </a>
      </Link>
    </nav>
  );
}
