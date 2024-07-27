import { Component, onMount } from 'solid-js';
import styles from './home.module.css';
import homeimg from '/public/pages-img/tentangkami-1.png';
import tentangkami1 from '/public/pages-img/tentangkami-1.png';
import tentangkami2 from '/public/pages-img/donasi-5.png';
import sponsor1 from '/public/pages-img/sponsor-1.png';
import sponsor2 from '/public/pages-img/sponsor-2.png';
import sponsor3 from '/public/pages-img/sponsor-3.png';
import sponsor4 from '/public/pages-img/sponsor-4.png';

const Home: Component = () => {
  onMount(() => {
    const tentangLink = document.querySelector('#tentang-link');
    if (tentangLink) {
      tentangLink.addEventListener('click', (e) => {
        e.preventDefault();
        const aboutUsSection = document.querySelector('#about-us');
        if (aboutUsSection) {
          aboutUsSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    }
  });

  return (
    <div class={styles.container}>
      <main class={styles.main}>
        <div class={styles.textImageWrapper}>
          <div class={styles.textSection}>
            <h1 class={styles.title}>Platform Donasi Digital Terbaik se-Banyumas Raya</h1>
            <p class={styles.paragraph}>Kami telah membantu banyak kelompok orang atau negara yang tertindas dan berhasil menyalurkan banyak manfaat untuk mereka</p>
            <div class={styles.buttonContainer}>
              <a href="/donasi" class={styles.btnTentang}>Donasi Sekarang</a>
              <a href="/blog" class={styles.btnSecondary}>
                Kasus Tren
                <span class={styles.arrowRight}></span>
              </a>
            </div>
          </div>
          <div class={styles.imageSection}>
            <img src={homeimg} alt="Description of image" class={styles.image} />
          </div>
        </div>

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

        <section class={styles.sponsorSection}>
          <h2 class={styles.subHeading}>Didukung Oleh :</h2>
          <div class={styles.sponsorContainer}>
            <div class={styles.sponsorSlide}>
              <img src={sponsor1} alt="Sponsor-1" class={styles.sponsorImage} />
              <img src={sponsor2} alt="Sponsor-2" class={styles.sponsorImage} />
              <img src={sponsor3} alt="Sponsor-3" class={styles.sponsorImage} />
              <img src={sponsor4} alt="Sponsor-4" class={styles.sponsorImage} />
              {/* Duplicate images for continuous sliding effect */}
              <img src={sponsor1} alt="Sponsor-1" class={styles.sponsorImage} />
              <img src={sponsor2} alt="Sponsor-2" class={styles.sponsorImage} />
              <img src={sponsor3} alt="Sponsor-3" class={styles.sponsorImage} />
              <img src={sponsor4} alt="Sponsor-4" class={styles.sponsorImage} />
            </div>
          </div>
        </section>

        <section id="about-us" class={styles.aboutUs}>
          <h1 class={styles.mainHeading}>TanganKasih</h1>
          
          <div class={styles.textImageContainer}>
            <div class={styles.textContainer}>
              <h2 class={styles.subHeading}>Sebuah Cerita</h2>
              <p class={styles.paragraph}>
                Tangankasih adalah jembatan yang menghubungkan hati yang ingin
                membantu dengan mereka yang membutuhkan uluran tangan. Kami
                memfasilitasi para donatur untuk menyalurkan bantuan mereka secara
                langsung dan tepat sasaran. Dengan platform kami, setiap bantuan dapat
                diterima oleh mereka yang benar-benar membutuhkan, memastikan bahwa
                setiap kontribusi membawa perubahan positif.
              </p>
            </div>
            <div class={styles.imageContainer}>
              <img src={tentangkami1} alt="Smiling people" class={styles.image} />
            </div>
          </div>

          <div class={`${styles.textImageContainer} ${styles.reverse}`}>
            <div class={styles.textContainer}>
              <h2 class={styles.subHeading}>Misi TanganKasih</h2>
              <p class={styles.paragraph}>
                Kami di Tangankasih sangat mengutamakan transparansi. Setiap donasi yang
                masuk dan keluar dapat dilacak dengan mudah, memberikan kepercayaan
                dan rasa aman kepada para donatur. Kami menyediakan laporan lengkap
                tentang penggunaan dana, sehingga setiap orang dapat melihat bagaimana
                sumbangan mereka memberikan dampak nyata dan positif bagi penerima
                manfaat.
              </p>
            </div>
            <div class={styles.imageContainer}>
              <img src={tentangkami2} alt="Transparent" class={styles.image} />
            </div>
          </div>

          <div class={styles.textImageContainer}>
            <div class={styles.textContainer}>
              <h2 class={styles.subHeading}>Filosofi TanganKasih</h2>
              <p class={styles.paragraph}>
                Tangankasih berkomitmen untuk meningkatkan kesadaran masyarakat
                mengenai kondisi mereka yang kurang beruntung. Melalui berbagai kampanye
                dan cerita inspiratif, kami berharap dapat menggerakkan hati lebih banyak
                orang untuk ikut serta dalam gerakan ini. Kami percaya bahwa dengan
                menyebarkan cerita kebaikan, kita dapat menginspirasi lebih banyak orang
                untuk saling membantu dan memperkuat rasa kepedulian sosial.
              </p>
            </div>
            <div class={styles.imageContainer}>
              <img src={tentangkami1} alt="Inspiration" class={styles.image} />
            </div>
          </div>
        </section>

        <footer class={styles.footerHome}>
          <div class={styles.container}>
            <p>&copy; 2023 Tangan Kasih. All rights reserved.</p>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Home;
