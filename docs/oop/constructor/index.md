# Constructor

`Constructor` adalah method yang akan dipanggil pertama kali ketika sebuah class diinisialisasi. `Constructor` biasanya digunakan untuk menginisialisasi nilai awal dari sebuah class.
sama seperti method, `Constructor` dapat menerima sebuah parameter.
nama `Constructor` harus sama dengan nama `Class` nya.

Jika kita membuat `Constructor` pada class, maka saat kita membuat object, kita wajib mengisi parameter yang ada pada `Constructor` tersebut.

satu class hanya bisa memiliki satu `Constructor` saja.

```dart
class Person{
    String name = '';

    Person(String paramName){
        name = paramName; // akan dijalankan saat class diinisialisasi
    }
}

void main(){
    Person person = Person('Fanreza');
    print(person.name); // Fanreza
}
```

## Formal Parameter

jika tujuan sebuah `Constructor` hanya untuk menginisialisasi nilai awal dari sebuah class, maka kita bisa menggunakan `Formal Parameter` untuk membuat `Constructor` yang lebih singkat.

```dart
class Person{
    String name = '';

    Person(this.name); // akan dijalankan saat class diinisialisasi
}
```

## Named Constructor

pada Dart kita tidak bisa membuat lebih dari satu `Constructor` namun kita bisa membuat `Named Constructor`.

`Named Constructor` adalah `Constructor` yang memiliki nama. `Named Constructor` biasanya digunakan untuk membuat `Constructor` yang memiliki parameter yang berbeda.

```dart
class Person {
  String name = '';
  int age = 0;

  Person(this.name, this.age);

  Person.theName(this.name);

  Person.theAge(this.age);
}

void main() {
  var person1 = Person('Jamil', 18);
  var personTheName = Person.theName('Fanreza');
  var personTheAge = Person.theAge(19);

  print(person1.name); // Jamil
  print(person1.age); // 18

  print(personTheName.name); // Fanreza
  print(personTheName.age); // 0

  print(personTheAge.name); // string kosong
  print(personTheAge.age); // 19
}
```

## Redirecting Constructor

`Redirecting Constructor` adalah `Constructor` yang mengarah ke `Constructor` lainnya.

```dart
class Person {
  String name = '';
  int age = 0;

  Person(this.name, this.age);
  Person.theName(String name) : this(name, 0); // mengarah ke constructor Person
  Person.theAge(int age) : this('No Name', age); // mengarah ke constructor Person
}

void main() {
  var person1 = Person('Jamil', 18);
  var person2 = Person.theName('Fanreza');
  var person3 = Person.theAge(19);

  print(person1.name); // Jamil
  print(person1.age); // 18

  print(person2.name); // Fanreza
  print(person2.age); // 0

  print(person3.name); // No Name
  print(person3.age); // 19
}
```

### Redirecting Named Constructor

```dart
class Person {
  String name = '';
  int age = 0;

  Person(this.name, this.age);
  Person.theName(String name) : this(name, 0);
  Person.theAge(int age) : this.theName('No Name'); // mengarah ke constructor theName
}

void main() {
  var person1 = Person('Jamil', 18);
  var person2 = Person.theName('Fanreza');
  var person3 = Person.theAge(19);

  print(person1.name); // Jamil
  print(person1.age); // 18

  print(person2.name); // Fanreza
  print(person2.age); // 0

  print(person3.name); // No Name
  print(person3.age); // 0
}
```

## Initializer List

Cara menginisialisasi sebuah nilai dari property secara langsung tanpa menuliskan pada body constructor

```dart
class Person {
  String? name;
  String? lastName;
  String? firstName;

  Person(this.name)
      : firstName = name?.split(' ')[0],
        lastName = name?.split(' ')[1]{
        print('Constructor dibuat'); // dapat menambahkan body
  }
}

void main() {
  Person person = Person("Muhamad Jamil Fanreza");
  print(person.firstName); // Muhamad
  print(person.lastName); // Fanreza
  print(person.name); // Muhamad Jamil Fanreza
}
```
