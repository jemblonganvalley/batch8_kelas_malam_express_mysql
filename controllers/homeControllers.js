const express = require("express");
const home = express.Router();
const { getAllSiswa, storeAbsen } = require("../model/AbsenSiswaModel");

home.get("/", (req, res) => {
  getAllSiswa().then((result) => {
    res.render("home", { data: result });
  });
});

home.post("/absen", (req, res) => {
  let nama = req.body.nama;
  let email = req.body.email;
  let telpon = req.body.telpon;
  let batch = req.body.batch;

  storeAbsen({
    nama: nama,
    email: email,
    telpon: telpon,
    batch: batch,
  }).then((result) => {
    res.redirect("/");
  });
});

module.exports = home;
