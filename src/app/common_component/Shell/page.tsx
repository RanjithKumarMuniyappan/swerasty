'use client';
import { useState } from 'react';


import { FloatingActionButton } from '@/app/components/FloatingActionButton';
import { SyllabusModal } from '@/app/components/SyllabusModal';
import { Header } from '../Header';
import { Sidebar } from '../Sidebar';


export default function Shell({ children }: any) {
  const [isOpen, setIsOpen] = useState(true);
  const [isModalOpen, setModalOpen] = useState(false);

  return (

    
    <div className="flex h-screen bg-gray-100 text-gray-800">
      <Sidebar isOpen={isOpen} />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header sidebarOpen={isOpen} setSidebarOpen={setIsOpen} />
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            {children}
          </div>
        </main>
      </div>
      <FloatingActionButton onClick={() => setModalOpen(true)} />
      <SyllabusModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    </div>
  );
}
