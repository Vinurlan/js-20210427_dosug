/**
 * sortStrings - sorts array of string by two criteria "asc" or "desc"
 * @param {string[]} arr - the array of strings
 * @param {string} [param="asc"] param - the sorting type "asc" or "desc"
 * @returns {string[]}
 */
export function sortStrings(arr, param = 'asc') {
  const newArr = [...arr];
  const oOption = {
    'asc': {seq: 'ab', case: 'upper'},
    'desc': {seq: 'ba', case: 'lower'}
  }

  return newArr.sort((a, b) => {
    const oSort = {a, b};
    return oSort[oOption[param].seq[0]].localeCompare(oSort[oOption[param].seq[1]], ['ru', 'en'], { caseFirst: oOption[param].case });
  });
}
