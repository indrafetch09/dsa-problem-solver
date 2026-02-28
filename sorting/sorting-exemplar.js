const MIN_EXEMPLAR = 21218001;
const MAX_EXEMPLAR = 21218225;
const NUM_RACKS = 10;

function distributeExemplars(minNumber, maxNumber, numRacks) {
  if (minNumber >= maxNumber || numRacks <= 0) {
    throw new Error('Input salah');
  }

  const total = (maxNumber - minNumber) + 1;
  const kapasitasPerRak = Math.floor(total / numRacks); // 22
  const sisaExemplar = total % numRacks; // 5

  const results = [];

  for (let rak = 1; rak <= numRacks; rak++) {
    const kapasitas = rak <= sisaExemplar ? kapasitasPerRak + 1 : kapasitasPerRak;
    const nomorAwal = minNumber + (rak - 1) * kapasitasPerRak;
    const nomorAkhir = nomorAwal + kapasitasPerRak - 1;

    results.push({ nomorAwal, nomorAkhir });
    console.log(`Rak ${rak}: ${nomorAwal} - ${nomorAkhir} (${kapasitas}) items`)
  }

  return results;
}

const results = distributeExemplars(MIN_EXEMPLAR, MAX_EXEMPLAR, NUM_RACKS);
console.log(`\nTotal Exemplar: ${(MAX_EXEMPLAR - MIN_EXEMPLAR) + 1}`);

