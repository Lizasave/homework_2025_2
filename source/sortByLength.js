/**
 * Функция, определяющая максимальное число в массиве
 * @param {Array<String>} strings - массив строк
 *
 * @example
 * // returns ["ant", "bat", "cat", "dog"]
 * sortByLength(["cat", "bat", "ant", "dog"])
 *
 * @returns {Array<String>}
 */
const sortByLength = strings => {
    let arrSort = strings.slice();
    return arrSort.sort((a,b) => {
        if (a.length === b.length) {
            return a.localeCompare(b);
        }
        return a.length - b.length;
    })
}