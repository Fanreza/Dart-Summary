# Access Modifier

Di dart kita dapat merubah akses modifier menggunakan `_` didepan nama variable atau method, dengan menggunakan `_` maka variable atau method tersebut tidak dapat diakses dari luar library/file (private).

```dart
// person.dart
class Person {
  String _name;
  int _age; // private property

  Person(this._name, this._age);

}

// main.dart
import 'person.dart';

void main() {
  var person = Person('John', 20);
  print(person._name); // Error: The getter '_name' isn't defined for the class 'Person'.
}
```

lalu bagaimana jika kita ingin mengakses variable atau method yang private? kita dapat mengaksesnya dengan menggunakan getter dan setter.

```dart
// person.dart
class Person {
  String _name;
  int _age; // private property

  Person(this._name, this._age);

  String get name => _name; // getter digunakan untuk mengambil nilai dari variable private
  int get age => _age; // getter digunakan untuk mengambil nilai dari variable private

  set name(String name) => _name = name; // setter digunakan untuk mengubah nilai dari variable private
  set age(int age) => _age = age;  // setter digunakan untuk mengubah nilai dari variable private
}

// main.dart
import 'person.dart';

void main() {
  var person = Person('John', 20);
  print(person.name); // John
  print(person.age); // 20
}
```
