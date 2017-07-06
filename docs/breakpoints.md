# Breakpoints

The breakpoints definition assumes you're working using _mobile-frist_ approach.

The format of the map `$breakpoints` is the following:

    $breakpoints: (
      small: 600px,
      large: 1200px
    );

each key (`small`, `large`) is completely arbitrary, but once set, be sure to reference to them every time it's needed, especially when configuring typi (see [Typography and Vertical Rhythm](typography-and-vertical-rhythm)).
