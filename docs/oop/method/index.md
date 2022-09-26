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
