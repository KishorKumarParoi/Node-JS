import http from 'http';

import Module from 'module';

const arr = [1, 2, 3];
console.log(arr);

console.log(http);
console.log(Module);
console.log(Module.builtinModules);
console.log(Module.globalPaths);
console.log(Module.wrapper);
console.log(Module.wrap('console.log("Hello World");'));
console.log(Module.wrap('console.log("Hello World");').length);
console.log(Module.wrap('console.log("Hello World");').indexOf('Hello World'));
console.log(Module.wrap('console.log("Hello World");').indexOf('Hello World'));
console.log(Module.SourceMap);
