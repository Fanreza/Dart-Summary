# Null Safety

Dart mendukung null safety semenjak versi 2.12 [Dart Null Safety](https://dart.dev/null-safety), yang berarti Anda dapat menghindari banyak kesalahan yang mungkin terjadi saat bekerja dengan nilai null. Dengan null safety, Anda dapat memastikan bahwa variabel tidak akan pernah bernilai null sebelum Anda menggunakannya.

## Mengaktifkan Null Safety

```dart
int? number = null;

print(number.toDouble()); // error karena number bisa null jadi harus di cek terlebih dahulu

if(number != null){
    print(number.toDouble()); // tidak error karena number sudah di cek
}
```
