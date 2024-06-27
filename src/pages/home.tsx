import type { Component } from 'solid-js';

import styles from './home.module.css';

const Home: Component = () => {
  return (
    <div class={styles.container}>
      <main class={styles.main}>
        <div class={styles.maxWidth}>
          <h1 class={styles.title}>Platform Donasi Digital Terbaik se-Banyumas Raya</h1>
          <p class={styles.paragraph}>Kami telah membantu banyak kelompok orang atau negara yang tertindas dan berhasil menyalurkan banyak manfaat untuk mereka</p>
          <a href="#" class={styles.button}>Lihat Disini</a>
        </div>
      </main>

      <section class={styles.section}>
        <div class={styles.flexContainer}>
          <div class={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg" class={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
            </svg>
            <h2 class={styles.heading}>Kelompok Terdonasi</h2>
            <h3 class={styles.count}>102.000</h3>
          </div>
          <div class={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg" class={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13.059m0-13.059l-5.471 4.024M15 21H9a2 2 0 01-2-2V8a2 2 0 012-2h6a2 2 0 012 2z" />
            </svg>
            <h2 class={styles.heading}>Orang Terdonasi</h2>
            <h3 class={styles.count}>1.000.000</h3>
          </div>
          <div class={styles.card}>
            <svg xmlns="http://www.w3.org/2000/svg" class={styles.icon} fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 8c-1.657 0-3-4.03-3-7.5s1.343-7.5 3-7.5 3 4.03 3 7.5-1.343 7.5-3 7.5z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 12h.01" />
            </svg>
            <h2 class={styles.heading}>Donasi Terkumpul</h2>
            <h3 class={styles.count}>1.000.000.000.000</h3>
          </div>
        </div>
      </section>

      <footer class={styles.footer}>
        <div class={styles.container}>
          <p>&copy; 2023 Tangan Kasih. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;