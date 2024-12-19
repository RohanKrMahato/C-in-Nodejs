// const { metacall, metacall_load_from_file } = require('metacall');

// metacall_load_from_file('c', ['cfile.c']);

// metacall('getval',5);

const {getval}=require('./cfile.c')

console.log(getval(6));