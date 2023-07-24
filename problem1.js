function jajanBoba(uang, callback) {
  // console.log("Membeli Boba dengan uang:", uang);
  console.time("JAJAN BOBA")
  console.timeEnd("JAJAN BOBA")
  const bobaPrice = 5000;
  if (uang >= bobaPrice) {
    const sisaUang = uang - bobaPrice;
    callback(sisaUang);
    // console.log("Selamat! Anda membeli Boba.");
    // console.log("Jajan boba dengan harga Rp", bobaPrice);
    console.log("Sisa uang", sisaUang);
  } else {
    console.log("Maaf, uang kamu tidak cukup untuk membeli Boba.");
    
  }
}
function jajanSeblak(uang) {
  console.time("JAJAN SEBLAK")
  console.timeEnd("JAJAN SEBLAK")
// console.log("Membeli Seblak dengan uang:", uang);
const seblakPrice = 8000;
if (uang >= seblakPrice) {
  console.log("beli seblak dengan harga.", seblakPrice);
} else {
  return sisaUang;
  // console.log("Maaf, uang kamu tidak cukup untuk membeli Seblak.");
}
}



jajanBoba(20000, jajanSeblak);
jajanBoba(10000, jajanSeblak);
