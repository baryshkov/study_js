// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */

/*
** TODO: NAHUY PEREDELAT.
 */
module.exports = function (command) {
    var arr = command.split(' ');
    var commandName = arr[0];
    switch (commandName) {
        case 'ADD':
            add(arr);
            break;
        case 'REMOVE_PHONE':
            return(remove(arr));
        case 'SHOW':
            return convert();
    }

    function convert() {
        var resArray = [];
        var j = 0;
        var array = Object.keys(phoneBook).map(function (key) {
            return [key, phoneBook[key]];
        });
        // console.log('lol', array);
        for (let i = 0; i < array.length; i++, j += 2) {
            if (array[i][1] !== null) {
                resArray[i] = array[i][0] + ': ' + array[i][1];
            }
        }
        return resArray.sort();
    }

    function add(arr) {
        if (arr[2].includes(',')) {
            arr[2] = arr[2].split(',').join(', ');
        }
        if (phoneBook[arr[1]] === undefined || phoneBook[arr[1]] === null)
            phoneBook[arr[1]] = arr[2];
        else
            phoneBook[arr[1]] += ', ' + arr[2];
        return convert();
    }
    function remove(arr) {
        function isEmpty(obj) {
            for (let key in obj) {
                return false;
            }
            return true;
        }
        var newStr;
        var counter = 0;
        let costil = 0;
        if (isEmpty(phoneBook))
            return false;
        for (var key in phoneBook) {
            if (phoneBook[key] !== null && phoneBook[key].includes(arr[1])) {
                if (phoneBook[key].includes(',')) {
                    newStr = phoneBook[key].split(', ').filter(function (name) {
                        if (name === arr[1])
                            costil++;
                        return name !== arr[1];
                    }).join(', ');
                    phoneBook[key] = newStr;
                }
                else {
                    phoneBook[key] = null;
                }
                return costil > 0;
            }
            counter++;
        }
        if (counter === 0)
            return false;
    }
};