/**
 * trimSymbols - removes consecutive identical symbols if they quantity bigger that size
 * @param {string} string - the initial string
 * @param {number} size - the allowed size of consecutive identical symbols
 * @returns {string} - the new string without extra symbols according passed size
 */
export function trimSymbols(string, size) {
  const strArr = string.split('');
  let resStr = '';
  let acc = 1;
  if (size === 0) {
    return '';
  }

  if (size === undefined) {
    return string;
  }

  strArr.reduce((prev, curr) => {
    if (curr === prev && acc < size) {
      acc += 1;
      resStr += curr;
      return curr;
    } else if (curr === prev && acc >= size) {
      return curr;
    } else if (curr !== prev) {
      acc = 1;
      resStr += curr;
      return curr;
    }
  }, '');
  return resStr;
}
