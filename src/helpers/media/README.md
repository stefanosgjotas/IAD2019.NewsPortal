# Media-Query

Es gibt drei Media-Queries:

- `default` – Mobile
- `m` – Medium
- `l` – Large

Im file `mixin.scss` können die Breakpoints in `px` angegeben werden.

## Anwendung

```scss
html {
  font-size: 16px;

  @include media(m) {
    font-size: 18px;
  }
  @include media(l) {
    font-size: 20px;
  }
}
```

Bei dieser Anwendung wir dmit zunehmender Grösse des Viewports auch die `font-size` vergrössert.
