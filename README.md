# Gravy is a SCSS foundation library

**Q:** What is a _foundation library_?

**A:** Is a library that provides basic essential rules, normalisation, basic elements styles, and additional mixins and allows to create a starting point for a UI library.


**Q:** Why Gravy?

**A:** Because it gives flavour to what you have on your plate without much effort... What kind of question is this?

# Technical notes

## Dependencies

This library depends on the following libraries:

- [Normalize-scss](https://github.com/JohnAlbin/normalize-scss) as a SCSS module for Normalize.css .
- [Modularscale-sass](https://github.com/modularscale/modularscale-sass) for typography following [Modular Scale](http://modularscale.com) principles.
- [Typi](https://github.com/zellwk/typi) for responsive typography and vertical rhythm.

The dependencies are meant to aleviate the amount of effort to achieve a particular solution. If you feel like there's a reason to ditch a particular dependency in favour of a localised solution, please open a bug request.

## Installation

Install the library via npm, the usual way:

    $ npm install @buildit/gravy

If you have [Eyeglass](http://eyeglass.rocks) installed, you can simply include the symbol Gravy exports to your main scss file:

    @include "gravy";

Once that's done, you can start configuring it by overriding the needed variables and maps.

## Configuration

The configuration has been split in different section to make it more easy to follow.

### Breakpoints

Breakpoints are defined in `settings/_breakpoints.scss` in the following format:

    $breakpoints: (
      small: 600px,
      large: 1200px
    );

each key (small, large) is completely arbitrary, but once set, be sure to reference to them every time it's needed, especially when configuring typi (see [following section](#Typography_and_Vertical_Rhythm)).

### Typography and Vertical Rhythm

Typography is handled mostly through [typi](https://github.com/zellwk/typi) in conjunction with [modularscale-sass](https://github.com/modularscale/modularscale-sass).

There are two very good articles I would recomment to go through before you start hacking your way around:
 - <https://zellwk.com/blog/typi/>
 - <https://zellwk.com/blog/advanced-typi/>

 The main configuration for typi is held in two files:

 - `settings/_modularscale.scss`: where the main modular scale configuration is held, together with some asy to use variables.
 - `settings/_typi.scss`: contains the main list of font-sizes and line heights across the defined [breakpoints](#Breakpoints).
 - `settings/_typefaces.scss`: contans the list of the different typefaces used, these are usually accessed via the `font()` mixin.

## Development

Be sure to enable [stylelint](https://stylelint.io/) in your preferred IDE/Editor.
