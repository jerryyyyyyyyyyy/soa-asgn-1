// MODULES, only share minimum, as needed/required.

/**Another option is:
 * const {asad}
 * const {liaqat}
 */
 const names = require('./3-names') // includes where the module is coming from.
 const sayHi = require('./4-seconmod') //importing function 
 console.log(names);
 
 sayHi('Lenovo')
 // another option
 sayHi(names.asad)
 sayHi(names.liaqat)