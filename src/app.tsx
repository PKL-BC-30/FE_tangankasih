import { Component } from 'solid-js';
import { Link, useRoutes, useLocation } from '@solidjs/router';
import Donate from './pages/donate';
import agGrid from '../src/ag - Grid/agGrid'; // Import halaman agGrid
import { routes } from './routes';

const App: Component = () => {
  const location = useLocation();
  const Route = useRoutes(routes);

  // Menentukan apakah navbar harus ditampilkan berdasarkan lokasi
  const showNavbar = location.pathname !== '/grid';

  return (
    <>
      {showNavbar && (
        <nav class="bg-[#57211C] text-white py-4">
          <div class="container mx-auto flex justify-between items-center">
            <Link href="/" class="flex items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.354a4 4 0 110 5.292M15 21H9a2 2 0 01-2-2V10.337a2 2 0 01.527-1.893l1.414-1.414m0 0a1.75 1.75 0 10-2.473-2.473l1.414-1.414A1.75 1.75 0 005.967 6.45a1.75 1.75 0 00-2.474 2.473l-1.414 1.414m0 0a2 2 0 002.828 2.828L11.499 12l3.501 3.501a2 2 0 002.828 2.828V21a2 2 0 01-2 2h-6a2 2 0 01-2-2z"
                />
              </svg>
              <span class="ml-2 text-2xl font-bold">TanganKasih</span>
            </Link>
            <div class="flex items-center space-x-4">
              <nav class="flex space-x-4">
                <Link href="/" class="hover:underline">
                  Home
                </Link>
                <Link href="/tentang-kami" class="hover:underline">
                  Tentang Kami
                </Link>
                <Link href="/donasi" class="hover:underline">
                  Penggalangan Dana
                </Link>
                <Link href="/blog" class="hover:underline">
                  Fundraise Blog
                </Link>
              </nav>
              <Link
                href="/login"
                class="bg-orange-500 text-white px-3 py-1 rounded-md hover:bg-orange-600 ml-auto"
              >
                Login
              </Link>
            </div>
          </div>
        </nav>
      )}

      <main>
        <Route />
      </main>
    </>
  );
};

export default App;
