import { useEffect } from 'react';

const Pages = ['home', 'about', 'projects', 'contact'];

export const Navbar = ({ menuOpen, setMenuOpen }) => {
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
  }, [menuOpen]);
  return (
    <nav className='fixed top-0 w-full z-40 bg-[rgba(10, 10, 10, 0.8)] backdrop-blur-lg border-b border-white/10 shadow-lg'>
      <div className='max-w-5xl mx-auto px-4'>
        <div className='flex justify-between items-center h-16'>
          <a href='#home' className='font-mono text-xl font-bold'>
            Meik<span className='text-blue-500'>.Grünholz</span>{' '}
          </a>

          <div className='w-7 h-5 relative cursor-pointer z-40 md:hidden' onClick={() => setMenuOpen((prev) => !prev)}>
            &#9776;
          </div>

          <div className='hidden md:flex items-center space-x-8'>
            {Pages.map((page) => (
              <a key={page} href={`#${page}`} className='text-gray-500 hover:text-black transition-colors'>
                {page.charAt(0).toUpperCase() + page.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
