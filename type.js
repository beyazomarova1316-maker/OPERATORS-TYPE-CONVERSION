let mehsulAdi = "Telefon";
let mehsulQiymeti = 80;
let endirimFaizi = 20;
let stokdaVarmi = true;

let endirimliQiymet = mehsulQiymeti - (mehsulQiymeti * endirimFaizi / 100);

console.log(`Məhsul: ${mehsulAdi}, Endirimli Qiymət: ${endirimliQiymet} AZN`);


console.log(mehsulQiymeti > 50 && stokdaVarmi);