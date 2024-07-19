import { Component } from "solid-js";
import './tentangkami.css'
import tentangkami1 from '../pages/pages-img/tentangkami-1.png';
import tentangkami2 from '../pages/pages-img/donasi-5.png';

const TanganKasih = () => {
  return (
    <div class="container-tentangkami">
      <div class="about-us">
        <h1 class="main-heading">Tentang Kami</h1>
        
        <div class="section">
          <div class="text-image-container">
            <div class="text-container">
              <h2 class="sub-heading">Sebuah Cerita</h2>
              <p class="paragraph">
                Tangankasih adalah jembatan yang menghubungkan hati yang ingin
                membantu dengan mereka yang membutuhkan uluran tangan. Kami
                memfasilitasi para donatur untuk menyalurkan bantuan mereka secara
                langsung dan tepat sasaran. Dengan platform kami, setiap bantuan dapat
                diterima oleh mereka yang benar-benar membutuhkan, memastikan bahwa
                setiap kontribusi membawa perubahan positif.
              </p>
            </div>
            <div class="image-container">
              <img
                src={tentangkami1}
                alt="Smiling people"
                class="image"
              />
            </div>
          </div>
        </div>

        <div class="section">
          <div class="text-image-container reverse">
            <div class="text-container">
              <h2 class="sub-heading">Misi Kami</h2>
              <p class="paragraph">
                Kami di Tangankasih sangat mengutamakan transparansi. Setiap donasi yang
                masuk dan keluar dapat dilacak dengan mudah, memberikan kepercayaan
                dan rasa aman kepada para donatur. Kami menyediakan laporan lengkap
                tentang penggunaan dana, sehingga setiap orang dapat melihat bagaimana
                sumbangan mereka memberikan dampak nyata dan positif bagi penerima
                manfaat.
              </p>
            </div>
            <div class="image-container">
              <img
                src={tentangkami2}
                alt="Transparent"
                class="image"
              />
            </div>
          </div>
        </div>

        <div class="section">
          <div class="text-image-container">
            <div class="text-container">
              <h2 class="sub-heading">Filosofi Kami</h2>
              <p class="paragraph">
                Tangankasih berkomitmen untuk meningkatkan kesadaran masyarakat
                mengenai kondisi mereka yang kurang beruntung. Melalui berbagai kampanye
                dan cerita inspiratif, kami berharap dapat menggerakkan hati lebih banyak
                orang untuk ikut serta dalam gerakan ini. Kami percaya bahwa dengan
                menyebarkan cerita kebaikan, kita dapat menginspirasi lebih banyak orang
                untuk saling membantu dan memperkuat rasa kepedulian sosial.
              </p>
            </div>
            <div class="image-container">
              <img
                src={tentangkami1}
                alt="Inspiration"
                class="image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TanganKasih;
