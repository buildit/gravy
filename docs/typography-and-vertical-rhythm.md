# Typography and Vertical Rhythm

Typography is handled mostly through [Typi](https://github.com/zellwk/typi) in conjunction with [modularscale-sass](https://github.com/modularscale/modularscale-sass).

 The main configuration for Typi is held in two files:

 - `settings/_modularscale.scss`: where the main modular scale configuration is held, together with some asy to use variables.
 - `settings/_typi.scss`: contains the main list of font-sizes and line heights across the defined [breakpoints](#Breakpoints).

Additionally a map of available typefaces is provided:

 - `settings/_typefaces.scss`: contans the list of the different typefaces used, these are usually accessed via the `font()` mixin.

Modularscale requires the **base font size** and **line height** to be defined:

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
      ),
      // other typefaces follow
    )

The typefaces currently defined are:

 - `brand`, for all brand-related visualisations,
 - `primary`, the basic text font face,
 - `heading`, for the common heading font face,
 - `monospace`, this is quite easy to guess.
