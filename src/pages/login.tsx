import { Component, createSignal } from 'solid-js';
import { useNavigate } from '@solidjs/router';
import './login.css';
import googleLogo from '/public/pages-img/google-logo.png';
import facebookLogo from '/public/pages-img/facebook-logo.png';
import appleLogo from '/public/pages-img/apple-logo.png';
import loginhand from '/public/pages-img/login-hand.png';

const Login: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');
  const [error, setError] = createSignal('');
  const navigate = useNavigate();

  const handleSubmit = (e: Event) => {
    e.preventDefault();

    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const user = existingUsers.find((user) => user.email === email() && user.password === password());

    if (user) {
      setError('');
      navigate('/'); // Redirect to home page
    } else {
      setError('Email atau password salah');
    }
  };

  return (
    <div class="login-page">
      <div class="form-section">
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
          {error() && <div class="error">{error()}</div>}
          <div class="form-group">
            <a href="#" class="forgot-password">Lupa Password?</a>
          </div>
          <button class="btn-login-form" >
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
      <div class="image-section">
        <img src={loginhand} alt="hand" />
      </div>
    </div>
  );
};

export default Login;
