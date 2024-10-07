import Image from 'next/image';
import Link from 'next/link';

export function Navbar() {
  return (
    <nav className='w-full flex items-center justify-between p-4 mb-8'>
      <Link
        href={'/'}
        className='flex items-center gap-2 text-lg font-bold uppercase tracking-wider select-none'
      >
        <Image alt='logo' src={'/logo.svg'} width={30} height={30} priority />
        Siga Seu Atleta
      </Link>
      <div>About</div>
    </nav>
  );
}
