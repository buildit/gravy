# Colours

Found in `sass/settings/_colours.scss`.

These are not currently used anywhere else but in this file.

The file is split into three main sections:

- Brand Colours
  - `$color-brand-black`
  - `$color-brand-lime`
  - `$color-brand-orange`
  - `$color-brand-lime`
  - `$color-brand-blue`
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

The `-light` and `-dark` variations highlighted above are calculated dynamically using the variable `$color-shade-amount` defaulting to `10`.
