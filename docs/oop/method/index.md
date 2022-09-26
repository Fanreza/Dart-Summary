# Method

Method merupakan sebuah fungsi yang berada di dalam sebuah class. Method dapat diakses melalui sebuah object.

## Membuat Method

```dart
class Person{
    String name = 'Fanreza',

    void sayHello(){
        print('Hello, my name is $name');
    }
}
```

method juga dapat dibuat menggunakan expression

```dart
class Person{
    String name = 'Fanreza',

    void sayHello() => print('Hello, my name is $name');
}
```

## Mengakses Method

```dart
class Person{
    String name = 'Fanreza',

    void sayHello(){
        print('Hello, my name is $name');
    }
}

void main(){
    Person person = Person();
    person.sayHello(); // Hello, my name is Fanreza
}
```

## Extension Method

Extension method adalah sebuah method yang dapat ditambahkan ke sebuah class yang sudah ada. Extension method dapat ditambahkan ke class yang sudah ada, baik itu class yang kita buat sendiri maupun class yang sudah ada di dalam library.

```dart
class Person{
    String name = 'Fanreza',

    void sayName(){
        print('My name is $name');
    }
}

extension PersonExtension on Person{
    void sayHello(){
        print('Hello, my name is $name');
    }
}

void main(){
    name.sayName(); // My name is Fanreza
    name.sayHello(); // Hello, my name is Fanreza
}
```

## Operator

Coming Soon...
