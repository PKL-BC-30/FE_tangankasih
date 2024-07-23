import { Component, For, createSignal } from 'solid-js';
import './donate.css';

const Donate: Component = () => {
  const [showPopup, setShowPopup] = createSignal(false);
  const [name, setName] = createSignal("");
  const [email, setEmail] = createSignal("");
  const [amount, setAmount] = createSignal("");
  const [norekening, setNorekening] = createSignal("");
  const [paymentMethod, setPaymentMethod] = createSignal("");
  const [bank, setBank] = createSignal("");

  const paymentMethods = [
    { id: '', name: 'Pilih Metode Pembayaran' },
    { id: 'bankTransfer', name: 'Transfer Bank' },
    { id: 'creditCard', name: 'Kartu Kredit' },
    { id: 'paypal', name: 'PayPal' },
    { id: 'gopay', name: 'GoPay' },
    { id: 'ovo', name: 'OVO' },
    { id: 'dana', name: 'DANA' },
  ];

  const banks = [
    { id: '', name: 'Pilih Bank' },
    { id: 'bca', name: 'BCA' },
    { id: 'bni', name: 'BNI' },
    { id: 'mandiri', name: 'Mandiri' },
  ];

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds

    // Reset form fields
    setName("");
    setEmail("");
    setAmount("");
    setNorekening("");
    setPaymentMethod("");
    setBank("");
  };

  return (
    <div class="Container-pembayaran">
      <h1 class="h1-pembayaran">Donasi untuk Membantu Kami</h1>
      <p class="p-pembayaran">Terima kasih atas kepedulian Anda untuk membantu kami dalam menjalankan misi kami. Berikut adalah beberapa opsi pembayaran donasi yang tersedia:</p>

      <form onSubmit={handleSubmit} class="form-pembayaran">
        <h2 class="h2-pembayaran">Informasi Donasi</h2>
        <label class="label-pembayaran">Nama:</label>
        <input type="text" name="name" value={name()} onInput={(e) => setName(e.currentTarget.value)} required class="input-pembayaran" />
        <br />
        <label class="label-pembayaran">Email:</label>
        <input type="email" name="email" value={email()} onInput={(e) => setEmail(e.currentTarget.value)} required class="input-pembayaran" />
        <br />
        <label class="label-pembayaran">Jumlah Donasi:</label>
        <input type="number" name="amount" value={amount()} onInput={(e) => setAmount(e.currentTarget.value)} required class="input-pembayaran" />
        <br />
        <label class="label-pembayaran">Nomor Rekening:</label>
        <input type="text" name="norekening" value={norekening()} onInput={(e) => setNorekening(e.currentTarget.value)} required class="input-pembayaran" />
        <br />

        <h2 class="h2-pembayaran">Metode Pembayaran</h2>
        <div class="payment-methods-pembayaran">
          <label for="paymentMethod" class="label-pembayaran">Pilih Metode Pembayaran:</label>
          <select name="paymentMethod" id="paymentMethod" value={paymentMethod()} onChange={(e) => setPaymentMethod(e.currentTarget.value)} class="select-pembayaran">
            <For each={paymentMethods}>
              {(paymentMethod) => (
                <option value={paymentMethod.id}>{paymentMethod.name}</option>
              )}
            </For>
          </select>
        </div>

        {paymentMethod() === 'bankTransfer' && (
          <div class="bank-transfer-pembayaran">
            <h3 class="h3-pembayaran">Pilih Bank:</h3>
            <div class="bank-options-pembayaran">
              <label for="bank" class="label-pembayaran">Pilih Bank:</label>
              <select name="bank" id="bank" value={bank()} onChange={(e) => setBank(e.currentTarget.value)} class="select-pembayaran">
                <For each={banks}>
                  {(bank) => (
                    <option value={bank.id}>{bank.name}</option>
                  )}
                </For>
              </select>
            </div>
          </div>
        )}

        <button type="submit" class="button-pembayaran">Donasi Sekarang</button>
      </form>

      {showPopup() && (
        <div class="popup-pembayaran">
          <div class="popup-content-pembayaran">
            <div class="checkmark-circle-pembayaran">
              <div class="checkmark-pembayaran"></div>
            </div>
            <h2 class="h2-popup-pembayaran">Donasi Berhasil!</h2>
          </div>
        </div>
      )}
    </div>
  );
};

export default Donate;
