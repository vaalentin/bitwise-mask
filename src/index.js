/**
 * @function create
 * @param {...uint} fields
 * @returns {uint}
 */
export function create(...fields) {
  return combine(...fields);
}

/**
 * @function combine
 * @param {...uint} fields
 * @returns {uint}
 */
export function combine(...fields) {
  let finalField = 0;

  for(let field of fields) {
    finalField |= field;
  }

  return finalField;
}

/**
 * @function add
 * @param {uint} mask
 * @param {...uint} fields
 * @returns {uint}
 */
export function add(mask, ...fields) {
  for(let field of fields) {
    mask |= field;
  }

  return mask;
}

/**
 * @function remove
 * @param {uint} mask
 * @param {...uint} fields
 * @returns {uint}
 */
export function remove(mask, ...fields) {
  for(let field of fields) {
    mask &= ~field;    
  }

  return mask;
}

/**
 * @function contains
 * @param {uint} mask
 * @param {...uint} fields
 * @returns {uint}
 */
export function contains(mask, ...fields) {
  for(let field of fields) {
    if((mask & field) !== field) {
      return false;
    }
  }

  return true;
}
