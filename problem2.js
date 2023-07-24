
const clothes = {
    item: "clothes",
    price: 15000,
    time: 3000,
    };
    
    
    const pants = {
    item: "pants",
    price: 25000,
    time: 7000,
    };
    
    
    const hat = {
    item: "hat",
    price: 22000,
    time: 2000,
    };
    
    
    const shoes = {
    item: "shoes",
    price: 46000,
    time: 10000
    }
    function buyApparel(money, objItem, callback) {
        console.log(`saya membawa uang sebesar Rp. ${money}`);
        console.log(`saya ingin membeli ${objItem.item}`);
        console.log(`dengan harga Rp. ${objItem.price}`);
        console.log(`dan waktu yang dibutuhkan adalah ${objItem.time} detik`);
      
        if (money >= objItem.price) {
          console.log(`\nSelamat! Anda berhasil membeli ${objItem.item}.`);
          const sisaUang = money - objItem.price;
          callback(sisaUang);
        } else {
          console.log(`\nMaaf, uang Anda tidak cukup untuk membeli ${objItem.item}.`);
        }
      }
    
      buyApparel(150000, clothes, (sisaUang) => console.log(`sisa kembaliannya adalah Rp. ${sisaUang}`));
      buyApparel(135000, pants, (sisaUang) => console.log(`sisa kembaliannya adalah Rp. ${sisaUang}`));
      buyApparel(110000, hat, (sisaUang) => console.log(`sisa kembaliannya adalah Rp. ${sisaUang}`));
      buyApparel(88000, shoes, (sisaUang) => console.log(`sisa kembaliannya adalah Rp. ${sisaUang}`));