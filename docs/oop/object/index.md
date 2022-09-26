# Object

Object adalah sebuah kumpulan data dan fungsi yang berhubungan. Objek dapat berinteraksi dengan objek lainnya.

### Membuat Object

untuk membuat sebuah object dari sebuah `Class` kita bisa membuat variable dengan isi dari nama `Class` yang diinginkan.

Dart versi terbaru sudah tidak menggunakan keyword `new` lagi untuk membuat object.

```dart
class Person {
  String name; // property
  int age; // property
}

void main() {
  Person person = Person();
}
```
