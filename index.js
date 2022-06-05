const names = ["Halo", "Angel", "Nyoman", "Ketut", "Aisyah"];

// TODO: Fungsi utama
// Menerima 2 parameter: list nama dan callback sort
// Mengembalikan array of string dengan format:
// "1. Nama"
// "2. Nama"
// ...
const sorter = (arrayNama, cbSorting) => {
  let arrayHasil = [];
  arrayHasil = cbSorting(arrayNama);

  for (i = 0; i < arrayHasil.length; i++) {
    arrayHasil[i] = i + 1 + ". " + arrayHasil[i];
  }

  return arrayHasil;
};

// TODO: Fungsi untuk mengurutkan array of string secara ascending
// mengembalikan array yang sudah diurutkan
const sortAscending = (arrayNamaCb) => {
  arrayNamaCb.sort();
  return arrayNamaCb;
};

// TODO: Fungsi untuk mengurutkan array of string secara descending
// mengembalikan array yang sudah diurutkan
const sortDescending = (arrayNamaCb) => {
  arrayNamaCb.sort().reverse();
  return arrayNamaCb;
};

// ! JANGAN DIMODIFIKASI
(function main() {
  console.log(sorter?.(names, sortAscending)?.join("\n"));
  console.log(sorter?.(names, sortDescending)?.join("\n"));
})();

module.exports = {
  sorter,
  sortAscending,
  sortDescending,
  names,
};
