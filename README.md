# Bitwise mask

[![Build Status](https://travis-ci.org/vaalentin/bitwise-mask.svg?branch=master)](https://travis-ci.org/vaalentin/bitwise-mask)

## Installation

```sh
$ npm install --save bitwise-mask
```

## Usage

```js
import * as bitmask from 'bitwise-mask';

const Directions = {
  TOP: 1 << 0,
  RIGHT: 1 << 1,
  BOTTOM: 1 << 2,
  LEFT: 1 << 3
}

Directions.TOP_RIGHT = bitmask.combine(Directions.TOP, Directions.RIGHT);

let mask = bitmask.create();

mask = bitmask.add(Directions.TOP, Directions.RIGHT);

bitmask.contains(mask, Directions.TOP_RIGHT); // true
```

## API

#### `mask = create(...fields)`

Create a `mask` with the given `fields`.

#### `field = bitmask.combine(...fields)`

Combine `fields` into one `field`.

#### `mask = bitmask.add(mask, ...fields)`

Add `fields` to `mask`.

#### `mask = bitmask.remove(mask, ...fields)`

Remove `fields` from `mask`.

#### `bitmask.contains(mask, ...fields)`

Check if the the `mask` contains the `fields` and returns a `boolean.`

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/bitwise-mask/blob/master/LICENSE.md) for more details.
