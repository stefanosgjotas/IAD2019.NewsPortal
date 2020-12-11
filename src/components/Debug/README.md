# Debug

Dieser Ordner enthält ein Helfer für die Entwicklung.

Um den Debug-Modus zu (de-)aktivieren folgende Tastenkombination drücken (nacheinander):

`Up Up Down Down Left Right Left Right B A`

[→ Siehe Konami Code](https://en.wikipedia.org/wiki/Konami_Code)

Styling kann nun abhängig von dem Debug-Modus dargestellt werden.

Im Debug-Modus wird unten rechts der aktuelle Breakpoint angezeigt.

## Anwendung

```scss
body {
  @include debug() {
    color: red;
  }
}
```

Die rote Farbe wird nur bei aktivem Debug-Modus angezeigt.
Achtung! `@include debug() {}` muss innerhalb eines Selektors angewendet werden.
