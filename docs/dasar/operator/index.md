# Operator

## Operator Aritmatika

Dart mendukung operator aritmatika seperti pada bahasa pemrograman lainnya.

| Operator |               Fungsi               |
| :------: | :--------------------------------: |
|    +     |            Pertambahan             |
|    -     |            Pengurangan             |
|    \*    |             Perkalian              |
|    /     |    Pembagian ( hasil desimal )     |
|    ~/    | pembagian ( hasil bilangan bulat ) |
|    %     |       Modulus atau sisa bagi       |

```dart
print(10 + 10); // 20
print(10 - 10); // 0
print(10 * 10); // 100
print(10 / 10); // 1.0
print(10 ~/ 10); // 1
print(10 % 10); // 0
```

## Operator Perbandingan

Operator perbandingan akan menghasilkan nilai `Bool`, dapat digunakan pada tipe data `Number` dan `String`

| Operator |            Fungsi            |
| :------: | :--------------------------: |
|    ==    |         Sama dengan          |
|    !=    |      Tidak sama dengan       |
|    >     |          Lebih dari          |
|    <     |         Kurang dari          |
|    >=    | Lebih dari atau sama dengan  |
|    <=    | Kurang dari atau sama dengan |

```dart
print(10 == 10); // true
print(10 != 10); // false
print(10 > 10); // false
print(10 < 10); // false
print(10 >= 10); // true
print(10 <= 10); // true

print('fanreza' == 'fanreza'); // true
print('fanreza' != 'fanreza'); // false
```

## Operator Penugasan

Mempersingkat penggunaan operator aritmatika

| Operator Aritmatika | Operator Penugasan |
| :-----------------: | :----------------: |
|          +          |         +=         |
|          -          |         -=         |
|         \*          |        \*=         |
|          /          |         /=         |
|         ~/          |        ~/=         |
|          %          |         %=         |

```dart
int a = 10;
a += 10; // a = a + 10
print(a); // 20
```

## Operator Increment dan Decrement

|  Operator  |          Fungsi          |
| :--------: | :----------------------: |
| variable++ | variable = variable, + 1 |
| variable-- | variable = variable, - 1 |
| ++variable | variable = variable - 1  |
| --variable | variable = variable - 1  |

```dart
int a = 10;

int b = a++; // b = 10, a = 11
int c = ++a; // c = 11, a = 11
```

## Operator Logika

Operator logika merupakan pembanding dua buah data `bool` yang akan menghasilkan data `bool`

|   Operator    | Fungsi |
| :-----------: | :----: |
|      &&       |  AND   |
| &#124; &#124; |   OR   |
|       !       |  NOT   |

```dart
true && true; // true
true && false; // false
!true; // false
```

## Operator Test Type

| Operator |                            Fungsi                             |
| :------: | :-----------------------------------------------------------: |
|    as    |                  Memaksa konversi tipe data                   |
|    is    |    Menghasilkan true jika variable sesuai dengan tipe data    |
|   is!    | Menghasilkan true jika variable tidak sesuai dengan tipe data |

```Dart
dynamic variable = 1;

int intVariable = variable as int; // 1
int isInt = variable is int; // true
int isNotInt = variable is! int; // false
```
