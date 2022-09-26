# Perkondisian

Pada dasarnya, perkondisian adalah sebuah pernyataan yang akan mengeksekusi kode tertentu jika kondisi yang ditentukan terpenuhi. Pada Python, perkondisian dapat ditulis dengan menggunakan `if`, `else if`, dan `else`.

## `if`

`if` adalah sebuah pernyataan yang akan mengeksekusi kode tertentu jika kondisi yang ditentukan terpenuhi.

```dart
if(true){
    print('Hello World');
}
```

## `else`

`Else` akan di eksekusi jika kondisi pada `if` tidak terpenuhi

```dart
if(false){
    print('Hello World'); // kode ini tidak di eksekusi
} else{
    print('Hello World'); // kode ini di eksekusi
}
```

## `else if`

`Else If` akan di eksekusi jika kondisi pada `if` tidak terpenuhi, dan akan mengeksekusi kode jika kondisi pada `else if` terpenuhi

```dart
if(false){
    print('Hello World'); // kode ini tidak di eksekusi
} else if(false){
    print('Hello World'); // kode ini di eksekusi
} else if(true){
    print('Hello World'); // kode ini tidak di eksekusi
} else{
    print('Hello World'); // kode ini tidak di eksekusi
}
```

### Ternary operator

untuk menyederhanakan `if else` kita bisa menggunakan ternary operator

```dart
var a = 10;

// Sama seperti if dan else
var b = a > 10 ? 'a lebih besar dari 10' : 'a lebih kecil dari 10';

// juga mendukung else if
var c = a > 10 ? 'a lebih besar dari 10' : a < 10 ? 'a lebih kecil dari 10' : 'a sama dengan 10';

print(b); // a lebih kecil dari 10
print(c); // a sama dengan 10
```

## `switch`

Perkondisian sederhana dapat ditulis dengan menggunakan `switch` statement, dan hanya mendukung `==` operator.

`switch` secara default akan terus mengeksekusi meskipun kondisi terpenuhi, untuk menghentikan eksekusi kita dapat menggunakan `break` statement.

`switch` juga mendukung nilai `default` yang akan di eksekusi jika kondisi tidak terpenuhi.

```dart
String nama = 'Jamil';

switch(nama){
    case 'Jamil':
        print('Hello Jamil'); // kode ini di eksekusi
        break;
    case 'Fanreza':
        print('Hello Fanreza'); // kode ini tidak di eksekusi
        break;
    default:
        print('Hello World'); // kode ini tidak di eksekusi
}
```
