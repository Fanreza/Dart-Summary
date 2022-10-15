# Import

Import merupakan sebuah cara dalam memanage source code yang sudah terlalu banyak, biasanya kita memisahkan kedalam file file berbeda lalu mengimport nya kedalam 1 file utama atau file yang membutuhkan.

```dart
// Anggap file ini berada pada folder data
class ClassImported{
    String name?;


    ClassImported({this.name});
}
```

```dart
// Anggap file ini berada pada folder main
import 'data/class_imported.dart';

void main(){
    ClassImported classImported = ClassImported('Class ini dapat digunakan');
    print(classImported.name); // Class ini dapat digunakan
}
```
