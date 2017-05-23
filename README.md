Twisttext
=========

[![Greenkeeper badge](https://badges.greenkeeper.io/arufian/twisttext.svg)](https://greenkeeper.io/)

Twist your text. Use it as command line or add it as a module.

[![NPM info](https://nodei.co/npm/twisttext.png?downloads=true)](https://nodei.co/npm/twisttext.png?downloads=true)

[![Travis build status](https://travis-ci.org/arufian/twisttext.png?branch=master)](https://travis-ci.org/arufian/twisttext)
[![dependencies](https://david-dm.org/arufian/twisttext.png)](https://david-dm.org/arufian/twisttext)

## Installation

### global

	npm install twisttext -g

### add as a module

	npm install twisttext --save

## Usage

### command line
	Usage: twisttext [options] <your_text>
	options:
	  -h, --help       show usage
	  -t, --time       in miliseconds. default: 2000
					   input 'infinite' to infinite time

### example
	twisttext hello

### module
	
	var twisttext = require('twisttext')
      twist = twisttext.twist,
      flip = twisttext.flip;

  	var str = 'Hello World',
      twistedEven = twist(str, true),
      twistedOdd = twist(str, false),
      flipped = flip(str);

  	console.log('str', str, 'twisted even', twistedEven, 'twisted odd', twistedOdd);

## Tests

	npm test

## Contributing

In lieu of a formal styleguide, take care to maintain the existing coding style.
Add unit tests for any new or changed functionality. Lint and test your code.

## Release History

* 0.1.0 Initial release