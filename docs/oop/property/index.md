# Property

Property merupakan sebuah data atau atribut yang dimiliki oleh sebuah objek. Property dapat diartikan sebagai sebuah variabel yang berada di dalam sebuah objek.

## Membuat Property

```dart
class Person{
    String name; // property ini wajib berisi value
    int age; // property ini wajib berisi value
}
```

property wajib diisi namun boleh `null` menggunakan keyword nullable

```dart
class Person{
    String? name; // property ini boleh null
    int? age; // property ini boleh null
}
```

property dengan keyword `final` tidak dapat diubah nilainya

```dart
class Person{
    final String name; // property ini tidak dapat dirubah valuenya
    final int age; // property ini tidak dapat dirubah valuenya
}
```

## Mengakses Property

```dart
class Person{
    String name = 'Fanreza';
    int age = 18;
}

void main(){
    var person1 = Person();
    print(person1.name); // Fanreza
    print(person1.age); // 18

    print(person1.address) // error karena tidak ada property address
}
```

## Merubah Property

```dart
class Person{
    String name = 'Fanreza';
    int age = 18;

    final string address = 'Jl. Kebon Jeruk';
}

void main(){
    var person1 = Person();
    person1.name = 'Jamil';
    person1.age = 19;

    person1.address = 'Jl. Kebon Mangga'; // error karena property address tidak dapat dirubah

    print(person1.name); // Jamil
    print(person1.age); // 19
}
```
