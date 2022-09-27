# Polymorphism

Kemampuan sebuah object untuk memiliki banyak bentuk dalam satu turunan yang sama.

```dart
class Animal {
  String? name;

  Animal(this.name);
}

class Cat extends Animal {
  Cat(String name) : super(name);
}

class Dog extends Animal {
  Dog(String name) : super(name);
}

void main() {
  var animal = Animal("Animal");
  print(animal); // Instance of 'Animal'
  animal = Cat("Animal");
  print(animal); // Instance of 'Cat'
  animal = Dog("Animal");
  print(animal); // Instance of 'Dog'
}
```

## Polymorphism dengan Method

```dart
class Animal {
  String? name;

  Animal(this.name);
}

class Dog extends Animal {
  Dog(String name) : super(name);
}

class Cat extends Animal {
  Cat(String name) : super(name);
}

void animalName(Animal animal) {
  print(animal.name);
}

void main() {
  animalName(Animal("The Animal"));
  animalName(Dog("The Dog"));
  animalName(Cat("The Cat"));
}
```

## Type Check

Menggunakan Polymorphism adalah keuntungan namun ada kalanya kita perlu explicit terhadap instace object yang dikirim, untuk itu kita bisa menggunakan `is` dan `as` untuk melakukan type check.

```dart
class Animal {
  String? name;

  Animal(this.name);
}

class Dog extends Animal {
  Dog(String name) : super(name);
}

class Cat extends Animal {
  Cat(String name) : super(name);
}

void animalName(Animal animal) {
  if (animal is Dog) {
    Dog dog = animal as Dog;
    print('${dog.name} woof woof');
  } else if (animal is Cat) {
    Cat cat = animal as Cat;
    print('${cat.name} meow meow');
  } else {
    print("Animal");
  }
}

void main() {
  animalName(Dog("Doggy"));
  animalName(Cat("Kitty"));
  animalName(Animal("Animal"));
}
```
