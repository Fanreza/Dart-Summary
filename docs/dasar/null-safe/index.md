# Null Safety

Dart mendukung null safety semenjak versi 2.12 [Dart Null Safety](https://dart.dev/null-safety), yang berarti Anda dapat menghindari banyak kesalahan yang mungkin terjadi saat bekerja dengan nilai null. Dengan null safety, Anda dapat memastikan bahwa variabel tidak akan pernah bernilai null sebelum Anda menggunakannya.

## Pengecekan Null

```dart
int? number = null;

print(number.toDouble()); // error karena number bisa null jadi harus di cek terlebih dahulu

if(number != null){
    print(number.toDouble()); // tidak error karena number sudah di cek
}
```

## Null Aware Operator

dibanding menggunakan `if` untuk pengecekan null, kita bisa menggunakan `null aware operator` untuk mempersingkat pengecekan null

```dart
int? number = null;

print(number?.toDouble()); // tidak error karena number bisa null jadi harus di cek terlebih dahulu
```

## Menggunakan null variable

```dart
int? number = null;

if(number != null){
    int newNumber = number; // perlu di cek jika inisiasi variable null
}
```

## Default value

daripada kita menggunakan `if` untuk mengecek null, kita bisa menggunakan `??` untuk memberikan nilai default jika null

```dart
int? number = null;

int newNumber = number ?? 0; // jika number null maka newNumber akan bernilai 0
```

## Memaksa variable menjadi non-null

```dart
int? number = null;

int newNumber = number!; // memaksa number menjadi non-null ( beresiko error )
```
