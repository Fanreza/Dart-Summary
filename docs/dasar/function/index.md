# Fungsi

Fungsi adalah sebuah blok program yang akan di eksekusi **hanya jika dipanggil** saja
pembuatan nama fungsi pada dart menggunakan teknik `camelCase`

syntax dalam pembuatan sebuah fungsi adalah

```dart
void namaFungsi(){
    // code
}
```

dan untuk memanggil fungsi tersebut cukup gunakan `namaFungsi();`

contohnya

```dart
void printHelloWorld(){
    print("Hello World");
}

void main(){
    printHelloWorld(); // Hello World
}
```

## Fungsi dengan parameter

kita dapat membuat fungsi dengan parameter, parameter pada dart adalah variabel yang akan digunakan pada fungsi tersebut

```dart
void printHello(String name){
    print("Hello $name");
}

void main(){
    printHello("Fanreza"); // Hello Fanreza
}
```

jumlah parameter tidak terbatas, dan jika ingin menambahkan parameter lain, wajib pisahkan dengan koma

```dart
void printHello(String name, String lastName){
    print("Hello $name $lastName");
}

void main(){
    printHello("Jamil", "Fanreza"); // Hello Jamil Fanreza
}
```

### Optional Parameter

Secara default sebuah parameter wajib diisi, namun kita dapat membuat parameter menjadi optional dengan cara menambahkan tanda kurung siku `[]` pada parameter tersebut dan parameter tersebut wajib `nullable`

**_Optional parameter tidak boleh ada di posisi pertama_**

```dart
void printHello(String name, [String? lastName]){
    print("Hello $name $lastName");
}

void main(){
    printHello("Jamil"); // Hello Jamil null
}
```

Optional parameter dapat berupa banyak parameter

```dart
void printHello(String name, [String? middleName, String? lastName]){
    print("Hello $name $middleName $lastName");
}

void main(){
    printHello("Jamil"); // Hello Jamil null
    printHello("Jamil", "Fanreza"); // Hello Jamil Fanreza null
    printHello("Muhamad", "Jamil", "Fanreza"); // Hello Muhamad Jamil Fanreza
}
```

### Default Parameter

Default parameter adalah parameter yang akan diisi secara otomatis jika parameter tersebut tidak diisi, default value boleh tidak nullable

```dart
void printHello(String name, [String? middleName, String? lastName = "Fanreza"]){
    print("Hello $name $middleName $lastName");
}

void main(){
    printHello("Jamil"); // Hello Jamil null Fanreza
    printHello("Jamil", "Fanreza"); // Hello Jamil Fanreza Fanreza
    printHello("Muhamad", "Jamil", "Fanreza"); // Hello Muhamad Jamil Fanreza
}
```

### Named Parameter

Pada named parameter kita tidak perlu memberikan `argument` berdasarkan posisi `parameter`, tapi kita bisa spesifik pada nama `parameter` yang akan kita isi

cara menggunakan named parameter adalah menambahkan tanda kurung kurawal `{}` pada parameter yang akan kita isi

```dart
void printHello(String name, {String? middleName, String? lastName = "Fanreza"}){ // named parameter dapat di kombinasikan dengan default value
    print("Hello $name $middleName $lastName");
}

void main(){
    printHello("Jamil"); // Hello Jamil null Fanreza
    printHello("Jamil", middleName: "Fanreza"); // Hello Jamil Fanreza Fanreza
    printHello("Muhamad", middleName: "Jamil", lastName: "Fanreza"); // Hello Muhamad Jamil Fanreza
    // named parameter wajib dipanggil dengan nama parameter

    printHello("Muhamad", "Jamil", "Fanreza"); // error
}
```

### Required Parameter

Berbeda dengan optional, required parameter tidak boleh bernilai `null`, dan harus diisi

```dart
void printHello(String name, {required String middleName, String? lastName = "Fanreza"}){
    print("Hello $name $middleName $lastName");
}

void main(){
    printHello("Jamil", middleName: "Fanreza"); // Hello Jamil Fanreza Fanreza
    printHello("Muhamad", middleName: "Jamil", lastName: "Fanreza"); // Hello Muhamad Jamil Fanreza
    printHello("Muhamad", lastName: "Fanreza"); // error karena required parameter harus diisi
}
```

## Fungsi dengan return value

kita dapat membuat fungsi yang mengembalikan nilai, untuk membuat fungsi yang mengembalikan nilai kita harus menambahkan tipe data pada fungsi tersebut

```dart
String printHello(String name){
    return "Hello $name";
}

void main(){
    print(printHello("Jamil")); // Hello Jamil

    // dapat di masukan ke variable
    var hello = printHello("Jamil");
    print(hello); // Hello Jamil
}
```

## Arrow Function

Arrow function adalah fungsi yang hanya memiliki satu baris kode, dan tidak perlu menggunakan `return` untuk mengembalikan nilai
lebih sederhana dibanding fungsi pada biasanya karena tidak memerlukan kurung kurawal `{}`

```dart
String printHello(String name) => "Hello $name";

void main(){
    print(printHello("Jamil")); // Hello Jamil
}
```

dengan parameter

```dart
String printHello(String name, String lastName) => "Hello $name $lastName";

void main(){
    print(printHello("Jamil", "Fanreza")); // Hello Jamil Fanreza
}
```

## Main Function

Main function adalah fungsi yang pertama kali dijalankan ketika program dijalankan, main function harus memiliki nama `main` dan dapat berisi parameter

```dart
void main(){
    print("Hello World");
}
```

dengan parameter

```dart
void main(List<String> args){
    print(args);
}
```

cara menjalankan program dengan parameter

```bash
dart main.dart "Jamil" "Fanreza" #["Jamil", "Fanreza"]
```

## High Order Function

High order function adalah fungsi yang dapat menerima fungsi sebagai parameter atau mengembalikan fungsi.

```dart
void printCapitalName(String name, Function(String) capitalize){
    print(capitalize(name));
}

void main(){

    // menggunakan fungsi lain sebagai parameter
    String capitalizeName(String name){
        return name.toUpperCase();
    }

    printCapitalName("Jamil", capitalizeName); // JAMIL

    // langsung inisiasi fungsi
    printCapitalName("jamil", (String name){
        return name.toUpperCase();
    }); // JAMIL

    // menggunakan Anonymous Function
    printCapitalName("jamil", (String name) => name.toUpperCase()); // JAMIL
}
```

## Anonymous Function

Anonymous function adalah fungsi yang tidak memiliki nama, biasanya digunakan sebagai parameter pada fungsi lain
sama seperti lambda function pada bahasa pemrograman lain.

```dart
String capitalizeName(String name){
    return name.toUpperCase();
}

String capitalizeName = (String name) => name.toUpperCase(); // dengan arrow function

void main(){
    print(capitalizeName("jamil")); // JAMIL
}
```

## Recursive Function

Recursive function adalah fungsi yang memanggil dirinya sendiri, biasanya digunakan untuk menghitung nilai faktorial

```dart
int factorial(int number){
    if(number == 1){
        return 1;
    }else{
        return number * factorial(number - 1);
    }
}

void main(){
    print(factorial(5)); // 120
}
```

### Stack Overflow

Stack overflow adalah error yang terjadi ketika fungsi memanggil dirinya sendiri terlalu banyak, dan memenuhi batas stack yang telah ditentukan

```dart
int loop(int value){
    print("loop" ke $value);

    loop(value - 1);
}

void main(){
    loop(100000000000000000000); // error akan muncul sesuai dengan spesifikasi device yang digunakan
}
```
