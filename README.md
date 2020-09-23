# fosan_todo
todo ejs sequalize node.js mvc html css express db

# ejs_sequelize
# FOSAN TODO


Pada hari ini kita akan coba membuat sebuah aplikasi simulasi aplikasi todo list.

**Notes**

- Wajib menggunakan port **3000**
- masukkan node_modules pada .gitignore

---

## Level 0

Buatlah model `User` dengan field field sebagai berikut:

| Field    | Type   | Description                      |
| -------- | ------ | -------------------------------- |
| id       | Integer| Id primary key                   |
| name     | String | Nama dari User                   |
| password | String | Password User                    |
| email    | String | Email dari User                  |

Buatlah model  `Todo` dengan field field sebagai berikut:

| Field     | Type    | Description                                                  |
| --------- | ------- | ------------------------------------------------------------ |
| id        | Serial  | Id primary key                                               |
| kegiatan  | String  | Nama Kegiatan                                                |
| status    | Integer | 0 untuk belum terlaksana, 1 jika sudah terlaksana            |


## Level 1

Ada kesalahan pada requirement awal. Pada model `Todo` seharusnya memiliki atrribute `userId`, tambahkan kolom `userId` ke dalam model `Todo` buatlah sebuah Associatons untuk memperbaiki kesalahan tersebut.


## Level 2

Buatlah sebuah routes seperti perintah dibawah ini

**Informasi routes yang perlu dibuat untuk aplikasi ini adalah:**

| Method | Routes                 | Description                                       |
| ------ | ---------------------- | ------------------------------------------------- |
| GET    | /user/register         | Masuk ke dalam halamam registrasi                 |
| POST   | /user/register         | Menambahkan user register                         |
| GET    | /user/login            | Masuk ke dalam halamam login                      |
| POST   | /user/login            | Masuk ke dalam aplikasi fosan todo                |
| GET    | /todo                  | Menampilkan semua todo list                       |
| POST   | /todo/                 | Input kegiatan baru                               |
| GET    | /edittodo/:id          | Menampilkan todo id tertentu (untuk halaman edit) |
| PUT    | /todo/:id              | Mengedit data                                     |
| DELETE | /todo/:id              | Menghapus data kegiatan di dalam aplikasi         |

**Route yang dibuat haruslah sama dengan apa yang ditulis disini**

## Level 3

Kalian diminta untuk membuat proses authentication dan authorization! sehingga tidak sembarangan orang bisa masuk ke dalam aplikasi todo

- GET /user/register
  
  Buatlah route untuk menampilkan form registrasi (ejs)

- POST /user/register

  Buatlah route untuk melakukan registrasi `User`, input yang dibutuhkan:

  - email
  - name
  - password, lakukan encryption (**Ingat! database tidak boleh menyimpan plain-password**)

  Jika signup berhasil, beri response `Sign Up, Success!`
  
  - GET /user/login
  
  Buatlah route untuk menampilkan form login (ejs)

- POST /user/login

  Buatlah route untuk melakukan pemeriksaan apakah `User` sudah pernah mendaftar sebelumnya. Jika berhasil, berikan response berupa message `Sign In, Success!` dan token yang berisi data `id, name` setelah itu redirect ke route GET /todo

## Level 4

Saatnya User melakukan kegiatan maka akan terjadi perubahan, gunakan  **authentication** dalam penggunaan endpoint dibawah ini

- POST /todo

  Buatlah route yang digunakan untuk menyimpan data - data sesuai attributes todo 

- GET /todo

  Buatlah route yang digunakan menampilkan halaman yang berisi semua data - data todo list dari semua user (ejs)

- GET /edittodo/:id

  Buatlah route yang digunakan menampilkan halaman edit yang berisi data sesuai dengan id (ejs)

## Level 5

User melakukan pengeditan pada sistem aplikasi ini, gunakan end point ini apabila ada perubahan dalam database! pada endpoint ini gunakan pengecekan **authentication** dalam penggunaan endpoint dibawah ini

- PUT /todo/:id

  Buatlah route yang digunakan untuk mengubah data setelah itu redirect ke route GET /todo

- DELETE /todo/:id

  Buatlah route yang digunakan untuk menghilangkan data dari dalam database setelah itu redirect ke route GET /todo



## Level 6 :rocket::rocket::rocket::rocket::alien::alien::alien::alien::alien::alien::alien::alien:

Buatlah sebuah **authorization untuk user terkait**  yang berfungsi untuk bisa mengedit data didalam database. 

gunakan endpoint dibawah ini:

- PUT /todo/:id

  Buatlah route yang digunakan untuk mengedit data , harus user terkait (pemilik kegiatan) saja yang bisa menggunakan endpoint ini, setelah itu redirect ke route GET /todo.



## :fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire::fire:

