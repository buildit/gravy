# Variables

## Basic variables

Found in `sass/settings/_variables.scss`.

There are currently three basic variables:

- `$base-font-size`: [default `16px`], sets the font size for the whole project.
- `$base-line-height`: [default `1.4`] (this is unitless for interoperability reasons), is the default line height.
- `$text-max-width`: [default `40em`] (`<article>`s break at this width automatically), is the default line break length.

## Breakpoints

Found in `sass/settings/_breakpoints.scss`.

The format is the following:

    $breakpoints: (
      small: 600px,
      large: 1200px
    );

each key (`small`, `large`) is completely arbitrary, but once set, be sure to reference to them every time it's needed, especially when configuring typi (see [following section](#Typography_and_Vertical_Rhythm)).

## Colours

Found in `sass/settings/_colours.scss`.

These are not currently used anywhere else but in this file.

The file is split into three main sections:

- Brand Colours
  - `$color-black`
  - `$color-lime`
  - `$color-orange`
  - `$color-lime`
  - `$color-blue`
- Shades of Brand Colours, with `-light` and `-dark` variations
- Shades of Grey:
  - `$color-white`
  - `$color-grey-light`
  - `$color-grey-mid`
  - `$color-grey-dark`
- Other colours:
  - `$color-notice`
  - `$color-error`
  - `$color-success`
- Shades of Other Colours, with `-light` and `-dark` variations.

The `-light` and `-dark` variations highlighted above are calculated dynamically using the variable `$amount` defaulting to `10`.

## Typography and Vertical Rhythm

see [Typography and Vertical Rhythm](typography-and-vertical-rhythm.md).
