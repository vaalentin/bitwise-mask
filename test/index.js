import test from 'tape';
import * as bitmask from '../src/';

const Directions = {
  TOP: 1 << 0,
  RIGHT: 1 << 1,
  BOTTOM: 1 << 2,
  LEFT: 1 << 3
}

test('should be able to create a bitmask', t => {
  t.plan(3);

  let mask;

  mask = bitmask.create();

  t.equal(mask, 0, 'mask is 0 without parameters');

  mask = bitmask.create(Directions.TOP);

  t.equal(mask, Directions.TOP, 'a field can be passed');

  mask = bitmask.create(Directions.TOP, Directions.RIGHT);

  t.equal(mask, Directions.TOP | Directions.RIGHT, 'if several fields are passed they are added')
});

test('should be able to add fields', t => {
  t.plan(2);

  let mask = bitmask.create();

  mask = bitmask.add(mask, Directions.TOP);
  mask = bitmask.add(mask, Directions.RIGHT);

  t.equal(mask, Directions.TOP | Directions.RIGHT, 'can pass a single field');

  mask = bitmask.add(mask, Directions.BOTTOM, Directions.LEFT);

  t.equal(mask, Directions.TOP | Directions.RIGHT | Directions.BOTTOM | Directions.LEFT, 'can pass several fields');
});

test('should be able to remove fields', t => {
  t.plan(2);

  let mask = bitmask.create(Directions.TOP | Directions.RIGHT | Directions.LEFT);

  mask = bitmask.remove(mask, Directions.LEFT, 'can pass a single field');

  t.equal(mask, Directions.TOP | Directions.RIGHT);

  mask = bitmask.remove(mask, Directions.TOP, Directions.RIGHT);

  t.equal(mask, 0, 'can pass several fields');
});

test('should be able to combine fields', t => {
  t.plan(1);

  let TOP_RIGHT = bitmask.combine(Directions.TOP, Directions.RIGHT);

  t.equal(TOP_RIGHT, Directions.TOP | Directions.RIGHT);
})

test('should be able to check if a mask contains field', t => {
  t.plan(4);
  
  let mask = bitmask.create(Directions.TOP, Directions.RIGHT, Directions.LEFT);

  const TOP_LEFT = bitmask.combine(Directions.TOP, Directions.LEFT);
  const BOTTOM_LEFT = bitmask.combine(Directions.BOTTOM, Directions.LEFT);

  t.ok(bitmask.contains(mask, Directions.TOP), 'check for single field');
  t.ok(bitmask.contains(mask, TOP_LEFT), 'check for combination');
  t.notOk(bitmask.contains(mask, Directions.BOTTOM), 'check for single field');
  t.notOk(bitmask.contains(mask, BOTTOM_LEFT), 'check for combination');
});

