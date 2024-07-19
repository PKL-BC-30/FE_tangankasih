import { Component } from 'solid-js';
import { Link } from '@solidjs/router';
import './donasi.css';
import donasi1 from '../pages/pages-img/donasi-1.png';
import donasi2 from '../pages/pages-img/donasi-2.png';
import donasi3 from '../pages/pages-img/donasi-3.png';
import donasi4 from '../pages/pages-img/donasi-4.png';
import donasi5 from '../pages/pages-img/donasi-5.png';
import donasi6 from '../pages/pages-img/donasi-6.png';

const App: Component = () => {
  return (
    <div class="app">
      <main>
        <section class="hero">
          <div class="container">
            <div class="hero-content">
              <h2>Donasi</h2>
              <h1>Kasus-kasus</h1>
            </div>
          </div>
        </section>
        <section class="causes">
          <div class="container">
            <div class="causes-grid">
              <div class="cause-card">
                <img src={donasi1} alt="Girl in Classroom" />
                <div class="cause-content">
                  <h3>Big charity: Tablet for Kirimo sec school</h3>
                  <p>Donation: 5,000/1,200,000</p>
                  <Link href="/donasi-page" class="btn-donate">Donasi</Link>
                </div>
              </div>
              <div class="cause-card">
                <img src={donasi2} alt="Girl in Yellow Shirt" />
                <div class="cause-content">
                  <h3>Anna Mbelo. Laptop charity</h3>
                  <p>Donation : 5,000/102,000</p>
                  <Link href="/donasi-page" class="btn-donate">Donasi</Link>
                </div>
              </div>
              <div class="cause-card">
                <img src={donasi3} alt="Girl in Red Dress" />
                <div class="cause-content">
                  <h3>Helping the girls During the Holidays</h3>
                  <p>Donation: 5,000/2012,000</p>
                  <Link href="/donasi-page" class="btn-donate">Donasi</Link>
                </div>
              </div>
              <div class="cause-card">
                <img src={donasi4} alt="Girl in Classroom" />
                <div class="cause-content">
                  <h3>Providing access to digital devices at Mkurumbenge School</h3>
                  <p>Donation: 7,000/882,000</p>
                  <Link href="/donasi-page" class="btn-donate">Donasi</Link>
                </div>
              </div>
              <div class="cause-card">
                <img src={donasi5} alt="Girls with Clapping Hands" />
                <div class="cause-content">
                  <h3>Welu Mwilo a girl from Iringa</h3>
                  <p>Donation: 5,000/712,000</p>
                  <Link href="/donasi-page" class="btn-donate">Donasi</Link>
                </div>
              </div>
              <div class="cause-card">
                <img src={donasi6} alt="Person Holding Donation Box" />
                <div class="cause-content">
                  <h3>Big charity: donate laptops to school for poor children</h3>
                  <p>Donation: 5,000/9912,000</p>
                  <Link href="/donasi-page" class="btn-donate">Donasi</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer>
        <div class="container">
          <p>Copyright &copy; 2023 Tangan Kasih. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;
