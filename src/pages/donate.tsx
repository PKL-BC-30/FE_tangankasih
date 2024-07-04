import { Component, For } from 'solid-js';
import './donate.css';

const Donate: Component = () => {
  const paymentMethods = [
    { id: 'bankTransfer', name: 'Transfer Bank' },
    { id: 'creditCard', name: 'Kartu Kredit' },
    { id: 'paypal', name: 'PayPal' },
    { id: 'gopay', name: 'GoPay' },
    { id: 'ovo', name: 'OVO' },
    { id: 'dana', name: 'DANA' },
  ];

  const banks = [
    { id: 'bca', name: 'BCA' },
    { id: 'bni', name: 'BNI' },
    { id: 'andiri', name: 'Mandiri' },
  ];

  return (
    <div class="Container">
      <h1>Donasi untuk Membantu Kami</h1>
      <p>Terima kasih atas kepedulian Anda untuk membantu kami dalam menjalankan misi kami. Berikut adalah beberapa opsi pembayaran donasi yang tersedia:</p>

      <form>
        <h2>Informasi Donasi</h2>
        <label>Nama:</label>
        <input type="text" name="name" required />
        <br />
        <label>Email:</label>
        <input type="email" name="email" required />
        <br />
        <label>Jumlah Donasi:</label>
        <input type="number" name="amount" required />
        <br />

        <h2>Metode Pembayaran</h2>
        <div class="payment-methods">
          <For each={paymentMethods}>
            {(paymentMethod) => (
              <div>
                <input
                  type="radio"
                  name="paymentMethod"
                  value={paymentMethod.id}
                  id={paymentMethod.id}
                />
                <label for={paymentMethod.id}>{paymentMethod.name}</label>
              </div>
            )}
          </For>
        </div>

        <div class="bank-transfer">
          <h3>Pilih Bank:</h3>
          <div class="bank-options">
            <For each={banks}>
              {(bank) => (
                <div>
                  <input
                    type="radio"
                    name="bank"
                    value={bank.id}
                    id={bank.id}
                  />
                  <label for={bank.id}>{bank.name}</label>
                </div>
              )}
            </For>
          </div>
        </div>

        <button type="submit">Donasi Sekarang</button>
      </form>
    </div>
  );
};

export default Donate;