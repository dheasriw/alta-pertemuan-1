const bilangan1 = 10;
console.log('Type Data :', typeof bilangan1)
const bilangan2 = 3;
console.log('Type Data : ', typeof bilangan2)


// penjumlahan
const hasilJumlah = bilangan1 + bilangan2;
console.log('Hasil Jumlah :', hasilJumlah);

// pengurangan
const hasilKurang = bilangan1 - bilangan2;
console.log('Hasil Kurang :', hasilKurang);

// perkalian
const hasilKali = bilangan1 * bilangan2;
console.log('Hasil Kali :', hasilKali);

// pembagian
const hasilBagi = bilangan1 / bilangan2;
console.log('Hasil Bagi :', hasilBagi);

// sisa bagi (mod)
const sisaBagi = bilangan1 % bilangan2;
console.log('Sisa Bagi :', sisaBagi);


// funntion penjumlahan
function penjumlahan(param1, param2) {
    return param1 + param2;
}
const jumlah = penjumlahan(bilangan1, bilangan2);
console.log('Penjumlahan :', jumlah);

// funntion pengurangan
function pengurangan(param1, param2) {
    return param1 - param2;
}
const kurang = pengurangan(bilangan1, bilangan2);
console.log('Pengurangan :', kurang);

// funntion perkalian
function perkalian(param1, param2) {
    return param1 * param2;
}
const kali = perkalian(bilangan1, bilangan2);
console.log('Perkalian :', kali);

// function pembagian
function pembagian(param1, param2) {
    return param1 / param2;
}
const bagi = pembagian(bilangan1, bilangan2);
console.log('Pembagian :', bagi);

// function sisa bagi
function sisabagi(param1, param2) {
    return param1 % param2;
}
const mod = sisabagi(bilangan1, bilangan2);
console.log('Sisa Bagi:', mod);