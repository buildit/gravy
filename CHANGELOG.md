# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [2.0.0] - 2018-01-21

### Added

- initialisation mixin `gravy-init`, must be triggered before being able to use anything
- sensible text defaults mixin `gravy-text-defaults`
- `$gravy` configuration map
- unit tests using sass-true and mocha

### Changed

- documentation is now provided by SassDoc
- upgraded stylelint and dependencies
- integrated breakpoint and typi configuration into `$gravy` configuration map
- renamed function `breakpoint` to `gravy-breakpoint`
- renamed mixin `font` to `gravy-font`

### Removed

- modularscale-sass dependency
- normalize-scss dependency
- all vertical rhythm margins
- headers classes
- majority of element styles
- helper classes `is-heading`, `is-secondary`, and `has-baseline-grid`
- removed font sizes variables
- removed `$text-max-width`

## [1.3.0] - 2017-07-28

### Added

- added `CHANGELOG.md`
- added `!default` flag to several vars

### Changed

- updated documentation regarding configuration

### Removed

- removed anchor styling
- removed colours definitons
- removed color attributes from the base styles
- removed colours documentation
- removed `.is-muted` class
- removed `max-width` from `<article>` style
