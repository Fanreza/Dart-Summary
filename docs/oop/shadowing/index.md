# Shadowing

Keadaan dimana sebuah variabel lokal memiliki nama yang sama dengan variabel global, Variabel lokal akan mengambil alih variabel global.

```dart
class Person{
    String name = '',

    Person(String name){
        name = name // akan mengambil alih variabel global dan property name tidak akan bisa diakses lagi
    }
}
```

Lalu bagaimana cara mengatasi nya?

## This Keyword

`this` merepresentasikan object yang sedang diakses. Keyword `this` dapat mengatasi `Shadowing`.

```dart
class Person{
    String name = '',

    Person(String name){
        this.name = name // akan merepresentasikan object saat ini dan mengambil property name
    }
}
```
