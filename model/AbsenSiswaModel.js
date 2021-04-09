//import connection
const db = require("./connection");

//mendapatkan semua data siswa
const getAllSiswa = async () => {
  return await db
    .from("siswa")
    .select("*")
    .then((rows) => {
      return rows;
    });
};

//menambahkan absen
const storeAbsen = async (data) => {
  return await db
    .from("siswa")
    .insert({
      nama: data.nama,
      email: data.email,
      telpon: data.telpon,
      batch: data.batch,
    })
    .then((rows) => {
      return rows;
    })
    .catch((err) => console.log(err));
};

//export semua function
module.exports = { getAllSiswa, storeAbsen };
