[![CircleCI](https://circleci.com/gh/buildit/gravy/tree/master.svg?style=svg)](https://circleci.com/gh/buildit/gravy/tree/master)

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

- **[Variables](docs/variables.md)**
- **[Typography and Vertical Rhythm](docs/typography-and-vertical-rhythm.md)**
- **[Headings](docs/headings.md)**
- **[Mixins and Functions](docs/mixins-and-functions.md)**
- **[Helpers](docs/helpers.md)**

## Contribute & support

You can contribute to the development of this library in many ways:

- submitting [bug reports](https://github.com/buildit/gravy/issues),
- opening [PRs](https://github.com/buildit/gravy/pulls),
- getting in touch with our core developers if none the above works _(we'll try to answer all of your love letters!)_.

**NOTE** Be sure to enable [stylelint](https://stylelint.io/) in your preferred IDE/Editor, or run `npm test` before pushing and opening a PR: any PR submitted that doesn't lint correctly will be rejected.

