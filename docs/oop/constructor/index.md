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
