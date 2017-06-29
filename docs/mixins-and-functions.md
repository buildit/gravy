# Mixins

Found in `sass/mixins/`.

## `font($type, $weight: 'regular')`

### Parameters

- `$type`: the named typeface to use, possible values are `heading`, `brand`, `primary`, `monospace`.
- `$weight`: the named weight of the typeface to use. Possible values are `light`, `regular`, `bold`, defaults to `regular`.

### Description

Sets the `font-family` and the `font-weight` for a specific `$type` of typeface. E.g.

    .my-block {
      @include font('heading', 'bold');
    }

`$type` can be any of the following values:

Also see `sass/settings/_typefaces.scss` for a comprehensive list of typefaces and their current definition.

# Functions

Found in `sass/functions/`.

## `breakpoint($size)`

### Parameters

- `$size`: named size of the breakpoint, can be either `small` or `large`.

### Definition

Returns the breakpoint given the named size for it (e.g. `small` or `large`).

Also see `sass/settings/_breakpoints.scss` for a list of available named breakpoints and their configuration.
