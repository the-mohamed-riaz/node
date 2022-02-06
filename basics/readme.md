# NODE vs Browser

| NODE | BROWSER |
|-|-|
| Has no DOM | Has DOM | 
| Has no Window (Window objects you get in Browsers) | Has window | 
| Server side apps (No GUI, only logics) | Interactive apps (Gui) | 
| File System | No File system | 
| Versions (Node version) | Fragmentation (Based on user's browser engine) | 
| CommonJS | ES6 Module | 

## REPL (Read Eval Print Loop) mode
- Enter REPL mode of node by entering the following command


  ```shell
  node
  ```
  This is more like a interactive node shell/terminal, incase you want to try/code complex logics plz use node CLI

## Node CLI 
- Writing code insome file and later running them, such workflow is referred as node cli

### Check node version

```shell
node --version
```

### GLOBAL VARIABLES

node has many globle variables available for developers to play with.
Some major global variables include
  - `__dirname` -> path to current directory
  - `__filename` ->  file name
  - `require` -> used to import modules, file, bla bla bla
  - `module` -> info about current module (aka File)
  - `process` -> info on where the program is being executed


### MODULES

When you start coding, you will definitely endup with long piles of code. One way of keeping code clean is via breaking the big chunk of your source code into seperate modules(aka files).

EXAMPLES
****
[Basics on import and export of modules](./1_main.js)

There are other modules that come along with node
 - OS module
 - Path module