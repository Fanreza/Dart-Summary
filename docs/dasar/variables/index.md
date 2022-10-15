# Variable dan Tipe Data

## Keyword Dynamic

Keadaan dimana kita ingin membuat variable yang dapat menampung semua tipe data

```dart
dynamic dynamicVariable = 1;
print(dynamicVariable); // 1

dynamicVariable = 'Hello World';
print(dynamicVariable); // Hello World

dynamicVariable = true;
print(dynamicVariable); // true
```

## Keyword Var

Keadaan dimana kita ingin merubah value dari sebuah variable namun tidak dapat merubah tipe data nya

```dart
var intVariable = 123;   // intVariable sudah dijadikan int
intVariable = 456;  // isi dari intVariable dirubah
intVariable = 'abc'; // ERROR: can't change type of intVariable from int to String.
```

## Keyword Final

Keadaan dimana kita tidak dapat merubah tipe data maupun value dari sebuah variable

```dart
final intVariable = 123; // intVariable sudah dijadikan int
intVariable = 456; // ERROR: can't change value of intVariable from 123 to 456.
intVariable = 'abc'; // ERROR: can't change type of intVariable from int to String.
```

## Keyword Const

Keadaan dimana kita tidak dapat merubah tipe data maupun value dari sebuah variable

```dart
const intVariable = 123; // intVariable sudah dijadikan int
intVariable = 456; // ERROR: can't change value of intVariable from 123 to 456.
intVariable = 'abc'; // ERROR: can't change type of intVariable from int to String.
```

## Keyword Null

Keadaan dimana kita ingin membuat variable yang tidak memiliki value, dart secara default mewajibkan kita untuk menginisialisasi variable dengan value.

```dart
int? intVariable;
print(intVariable); // null
```

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

## Tipe data list

List merupakan tipe data yang berisi kumpulan data.
untuk membuat list kita dapat menggunakan `( [] )`

```dart
List<int> listVariable = [1, 2, 3];
var listVariable = <int>[1, 2, 3];
```

### Menambah data ke list

```dart
var listName = <String>[];
listName.add('Jamil');
listName.add('Fanreza');

print(listName); // [Jamil, Fanreza]
print(listName.length); // 2
```

### Mengambil data dari list

```dart
var listName = <String>['Jamil', 'Fanreza'];

print(listName[0]); // Jamil
print(listName[1]); // Fanreza
```

### Merubah data list berdasarkan index

```dart
var listName = <String>['Jamil', 'Fanreza'];

listName[0] = 'Jamil Fanreza';
print(listName); // [Jamil Fanreza, Fanreza]
```

### Menghapus data list berdasarkan index

```dart
var listName = <String>['Jamil', 'Fanreza'];
listName.removeAt(0);
print(listName); // [Fanreza]
```

## Tipe data Set

Set merupakan tipe data yang berisi kumpulan data yang tidak boleh sama ( Unique ).
untuk membuat set kita dapat menggunakan `( {} )`

```dart
Set<int> setVariable = {1, 2, 3};
var setVariable = <int>{1, 2, 3};
```

### Menambah data ke set

```dart
var setName = <String>{};
setName.add('Jamil');
setName.add('Fanreza');

print(setName); // {Jamil, Fanreza}
print(setName.length); // 2
```

### Mengambil data dari set

```dart

var setName = <String>{'Jamil', 'Fanreza'};
print(setName.elementAt(0)); // Jamil
print(setName.elementAt(1)); // Fanreza
```

### Menghapus data dari set

```dart
var setName = <String>{'Jamil', 'Fanreza'};
setName.remove('Jamil');
print(setName); // {Fanreza}
```

## Tipe data Map

Map adalah tipe data yang berisi kumpulan data yang memiliki key dan value.
berbeda dengan list yang memiliki index dengan auto increment dan set yang memiliki index dengan unique, map memiliki index yang dapat kita tentukan sendiri.

```dart
Map<String, String> mapVariable = {
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
};

var mapVariable = Map<String, String>{
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
};

var mapVariable = <String, String>{
    'key1': 'value1',
    'key2': 'value2',
    'key3': 'value3',
};
```

### Menambah data ke map

```dart
var mapName = <String, String>{};
mapName['key1'] = 'value1';
mapName['key2'] = 'value2';

print(mapName); // {key1: value1, key2: value2}
```

### Mengambil data dari map

```dart
var mapName = <String, String>{
    'key1': 'value1',
    'key2': 'value2',
};

print(mapName['key1']); // value1
```

### Merubah data map berdasarkan key

```dart
var mapName = <String, String>{
    'key1': 'value1',
    'key2': 'value2',
};

mapName['key1'] = 'value3';
print(mapName); // {key1: value3, key2: value2}
```

### Menghapus data map berdasarkan key

```dart
var mapName = <String, String>{
    'key1': 'value1',
    'key2': 'value2',
};

mapName.remove('key1');

print(mapName); // {key2: value2}
```

## 8. Tipe data Symbol

Symbol merupakan tipe data yang berisi simbol yang unik, biasa digunakan untuk memberikan informasi mengenai type,class, method dan lain-lain.

symbol dapat dibuat dengan 2 cara, yaitu menggunakan `Symbol()` atau `#`.

```dart
var symbolVariable = #symbol; // menggunakan # untuk membuat symbol hanya bisa untuk 1 kata atau tidak boleh terdapat spasi
Symbol symbolVariable = Symbol('Sebuah Symbol'); // menggunakan Symbol() untuk membuat symbol bisa untuk lebih dari 1 kata atau boleh terdapat spasi
```
