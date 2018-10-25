[![CircleCI](https://circleci.com/gh/buildit/gravy/tree/master.svg?style=svg)](https://circleci.com/gh/buildit/gravy/tree/master)

# Gravy is a SCSS foundation library

**Q:** What is a _foundation library_?

**A:** Is a library that provides basic essential functions and mixins to solve some basic requirements for any project.

**Q:** Why Gravy?

**A:** Because it gives flavour to what you have on your plate without much effort... 

**Q:** What does Gravy provide?

**A:** _For now_, typographical enhancements (suggestions and feature requests are always welcome).

---

# Technical notes

## Dependencies

This library depends on the following libraries:

- [Typi](https://github.com/zellwk/typi) for responsive typography and vertical rhythm.

The dependencies are meant to aleviate the amount of effort to achieve a particular solution. If you feel like there's a reason to ditch a particular dependency in favour of a localised solution, please open a bug request.

Additional dependencies needs to be handled by your own project, you most likely want to have the following installed and configured before Gravy:

- [Normalize-scss](https://github.com/JohnAlbin/normalize-scss) as a SCSS module for Normalize.css .
- [Modularscale-sass](https://github.com/modularscale/modularscale-sass) for typography following [Modular Scale](http://modularscale.com) principles.


## Installation

Install the library via npm, the usual way:

    $ npm install @buildit/gravy

If you have [Eyeglass](http://eyeglass.rocks) or [`sass-module-importer`](https://github.com/lucasmotta/sass-module-importer) installed, you can simply include the symbol Gravy exports to your main scss file:

```scss
@include "gravy";
```

Otherwise, if you don't want to customise anything, just include the whole path:

```scss
@include "node_modules/gravy/sass/gravy";
```

You can then configure it by creating the [Gravy configuration map](#Configuration).

Once that's done, you need to call the initialisation mixin that will generate the necessary configuration maps and base CSS output:

```scss
@include gravy-init;
```

## Configuration

The configuration comes simply by setting the required sub-maps in the main `$gravy` map, you can set one or more of the following keys in you project, `gravy-init` will fill in the rest with the following default values.

```scss
$gravy: (
  base-font-size: 16px,
  base-line-height: 1.4,
  breakpoints: (
    small: 600px,
    large: 1200px
  ),
  typefaces: (
    primary: (
      stack: ('Arial', sans-serif),
      weights: (
        regular: 'regular',
        bold: 'bold'
      )
    )
  ),
  typi: (
    base: (
      null: (16px, 1.4),
      small: (16px),
      large: (19px)
    )
  )
);
```

More technical documentation in HTML format can be found in the `docs/` folder.

### Generated and reserved variables

`gravy-init` will parse the `$gravy` config map, and generate some additional non-scoped variables that are going to be used by either the dependencies or some of the mixins available by the tool.

- `$base-font-size`: handy variable for the size in pixels of the base font size.
- `$base-line-height`: unitless variable for the size of the line height.
- `$breakpoints`: will contain a list of named breakpoints. These will have to be used in the configuration map of `typi` that can be retrieved using the mixin `gravy-breakpoint($name)`.
- `$typefaces`: will contain a list of named font faces, e.g. 'primary', 'headings', ...; you can later output the correct `font-family` and `font-weight` using the mixin `gravy-font($name, $weight: 'regular')` each font face contains the following keys: 
  - `stack`: a map containing the list of font families to use.
  - `weights`: a list of weights for the selected font, like 'regular', 'bold', ... .
- `$typi`: the typi configuration map. Refer to [typi documentation](https://github.com/zellwk/typi/blob/master/README.md) for information on how this works. You'll be then able to use the mixin `typi($name)` to generate the needed `font-size` and `line-height` at different breakpoints.

### Functions

- `gravy-breakpoint($name)`: outputs the actual size given the name set in the `breakpoint` map (see [Generated and reserved variables](#Generated-and-reserved-variables) section).

### Mixins

- `gravy-init`: does the initialisation of all the needed functions, needs to be called after all the needed maps have been configured and before calling any other function or mixin.
- `gravy-font($name)`: generates the `font-family` and `font-weight` based on the `typefaces` map (see [Generated and reserved variables](#Generated-and-reserved-variables) section).

#### Modularscale and typi font sizes

If you want to use to use [Modularscale](http://www.modularscale.com/), you can do so by installing `modularscale-sass` via npm, and configure it before calling `typi-init`. 

## Contribute & support

You can contribute to the development of this library in many ways:

- submitting [bug reports](https://github.com/buildit/gravy/issues),
- opening [PRs](https://github.com/buildit/gravy/pulls),
- getting in touch with our core developers if none the above works _(we'll try to answer all of your love letters!)_.

**NOTE** Be sure to enable [stylelint](https://stylelint.io/) in your preferred IDE/Editor, or run `npm test` before pushing and opening a PR: any PR submitted that doesn't lint correctly will be rejected.
