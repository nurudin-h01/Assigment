let array_value = [
  {
    fruitId: 1,
    fruitName: "Apel",
    fruitType: "IMPORT",
    stock: 10,
  },
  {
    fruitId: 2,
    fruitName: "Kurma",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 3,
    fruitName: "apel",
    fruitType: "IMPORT",
    stock: 50,
  },
  {
    fruitId: 4,
    fruitName: "Manggis",
    fruitType: "LOCAL",
    stock: 100,
  },
  {
    fruitId: 5,
    fruitName: "Jeruk Bali",
    fruitType: "LOCAL",
    stock: 10,
  },
  {
    fruitId: 5,
    fruitName: "KURMA",
    fruitType: "IMPORT",
    stock: 20,
  },
  {
    fruitId: 5,
    fruitName: "Salak",
    fruitType: "LOCAL",
    stock: 150,
  },
];

// Soal 1
let buah = array_value.map(x=> x.fruitName.toLowerCase())
function remove_duplicates(arr) {
  let s = new Set(arr);
  let it = s.values();
  return Array.from(it);
}

console.log("Buah yang dimiliki ",remove_duplicates(buah))

// Soal 2
let keranjang = array_value.reduce((r, a) => { 
  r[a.fruitType] = [...r[a.fruitType] || [], a.fruitName.toLowerCase()];
  return r;
}, {});
console.log("keranjang yang dibutuhkan", Object.keys(keranjang).length)
for (const key in keranjang) {
  if (Object.hasOwnProperty.call(keranjang, key)) {
    keranjang[key] = remove_duplicates(keranjang[key]);
  }
}
console.log(keranjang)


// soal 3
let tipe = array_value.reduce((r, a) => { 

    r[a.fruitType] = [...r[a.fruitType] || [], a];
    return r;
  }, {});
for (const key in tipe) {
  if (Object.hasOwnProperty.call(tipe, key)) {
    let element = tipe[key];
    let result = element.reduce(function (acc, obj) { return acc + obj.stock; }, 0);
    console.log(key, result)
  }
}

