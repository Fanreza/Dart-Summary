# Perulangan

Perulangan merupakan cara yang efisien untuk mengesksekusi kode berulang kali, perulangan akan terus berjalan jika sebuah nilai adalah `true` dan akan berhenti jika nilai tersebut adalah `false`. perlu diperhatikan kondisinya karena ada kemungkinan terjebak dalam **_Infinity loop_**

## Perulangan dengan for

Syntax for pada dart sama seperti bahasa pemrograman lain seperti `javascript`,

```dart
for(statement; condition; increment){
    // code
}
```

contohnya

```dart
for (int counter = 1; counter <= 10; counter++) {
  print(counter); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
}
```

## Perulangan dengan while

`While` tidak memerlukan statement atapun increment, lebih sederhana dibanding for

```dart
while(condition){
    // code
}
```

contohnya

```dart
int counter = 1;
while (counter <= 10) {
  print(counter); // 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
  counter++;
}
```

## Perulangan dengan do while

`Do While` mirip seperti while namun akan menjalankan kode terlebih dahulu baru mengecek kondisi jadi minimal sebuah perulangan akan di jalankan satu kali

```dart
do{
    // code
}while(condition);
```

contohnya

```dart
int counter = 1;

do {
  print(counter); // 1
  counter++;
} while (counter < 1);
```

## Perulangan dengan for in

`for in` biasa digunakan untuk melakukan perulangan pada list, memang kita dapat menggunakan `for loop` namun hal tersebut kurang sederhana.

```dart
for (var item in list) {
  print(item);
}
```

contohnya

```dart
var list = <int>[1, 2, 3, 4, 5];

for (var item in list) {
  print(item); // 1, 2, 3, 4, 5
}
```

jika menggunakan `for loop`

```dart
var list = <int>[1, 2, 3, 4, 5];

for (int i = 0; i < list.length; i++) {
  print(list[i]); // 1, 2, 3, 4, 5
}
```

terlihat lebih simple jika menggunakan `for in`

## Break dan Continue

Break akan menghentikan perulangan apapun kondisinya, sedangkan continue akan menghentikan perulangan saat ini dan melanjutkan ke perulangan berikutnya

```dart
for (int counter = 1; counter <= 10; counter++) {
  if (counter == 5) {
    break;
  }
  print(counter); // 1, 2, 3, 4 ( perulangan berhenti di loop kelima dan data yang tampil hanya sampai 4 )
}
```

```dart
for (int counter = 1; counter <= 10; counter++) {
  if (counter == 5) {
    continue;
  }
  print(counter); // 1, 2, 3, 4, 6, 7, 8, 9, 10 ( 5 tidak di print karena di skip )
}
```
