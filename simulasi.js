function analisis() {
  let panjang = document.getElementById("passwordLength").value;
  let enkripsi = document.getElementById("enkripsi").value;
  let wps = document.getElementById("wps").value;
  let hasil = "";

  if (panjang < 8) {
    hasil = "Risiko Tinggi: Password terlalu pendek.";
  } 
  else if (panjang >= 8 && enkripsi === "wpa2") {
    hasil = "Risiko Sedang: Gunakan WPA3 untuk keamanan lebih baik.";
  } 
  else if (panjang >= 12 && enkripsi === "wpa3" && wps === "off") {
    hasil = "Risiko Rendah: Konfigurasi keamanan sudah baik.";
  } 
  else {
    hasil = "Risiko Sedang: Perlu peningkatan keamanan.";
  }

  document.getElementById("hasil").innerText = hasil;
}
