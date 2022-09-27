# Inheritance

Inheritance merupakan cara untuk membuat sebuah class baru dari class yang sudah ada. Class yang sudah ada disebut sebagai parent class atau base class, sedangkan class yang baru dibuat disebut sebagai child class atau derived class.

## Menggunakan `extends`

Untuk membuat class baru dari class yang sudah ada, kita bisa menggunakan kata kunci `extends`. Contoh:

```dart
class Animal {
  String? name;
  int? age;

  void eat() {
    print('$name is eating');
  }
}

class Cat extends Animal {
  void meow() {
    print('$name is meowing');
  }
}

void main(){
    var cat = Cat();
    cat.name = 'Kitty';
    cat.age = 2;
    cat.eat(); // Kitty is eating
    cat.meow(); // Kitty is meowing
}
```

## Overriding

Kita bisa mengubah method atau property yang ada di parent class dengan cara yang sama seperti mengubah method di class yang kita buat sendiri. Hal ini disebut dengan overriding. Contoh:

```dart
class Animal {
  String? name;
  int leg = 2;

  void eat() {
    print('$name is eating');
  }
}

class Cat extends Animal {
  int leg = 4;

  void eat() {
    print('$name is eating fish');
  }
}

void main(){
    var cat = Cat();
    cat.name = 'Kitty';
    cat.eat(); // Kitty is eating fish ( method eat di parent ditimpa dengan method eat di child )

    print(cat.leg); // 4 ( property leg di parent ditimpa dengan property leg di child )
}
```

## Super

Kita bisa mengakses method atau property di parent class dengan menggunakan kata kunci `super`. Contoh:

```dart
class Animal {
  int leg = 2;
}

class Cat extends Animal {
  int leg = 4;

  int returnParentLeg() {
    return super.leg;
  }
}

void main(){
    print(cat.leg); // 4 ( property leg di parent ditimpa dengan property leg di child )
    print(cat.returnParentLeg()); // 2 ( mengakses property leg di parent )
}
```

## Super Constructor

Kita bisa memanggil constructor di parent class dengan menggunakan kata kunci `super`. Contoh:

berbeda dengan redirecting constructor, pada Super Constructor kita bisa memberikan body, perlu diperhatikan jika pada parent terdapat constructor dengan parameter maka pada child constructor harus mengirimkan parameter tersebut.

```dart
class Animal {
  String? name;
  int? age;

  Animal(this.name, this.age);
}

class Cat extends Animal {
  Cat(String name, int age) : super(name, age) {
    print("Cat is created");
  }
}

void main() {
  var cat = Cat('Kitty', 2);
  print(cat.name); // Kitty
  print(cat.age); // 2
}

```
