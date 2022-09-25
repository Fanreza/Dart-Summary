# Variable dan Tipe Data

## Tipe data Number

### 1. Integer

Integer merupakan tipe data yang berisi bilangan bulat.

```dart
int intVariable = 1;
```

### 2. Double

Double merupakan tipe data desimal, penulisan desimal menggunakan titik `( . )` bukan koma `( , )`.

```dart
double doubleVariable = 1.5;
```

### 3. Num

Num merupakan tipe data yang dapat menampung bilangan bulat dan desimal.

```dart
num numVariable = 1;
num numVariable = 1.5;
```

## Tipe data String

String merupakan tipe data yang berisi teks.
untuk membuat String, kita dapat menggunakan tanda kutip satu `( '' )` atau tanda kutip dua `( "" )`.

```dart
String stringVariable = "Hello World";
```

### String Interpolation

String mendukung sebuah expression dimana kita dapat mengambil data dari Variable
untuk membuat expression kita dapat menggunakan `${expression}` atau jika sederhana kita bisa menggunakan `$expression`

```dart
String nama = 'Fanreza';
print('Halo $nama'); // Halo Fanreza
print('Halo ${nama.toUpperCase()}'); // Halo FANREZA
```

### Backslash

Terdapat sebuah kondisi dimana kita ingin menampilkan tanda kutip dalam String atau pun menggunakan $, untuk menampilkannya kita dapat menggunakan backslash `\` sebelum tanda kutip.

```dart
print($) // Undefined name $
print('\$'); // $
```

### String Concatenation

Ada keadaan dimana kita perlu menggabungkan String.
Kita dapat menggunakan karakter `( + )`, atau jika datanya bukan merupakan variable, kita bisa langsung menambahkan nya dengan `spasi,whitespace atau tab`

```dart
String namaDepan = 'Jamil';
String namaBelakang = 'Fanreza';

print(namaDepan + namaBelakang); // JamilFanreza ( tanpa spasi )
print('Halo' 'Fanreza'); // HaloFanreza ( spasi akan dihilangkan )
```

### Multiline String

String mendukung multiline, untuk membuatnya kita dapat menggunakan tanda kutip tiga `( """ )` atau tanda kutip tiga `( ''' )`

```dart
print('''
    Multiline
String
''');

//      Multiline ( tab atau whitespace akan terhitung sebagai karakter )
// String
```

## Tipe data Boolean

Boolean merupakan tipe data yang berisi nilai benar atau salah.

```dart
bool boolVariable = true;
bool boolVariable = false;
```

## Tipe data Dynamic

Keadaan dimana kita ingin membuat variable yang dapat menampung semua tipe data

```dart
dynamic dynamicVariable = 1;
print(dynamicVariable); // 1

dynamicVariable = 'Hello World';
print(dynamicVariable); // Hello World

dynamicVariable = true;
print(dynamicVariable); // true
```

## Tipe data Var

Keadaan dimana kita ingin merubah value dari sebuah variable namun tidak dapat merubah tipe data nya

```dart
var intVariable = 123;   // intVariable sudah dijadikan int
intVariable = 456;  // isi dari intVariable dirubah
intVariable = 'abc'; // ERROR: can't change type of intVariable from int to String.
```

## Tipe data Final

Keadaan dimana kita tidak dapat merubah tipe data maupun value dari sebuah variable

```dart
final intVariable = 123; // intVariable sudah dijadikan int
intVariable = 456; // ERROR: can't change value of intVariable from 123 to 456.
intVariable = 'abc'; // ERROR: can't change type of intVariable from int to String.
```
