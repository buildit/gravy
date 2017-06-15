# Gravy is a SCSS foundation library

**Q:** What is a _foundation library_?

**A:** Is a library that provides basic essential rules, normalisation, basic elements styles, and additional mixins and allows to create a starting point for a UI library.


**Q:** Why Gravy?

**A:** Because it gives flavour to what you have on your plate without much effort... What kind of question is this?

# Technical notes

## Installation

Install the library via npm, the usual way:

    $ npm install @buildit/gravy

If you have [Eyeglass](http://eyeglass.rocks) installed, you can simply include the symbol Gravy exports to your main scss file:

    @include "gravy";

## Dependencies

This library depends on the following libraries:

- [Normalize-scss](https://github.com/JohnAlbin/normalize-scss) as a SCSS module for Normalize.css .
- [Modularscale-sass](https://github.com/modularscale/modularscale-sass) for typography following [Modular Scale](http://modularscale.com) principles.
- [Typi](https://github.com/zellwk/typi) for responsive typography and vertical rhythm.

The dependencies are meant to aleviate the amount of effort to achieve a particular solution. If you feel like there's a reason to ditch a particular dependency in favour of a localised solution, please open a bug request.

## Development

Development for the library should be quite straightfoward... but I need to come up with a good set of guidelines for that. _LOL_

Be sure to enable [stylelint](https://stylelint.io/) in your preferred IDE/Editor.
