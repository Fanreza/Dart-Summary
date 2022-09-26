# Scope

Setiap variable atau fungsi hanya bisa diakses pada scope yang sama atau scope yang lebih luas.

```dart
void main(){
    var name = "Jamil";
    print(name); // Jamil dapat diakses karena berada pada scope yang sama

    void printName(){
        print(name); // Jamil (karena bisa mengakses variable name pada scope yang lebih luas)
        var variableScopeLocal = "Variable Scope Local";
    }

    print(variableScopeLocal); // Error: variableScopeLocal tidak dikenali karena berbeda scope

    printName(); // dapat diakses karena scope nya sama
}
```
