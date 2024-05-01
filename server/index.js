const http = require("http"); // mengimport module http bawaan node js untuk membuat server
const { PORT = 3000 } = process.env; // menyimpan variable PORT di enviroment sistem

const fs = require("fs"); // mengimport module fs untuk membaca file sistem
const path = require("path"); // mengimport module path untuk membantu dalam manipulasi path file / url

// berisi tipe2 file yang akan dibaca oleh server, tanpa ini server akan menampilkan text saja
const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "application/javascript; charset=UTF-8",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const STATIC_PATH = path.join(process.cwd(), ""); // variable untuk menyimpan folder root project

const toBool = [() => true, () => false]; // fungsi untuk mengubah truthy & falsy menjadi boolean true/false

//fungsi untuk membaca file yang akan di tampilkan
const prepareFile = async (url) => {
  const paths = [STATIC_PATH, url]; // variable yang menyimpan array path folder dan url request
  if (url.endsWith("/")) paths.push("/index.html"); // routing jika membuka '/' di browser maka akan membuka file index.html
  if (!url.startsWith("/node_modules")) paths[0] += "/public"; // jika url bukan /node_modules maka path akan ditambahkan '/public' agar bisa membaca file di folder public

  const filePath = path.join(...paths); // fungsi untuk mengabungkan array paths (STATIC_PATH + url)
  const pathTraversal = !filePath.startsWith(STATIC_PATH); //mengecek apakah url tidak langsung akses file
  const exists = await fs.promises.access(filePath).then(...toBool); // mengecek apakah file ada
  const found = !pathTraversal && exists; // mengecek apakah file ditemukan
  const streamPath = found ? filePath : STATIC_PATH + "/public/404.html"; // bila file tidak ditemukan maka akan di tampilkan halaman 404.html
  const ext = path.extname(streamPath).substring(1).toLowerCase(); // mengambil extensi file (ex : .html, .css, .js)
  const stream = fs.createReadStream(streamPath); // fs akan membaca file yang di temukan
  return { found, ext, stream }; // mengembalikan object found, extensi file, dan file yang sudah di baca
};

//membuat server
http
  .createServer(async (req, res) => {
    // if (req.url === "/tentang") {
    //   // routing bila di browser membuka link /tentang maka akan membuka file /about.html
    //   req.url = "/about.html";
    // }
    const file = await prepareFile(req.url); // memanggil fungsi prepareFile dengan parameter url
    const statusCode = file.found ? 200 : 404; // status code untuk di tampilkan di header
    const mimeType = MIME_TYPES[file.ext] || MIME_TYPES.default; // tipe file untuk di tampilkan di header
    res.writeHead(statusCode, { "Content-Type": mimeType }); // mengembalikan respon status code dan type content
    file.stream.pipe(res); // membaca file untuk di tampilan di browser
    console.log(`${req.method} ${req.url} ${statusCode}`); // logging method, url, dan status code
  })
  .listen(PORT, "localhost", () => {
    //server akan di jalankan di PORT dan server local
    console.log(
      "Server sudah berjalan, silahkan buka http://localhost:%d",
      PORT
    );
  });

// Kalau 0.0.0.0 tidak bisa, bisa diganti 'localhost' atau '127.0.0.1'
