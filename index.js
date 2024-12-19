const { metacall, metacall_load_from_file } = require('metacall');

metacall_load_from_file('c', ['cfile.c']);

console.log(metacall('getval',5));