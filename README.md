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

### Basic variables

there are currently three basic variables:

- `$base-font-size`, currently set to `16px`, sets the font size for the whole project.
- `$base-line-height`, currently set at `1.4` (this is unitless for interoperability reasons), is the default line height.
- `$text-max-width`, currently set at `40em` (`<article>`s break at this width automatically), is the default line break length.

### Typography and Vertical Rhythm

Typography is handled mostly through [typi](https://github.com/zellwk/typi) in conjunction with [modularscale-sass](https://github.com/modularscale/modularscale-sass).

 The main configuration for typi is held in two files:

 - `settings/_modularscale.scss`: where the main modular scale configuration is held, together with some asy to use variables.
 - `settings/_typi.scss`: contains the main list of font-sizes and line heights across the defined [breakpoints](#Breakpoints).
 - `settings/_typefaces.scss`: contans the list of the different typefaces used, these are usually accessed via the `font()` mixin.

 Modularscale requires the base font size and line height to be defined:

    $modularscale: (
      base: $base-font-size,
      ratio: 1.2 // Major Thirds
    );

You can read more about modular scale at <http://www.modularscale.com/>.

Typi map has the following structure:

    $typi: (
      base: (
        null: ($base-font-size, $base-line-height),
        small: (18px),
        large: (20px)
      )
      // Other font maps here
    )

There are two very good articles I would recomment to go through before you start playing around this map:

 - <https://zellwk.com/blog/typi/>
 - <https://zellwk.com/blog/advanced-typi/>

 The other font maps currently defined are:

 - `heading` for all high level headings, as `<h1>`s,
 - `title` for all titles, as `<h2>`s,
 - `subtitle` for all subtitles, as `<h3>`s.

 If you're overriding the map, be sure to extend and define correctly all the entries at the various breakpoints.

 The Typefaces map allows you to define all fonts and their weights.

 These can be accessed using the mixin `font($type, $weight)`, like:

    .my-block {
      @include font('heading', 'bold');
    }

The structure of the map is the following:

    $typefaces: (
      brand: (
        stack: ('Helvetica Neue', Helvetica, Arial, sans-serif),
        weights: (
          light: 300,
          normal: 500,
          bold: 700
        ),
      )
    )

The typefaces currently defined are:

 - `brand`, for all brand-related visualisations,
 - `primary`, the basic text font face,
 - `heading`, for the common heading font face,
 - `monospace`, this is quite easy to guess.

## Development

Be sure to enable [stylelint](https://stylelint.io/) in your preferred IDE/Editor.
