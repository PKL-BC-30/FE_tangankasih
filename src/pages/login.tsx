import { Component, createSignal } from 'solid-js';
import './login.css';

const Login: Component = () => {
  const [email, setEmail] = createSignal('');
  const [password, setPassword] = createSignal('');

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div class="login-container">
      <div class="login-form">
        <div class="logo">
          <h1>TanganKasih</h1>
        </div>
        <div class="title">
          <h1>Halo!</h1>
          <h2>Selamat Datang</h2>
        </div>
        <form onSubmit={handleSubmit}>
          <div class="form-group">
            <label for="email">Email</label>
            <input
              type="email"
              id="email"
              value={email()}
              onInput={(e) => setEmail(e.target.value)}
              placeholder="Masukan email anda"
            />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              id="password"
              value={password()}
              onInput={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
          </div>
          <div class="form-group">
            <a href="#">Lupa Password?</a>
          </div>
          <button type="submit" class="btn-login">
            Masuk
          </button>
        </form>
        <div class="social-login">
          <h3>atau</h3>
          <div class="social-buttons">
            <button class="btn-google">
              <i class="fab fa-google"></i>
            </button>
            <button class="btn-facebook">
              <i class="fab fa-facebook-f"></i>
            </button>
            <button class="btn-apple">
              <i class="fab fa-apple"></i>
            </button>
          </div>
        </div>
        <div class="signup">
          <p>Belum punya akun? <a href="#">Daftar</a></p>
        </div>
      </div>
      <div class="login-image"></div>
    </div>
  );
};

export default Login;