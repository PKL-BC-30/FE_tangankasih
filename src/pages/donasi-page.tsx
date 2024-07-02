import { For, Show, onMount, createEffect } from 'solid-js';
import { createSignal } from 'solid-js';
import './donasi-page.css';
import donasi1 from '../pages/pages-img/donasi-1.png';

function App() {
    const [donationGoal, setDonationGoal] = createSignal('5,000/2,212,000 Tsh');
    const [donationPercent, setDonationPercent] = createSignal(0);
    const [showProgress, setShowProgress] = createSignal(false);

    onMount(() => {
        // Simulasikan pengisian donasi
        const interval = setInterval(() => {
            setDonationPercent((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setShowProgress(true);
                }
                return prev + 1;
            });
        }, 100);
    });

    return (
        <div class="donate-container">
            <div class="image-container">
                <img src={donasi1} alt="Girl in Classroom" />
            </div>
            <div class="content">
                <div class="donation-goal">
                    Donation: <span class="donation-amount">{donationGoal()}</span>
                </div>
                <div class="separator"></div>
                <div class="title">Our Goal</div>
                <p class="paragraph">
                    Malaika is a bright, determined girl with big dreams. She lives in a small village in Tanzania
                    with her family, but despite her passion for learning, she has always struggled to access
                    digital devices and technology. Growing up in poverty, she had limited access to resources
                    and opportunities, and it seemed that her dreams of pursuing a career in the digital field
                    were out of reach.
                </p>
                <p class="paragraph">
                    However, one day Malaika heard about a donation website called "Our Voices" that was
                    working to provide digital devices to girls in Tanzania who lacked access to technology. She
                    knew that this could be the opportunity she had been waiting for, and with the help of her
                    community, she reached out to the organization for support.
                </p>
                <p class="paragraph">
                    Thanks to the generosity of donors, Malaika was able to receive a laptop and access to
                    digital skills training. With these tools in hand, she worked hard to develop her skills and
                    pursue her passion for technology. She learned to code, design websites, and even began
                    to develop her own digital projects.
                </p>
                <p class="paragraph">
                    Through "Our Voices", Malaika was able to overcome the barriers that had held her back
                    and unlock new opportunities for her future success. She went on to pursue a degree in
                    computer science and became a leader in her field, inspiring other girls in her community
                    to follow in her footsteps.
                </p>
                <div class="separator"></div>
                <div class="details-title">Details about the cause</div>
                <p class="paragraph">
                    Thanks to the support of organizations like "Our Voices", girls like Malaika can overcome
                    the obstacles they face and pursue their dreams. With access to digital devices and skills
                    training, they can become the next generation of leaders, innovators, and changemakers,
                    creating a brighter future for themselves and their communities.
                </p>
                <p class="paragraph">
                    With the donation from the people and you we can both help Malaika achieve her goals to
                    become a Computer Engineer.
                </p>
                <p class="paragraph">
                    By donating to our cause, you can be a part of something truly transformative. Join us in
                    empowering girls in Tanzania.
                </p>
                <Show when={showProgress()}>
                    <div class="progress-bar">
                        <div class="progress-bar-fill" style={{ width: `${donationPercent()}%` }}>
                            <span class="progress-bar-text">{donationPercent()}%</span>
                        </div>
                    </div>
                </Show>
                <button class="donate-button">DONATE</button>
            </div>
        </div>
    );
}

export default App;
