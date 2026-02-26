const minimalNumber = 21218001;
const maximalNumber = 21218225;
const jumlahRak = 10;

const total = (maximalNumber - minimalNumber) + 1;
const sisaExemplar = total / jumlahRak;

const kapasitasPerRak = Math.ceil(sisaExemplar);

for (let rak = 1; rak <= jumlahRak; rak++) {
  const nomorAwal = minimalNumber + (rak - 1) * kapasitasPerRak;
  const nomorAkhir = nomorAwal + kapasitasPerRak - 1;

  console.log(`Hasil kapasitas per rak: ${kapasitasPerRak}, \nhasil nomor exemplar per rak: ${nomorAwal} - ${nomorAkhir}`)
}

console.log(`Total exemplar adalah ${total}`)
console.log(`Kapasitas per rak adalah ${kapasitasPerRak}`);
console.log(`Jumlah exemplar tersisa adalah ${sisaExemplar}`);
