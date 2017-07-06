# Typography and Vertical Rhythm

Typography is handled mostly through [Typi](https://github.com/zellwk/typi) in conjunction with [modularscale-sass](https://github.com/modularscale/modularscale-sass).

## Basic configuration

Be sure to customise the following two variables to your needs:

- `$base-font-size`: [default `16px`], sets the font size for the whole project.
- `$base-line-height`: [default `1.4`] (this is unitless for interoperability reasons), is the default line height.

Additionally set the `$text-max-width` (the default is `40em`) (`<article>`s break at this width automatically), which represents the default line break length.

## Font Faces

Font choices are left to the user to include, either in SASS with `@include` as provided by [Google Fonts](http://fonts.google.com):

    <style>
    @import url('https://fonts.googleapis.com/css?family=Cabin|Roboto+Mono|Roboto+Slab|Roboto:400,500');
    </style>

or in the `<HEAD>` of your HTML:

    <link href="https://fonts.googleapis.com/css?family=Cabin|Roboto+Mono|Roboto+Slab|Roboto:400,500" rel="stylesheet">

Customise the various font-faces stacks and weights as needed:

    // Primary
    $primary-font-stack: ('Roboto', sans-serif);
    $primary-font-weights: (
      regular: 400,
      bold: 500
    );
    // Secondary
    $secondary-font-stack: ('Roboto Slab', serif);
    $secondary-font-weights: (
      regular: 400
    );
    // Heading
    $heading-font-stack: ('Cabin', sans-serif);
    $heading-font-weights: (
      regular: 400
    );
    // Monospace
    $monospace-font-stack: ('Roboto Mono', monospace);
    $monospace-font-weights: (
      regular: 400
    );

If you don't have a different Heading or Secondary font stack, you can just copy over the settings from one another, e.g.:

    $heading-font-stack: $secondary-font-stack;
    $heading-font-weights: $secondary-font-weights;


These typefaces can also be accessed using the mixin `font($type, $weight)`, like:

    .my-block {
      @include font('heading', 'bold');
    }

## Modular Scale

You can read more about modular scale at <http://www.modularscale.com/>.

Once you have correctly set up the variables `$base-font-size` and `$modularscale-ratio` you can setup the various font sizes using the function `ms()`.

The variables currently defined are:

- `$font-1-size`
- `$font-2-size`
- `$font-3-size`
- `$font-4-size`
- `$font-5-size`
- `$font-6-size`
- `$font-7-size`
- `$font-8-size` - this equals to `$base-font-size` or `ms(0)`.
- `$font-9-size`
- `$font-10-size`

where `$font-1-size` is the biggest you can have (i.e. `ms(7)`), `$font-8-size` is the `$base-font-size` or `ms(0)` in modular scale terms, and `$font-10-size` is a 2 step decrement in the modular scale (`ms(-2)`).

All these values can be reset, but be sure to leave them as they're going to be used extensively in order to define the responsive typography set up by typi.

## Responsive Typography

There are two very good articles I would recomment to go through before you start playing around this map:

 - <https://zellwk.com/blog/typi/>
 - <https://zellwk.com/blog/advanced-typi/>

Typi map has the following structure:

    $typi: (
      base: (
        null: ($font-9-size, $base-line-height),
        small: ($font-8-size),
        large: ($font-7-size)
      )
      // Other font maps here
    )

`small` and `large` are the keys defined in the `$breakpoint` map. See the [Breakpoints](breakpoints.md) documentation.

The other typi maps currently defined are:

 - `alpha`
 - `beta`
 - `gamma`
 - `delta`
 - `eta`
 - `big-text`
 - `small-text`

With `alpha` being the biggest font you can get, and `small-text` being the smallest compared to the `base`.

Usually, when defining a new block of text, you would use either `big-text` or `small-text`, while any other should be reserved for headings, titles and subtitles, see [Headings](headings.md) for more information.

    .my-block {
      @include font('heading', 'bold');
      @include typi('small-text');
    }

If you're overriding the map, be sure to extend and define correctly all the entries at the various breakpoints.

## Vertical Rhythm

Achieving a perfect vertical rhythm aligning to the base grid, it's almost impossible, as explained clearly by Zell Liew in [Web Typography is Broken](https://zellwk.com/blog/web-typography-broken/).

Typi allows to set vertical margins automatically based on the line height used in the current context with the function `vr()`.

    .my-block {
      @include font('heading', 'bold');
      @include typi('small-text');
      margin: vr(1) 0;
    }
