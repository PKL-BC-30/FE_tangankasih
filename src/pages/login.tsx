import { Component, createSignal } from 'solid-js';
import './login.css';
import googleLogo from '../pages/pages-img/google-logo.png';
import facebookLogo from '../pages/pages-img/facebook-logo.png';
import appleLogo from '../pages/pages-img/apple-logo.png';

const Login: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log('Email:', email());
    console.log('Password:', password());
  };

  return (
    <div class="login-container">
      <div class="login-form">
        <div class="logo">
          <h1 class="brand-name">TanganKasih</h1>
        </div>
        <div class="title">
          <h1 class="greeting">Halo!</h1>
          <h2 class="welcome">Selamat Datang</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              value={email()}
              onInput={(e) => setEmail(e.currentTarget.value)}
              placeholder="Masukan email anda"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password()}
              onInput={(e) => setPassword(e.currentTarget.value)}
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <a href="#" class="forgot-password">Lupa Password?</a>
          </div>
          <button type="submit" class="btn-login">
            Masuk
          </button>
        </form>
        <div class="social-login">
          <h3>atau</h3>
          <div class="social-buttons">
            <button class="btn-google">
              <img src={googleLogo} alt="Google Logo" class="social-icon" />
            </button>
            <button class="btn-facebook">
              <img src={facebookLogo} alt="Facebook Logo" class="social-icon" />
            </button>
            <button class="btn-apple">
              <img src={appleLogo} alt="Apple Logo" class="social-icon" />
            </button>
          </div>
        </div>
        <div class="signup">
          <p>Belum punya akun? <a href="/register">Daftar</a></p>
        </div>
      </div>
      <div class="login-image"></div>
    </div>
    
  );
};

export default Login;
