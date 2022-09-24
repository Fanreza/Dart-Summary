# Instalasi

Dart mendukung developer untuk membuat aplikasi web, mobile, desktop, dan server. Untuk memulai, Anda perlu menginstal Dart SDK dan mengatur lingkungan kerja Anda.

::: info
Dart otomatis terinstall pada flutter
:::

## Instalasi Dart SDK

Baca dokumentasi resmi [Dart SDK](https://dart.dev/get-dart) untuk menginstal Dart SDK.

### 1. Instalasi pada Windows

Dart dapat diinstall menggunakan tools [Chocolately](https://chocolatey.org/)

1. Buka terminal sebagai administrator
2. Untuk menginstall dart jalankan perintah dibawah

```cmd
choco install dart-sdk
```

1. Setelah itu tambahkan dart kedalam environment variable
   1. buka menu pencarian dan ketik `env`
   2. tekan `Edit the system environment variables.`
   3. tekan `Environment Variables...`
   4. pada bagian `User Variables` pilih `Path` dan tekan `Edit...`
   5. Tekan `new` lalu tambahkan path ke posisi dart sdk
      - contoh `C:\ProgramData\chocolatey\lib\dart-sdk\tools\dart-sdk\bin`

::: info
Jika anda tidak dapat menginstall menggunakan Chocolately, anda juga bisa langsung _mendownload_ Dart SDK sebagai file _zip_ disini [Dart SDK ZIP](https://dart.dev/get-dart/archive), lalu tambahkan environment variable seperti yang dilakukan diatas.
:::

### 2. Instalasi pada Linux

```bash
$ sudo apt-get update

$ sudo apt-get install apt-transport-https

$ wget -qO- https://dl-ssl.google.com/linux/linux_signing_key.pub | sudo gpg --dearmor -o /usr/share/keyrings/dart.gpg

$ echo 'deb [signed-by=/usr/share/keyrings/dart.gpg arch=amd64] https://storage.googleapis.com/download.dartlang.org/linux/debian stable main' | sudo tee /etc/apt/sources.list.d/dart_stable.list
```

lalu install Dart SDK

```bash
$ sudo apt-get update

$ sudo apt-get install dart
```

setelah Dart berhasil terinstall, saatnya mengatur environment variable

_Sesuaikan dengan path_

```bash
$ export PATH="$PATH:/usr/lib/dart/bin"
```

### 3. Instalasi pada MacOS

**_Coming soon...._**

## Testing Instalasi

Untuk memastikan Dart berhasil terinstall, buka terminal dan ketikkan perintah dibawah

```bash
dart
```

jika berhasil, tidak akan keluar error `dart command not found`
