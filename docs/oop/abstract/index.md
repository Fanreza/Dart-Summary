# Abstract Class

Abstract class adalah class yang tidak dapat dijadikan sebuah object dan hanya berfungsi sebagai parent class yang dapat menurunkan property dan method kepada class lain.

membuat abstract class dapat menggunakan keyword `abstract` sebelum keyword `class`.

```dart
// Class abstract
abstract class Animal{
    String? name;
}

// Class yang mengimplementasikan class abstractv
class Cat extends Animal{
    Cat(String name){
        this.name = name;
    }
}

void main(){
    // Error karena class abstract tidak dapat dijadikan object
    Animal animal = Animal();

    // Class yang mengimplementasikan class abstract dapat dijadikan object
    Cat cat = Cat("Kucing");
}
```

## Abstract Method

Abstract method adalah method yang tidak memiliki body dan hanya berfungsi sebagai method yang harus diimplementasikan oleh class yang mengimplementasikan class abstract. class yang mewarisi class abstract **harus** mengimplementasikan method yang ada di class abstract. dan sebaiknya tambahkan keyword **_@override_** pada method yang akan diturunkan.

```dart
// Class abstract
abstract class Animal {
  String? name;

  void eat();
}

class Cat extends Animal {
  Cat(String name) {
    this.name = name;
  }

  @override // Method yang diturunkan harus menggunakan keyword @override
  void eat() {
    print('$name sedang makan');
  }
}

void main() {
  Cat cat = Cat("Kucing");
  cat.eat(); // Kucing sedang makan
}

```
