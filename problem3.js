function lottery(num) {
    return new Promise((resolve, reject) => {
      const randomNumber = Math.floor(Math.random() * 10) + 1;
  
      if (randomNumber === num) {
        resolve(`Selamat! Anda memenangkan undian lotre dengan nomor ${num}.`);
      } else {
        reject(`Maaf, nomor undian lotre Anda (${num}) tidak cocok. Nomor yang terpilih adalah ${randomNumber}.`);
      }
    });
  }

  lottery(5)
    .then((res) => console.log(res))
    .catch((err) => console.log(err))
    .finally(() => console.log("undian lotre telah berakhir…"));