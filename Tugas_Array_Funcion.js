let produkToko = [
    { id: 1, nama: "Laptop", harga: 7000000, stok: 5 },
    { id: 2, nama: "Mouse", harga: 200000, stok: 10 },
    { id: 3, nama: "Keyboard", harga: 350000, stok: 7 }
];

function tambahProduk(nama, harga, stok) {
    let idBaru = produkToko.length + 1;

    produkToko.push({
        id: idBaru,
        nama: nama,
        harga: harga,
        stok: stok
    });
}

function hapusProduk(id) {
    let index = produkToko.findIndex(function(produk) {
        return produk.id === id;
    });

    if (index !== -1) {
        produkToko.splice(index, 1);
    }
}

function tampilkanProduk() {
    produkToko.forEach(function(produk) {
        console.log(
            "ID: " + produk.id +
            ", Nama: " + produk.nama +
            ", Harga: " + produk.harga +
            ", Stok: " + produk.stok
        );
    });
}

tampilkanProduk();

tambahProduk("Headset", 500000, 8);

console.log("Setelah tambah produk:");
tampilkanProduk();

hapusProduk(2);

console.log("Setelah hapus produk:");
tampilkanProduk();