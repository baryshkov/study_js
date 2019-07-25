/**
 * @param {Array} collection
 * @params {Function[]} – Функции для запроса
 * @returns {Array}
 */
function query(collection) {
    let argv = [].slice.call(arguments);
    for (let i = 1; i < argv.length; i++) {
        if (argv[i].name === 'filter') {
            let apply = argv[i];
            collection = apply(collection);
        }
    }
    for (let i = 1; i < argv.length; i++) {
        if (argv[i].name === 'select') {
            let apply = argv[i];
            collection = apply(collection);
        }
    }
    return collection;
}

/**
 * @params {String[]}
 */
function select() {
    var fields = [];
    for (let i = 0; i < arguments.length; i++) {
        fields[i] = arguments[i];
    }
    return function select(collection) {
        let newCollection = [];
        for (let i = 0; i < collection.length; i++) {
            var newObj = {};
            for (let j = 0; j < fields.length; j++) {
                newObj[fields[j]] = collection[i][fields[j]];
            }
            newCollection.push(newObj);
        }
        return newCollection;
    }
}

/**
 * @param {String} property – Свойство для фильтрации
 * @param {Array} values – Массив разрешённых значений
 */
function filterIn(property, values) {
    return function filter(collection) {
        let newCollection = [];
        for (let i = 0; i < collection.length; i++) {
            var newObj = {};
            for (let j = 0; j < values.length; j++) {
                if (collection[i][property] === values[j]) {
                    newObj = collection[i];
                    newCollection.push(newObj);
                }
            }
        }
        return newCollection;
    }
}

module.exports = {
    query: query,
    select: select,
    filterIn: filterIn
};
