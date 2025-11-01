import React from 'react';

interface HeaderProps {
    onAdminClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onAdminClick }) => {
  return (
    <header className="bg-gradient-to-r from-indigo-800 to-purple-700 text-white shadow-lg">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3">
        <div className="flex items-center justify-between">
          <div className="w-1/4 text-left">
            <button onClick={onAdminClick} className="text-xs text-indigo-300 hover:text-white transition-colors focus:outline-none">
                Admin Area
            </button>
          </div>
          <div className="w-1/2 flex items-center justify-center gap-4">
             <img 
                src="https://ia601406.us.archive.org/22/items/screenshot-2025-10-22-133401/Screenshot%202025-10-22%20133401.png" 
                alt="Lumina Council Logo" 
                className="h-16 w-16 object-contain bg-white/20 rounded-full p-1 shadow-md" 
             />
             <div>
                <h1 className="text-xl md:text-2xl font-bold [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">AKHSS Gilgit Entrance Test</h1>
                <p className="text-xs md:text-sm text-white/90 [text-shadow:_1px_1px_2px_rgb(0_0_0_/_20%)]">Lumina Council Mock Series 2025</p>
             </div>
          </div>
           <div className="w-1/4 text-right">
             {/* This div is for spacing balance */}
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;