'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarLink = ({ item, isOpen }: { item: any; isOpen: boolean }) => {
  const pathname = usePathname();
  const isActive = pathname === item.path;

  const linkClasses = `
    flex items-center py-3 rounded-md text-sm font-medium transition-colors duration-200 whitespace-nowrap
    ${isOpen ? 'px-4' : 'justify-center'}
    ${isActive ? 'bg-blue-600 text-white' : 'text-slate-300 hover:bg-slate-700 hover:text-white'}
  `;

  return (
    <Link
      key={item.id}
      href={item.path}
      title={!isOpen ? item.label : undefined}
      className={linkClasses}
    >
      <item.icon />
      <span
        className={`ml-4 transition-opacity duration-200 ${
          !isOpen ? 'opacity-0 hidden md:inline' : ''
        }`}
      >
        {item.label}
      </span>
    </Link>
  );
};

export default SidebarLink;
