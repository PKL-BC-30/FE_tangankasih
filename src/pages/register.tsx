import { Component, createSignal } from "solid-js";
import { useNavigate } from "@solidjs/router";
import './register.css';

const RegisterForm: Component = () => {
  const [email, setEmail] = createSignal("");
  const [fullName, setFullName] = createSignal("");
  const [password, setPassword] = createSignal("");
  const [day, setDay] = createSignal("");
  const [month, setMonth] = createSignal("");
  const [year, setYear] = createSignal("");
  const [emailError, setEmailError] = createSignal("");
  const [passwordError, setPasswordError] = createSignal("");
  const [confirmError, setConfirmError] = createSignal("");
  const [showPopup, setShowPopup] = createSignal(false);

  const navigate = useNavigate();

  const handleRegister = (e: Event) => {
    e.preventDefault();

    let valid = true;
    
    // Email validation
    if (!/\S+@\S+\.\S+/.test(email())) {
      setEmailError("Email tidak valid");
      valid = false;
    } else {
      setEmailError("");
    }

    // Password validation
    if (password().length < 6) {
      setPasswordError("Password harus terdiri dari minimal 6 karakter");
      valid = false;
    } else {
      setPasswordError("");
    }

    if (valid) {
      const userData = {
        email: email(),
        fullName: fullName(),
        password: password(),
        dateOfBirth: `${day()}-${month()}-${year()}`,
      };

      // Retrieve existing users from localStorage
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      
      // Add new user to the list
      const updatedUsers = [...existingUsers, userData];
      
      // Save updated list back to localStorage
      localStorage.setItem('users', JSON.stringify(updatedUsers));

      console.log(userData);

      // Show popup
      setShowPopup(true);
    }
  };

  const closePopup = () => {
    setShowPopup(false);
    navigate('/login');
  };

  const generateDays = () => {
    return Array.from({ length: 31 }, (_, i) => i + 1);
  };

  const generateMonths = () => {
    return Array.from({ length: 12 }, (_, i) => i + 1);
  };

  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const startYear = 1950;
    return Array.from({ length: currentYear - startYear + 1 }, (_, i) => startYear + i);
  };

  return (
    <div class="register-page">
      <div class="image-section-2"></div>
      <div class="form-section">
        <h1 class="logo">TanganKasih</h1>
        <h2 class="title">Register</h2>
        <form onSubmit={handleRegister} class="register-form">
          <label>Email</label>
          <input type="email" value={email()} onInput={(e) => setEmail(e.currentTarget.value)} placeholder="Masukan email anda" />
          {emailError() && <p class="error">{emailError()}</p>}
          
          <label>Nama lengkap</label>
          <input type="text" value={fullName()} onInput={(e) => setFullName(e.currentTarget.value)} placeholder="Nama lengkap" />
          
          <label>Password</label>
          <input type="password" value={password()} onInput={(e) => setPassword(e.currentTarget.value)} placeholder="Password" />
          {passwordError() && <p class="error">{passwordError()}</p>}
          
          <label>Date of birth</label>
          <div class="dob-container">
            <select value={day()} onChange={(e) => setDay(e.currentTarget.value)}>
              <option value="">Hari</option>
              {generateDays().map((d) => (
                <option value={d}>{d}</option>
              ))}
            </select>
            <select value={month()} onChange={(e) => setMonth(e.currentTarget.value)}>
              <option value="">Bulan</option>
              {generateMonths().map((m) => (
                <option value={m}>{m}</option>
              ))}
            </select>
            <select value={year()} onChange={(e) => setYear(e.currentTarget.value)}>
              <option value="">Tahun</option>
              {generateYears().map((y) => (
                <option value={y}>{y}</option>
              ))}
            </select>
          </div>

          <button class="register-button">Daftar</button>
          <p class="login-link">Sudah punya akun? <a href="/login">Masuk</a></p>
        </form>
      </div>
      {showPopup() && (
        <div class="popup">
          <div class="popup-content">
            <h2>Registrasi Berhasil!</h2>
            <p>Anda telah berhasil mendaftar. Silakan lanjut ke halaman login.</p>
            <button onClick={closePopup}>Oke</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default RegisterForm;
