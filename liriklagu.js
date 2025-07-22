const chalk = require('chalk');

// Warna-warna untuk pewarnaan bergantian
const colors = [
  chalk.redBright,
  chalk.greenBright,
  chalk.yellowBright,
  chalk.blueBright,
  chalk.magentaBright,
  chalk.cyanBright,
];

// Fungsi delay
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

// Fungsi animasi dengan pewarnaan khusus
async function animateText(text, speed = 100, hasRepeatingLetters = false) {
  if (hasRepeatingLetters) {
    // Untuk baris dengan huruf berulang seperti "A A A A" atau "U U U U"
    // Per karakter seperti Python
    for (let i = 0; i < text.length; i++) {
      const char = text[i];
      const color = colors[i % colors.length];
      process.stdout.write(color(char));
      await sleep(speed); // Delay per karakter
    }
  } else {
    // Untuk kalimat normal: per karakter juga, bukan per kata
    // Tapi dengan pewarnaan per kata
    const words = text.split(' ');
    let charIndex = 0;
    
    for (let i = 0; i < words.length; i++) {
      const word = words[i];
      const color = colors[i % colors.length];
      
      // Tulis setiap karakter dari kata dengan warna yang sama
      for (let j = 0; j < word.length; j++) {
        process.stdout.write(color(word[j]));
        await sleep(speed); // Delay per karakter
      }
      
      // Tambahkan spasi jika bukan kata terakhir
      if (i < words.length - 1) {
        process.stdout.write(' ');
        await sleep(speed); // Delay untuk spasi juga
      }
    }
  }
  process.stdout.write('\n');
}

// Fungsi utama mutar lirik
async function lagu() {
  const lyrics = [
    { text: "\nA A A A A A A A A A Aku akan beritahu pada dunia", delay: 300, speed: 80 },
    { text: "kau begitu indah", delay: 200, speed: 80 },      
    { text: "yang pernah ku punya", delay: 200, speed: 80 },  
    { text: "A A A A Aku akan selalu menemani dirimu", delay: 200, speed: 75 }, 
    { text: "U U U U U U Ucap Terima kasih untuk dirimu", delay: 100, speed: 75 }, 
    { text: "kita membuat memori sampai ahkhir hayat nanti", delay: 200, speed: 75 }, 
    { text: "cinta ku tak pernah mati jadi kau tak perlu worry", delay: 200, speed: 65 }, 
    { text: "genggam tanganku tak perlu ragu", delay: 200, speed: 80 }, 
    { text: "habiskan waktu hanya bersama dirimu", delay: 200, speed: 80 }, 
  ];

  for (const line of lyrics) {
    await sleep(line.delay);
    await animateText(line.text, line.speed, line.hasRepeatingLetters);
  }
}

lagu();


