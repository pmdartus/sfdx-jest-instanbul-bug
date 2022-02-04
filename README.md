## Setup

```sh
yarn
yarn test:unit:coverage
```

## Result

```
➜  test yarn test:unit:coverage
yarn run v1.22.10
$ sfdx-lwc-jest --coverage --skipApiVersionCheck
 FAIL  force-app/main/default/lwc/foo/__tests__/foo.spec.js
  ● Test suite failed to run

    /private/tmp/test/force-app/main/default/lwc/foo/foo.js: don't know how to turn this value into a node

      at valueToNode (node_modules/@babel/types/lib/converters/valueToNode.js:98:9)
      at Object.valueToNode (node_modules/@babel/types/lib/converters/valueToNode.js:92:58)
      at Object.exit (node_modules/babel-plugin-istanbul/node_modules/istanbul-lib-instrument/src/visitor.js:700:36)
      at PluginPass.exit (node_modules/babel-plugin-istanbul/lib/index.js:158:38)
      at newFn (node_modules/@babel/traverse/lib/visitors.js:177:21)
      at NodePath._call (node_modules/@babel/traverse/lib/path/context.js:53:20)
      at NodePath.call (node_modules/@babel/traverse/lib/path/context.js:40:17)
      at NodePath.visit (node_modules/@babel/traverse/lib/path/context.js:109:8)
      at TraversalContext.visitQueue (node_modules/@babel/traverse/lib/context.js:103:16)
      at TraversalContext.visitSingle (node_modules/@babel/traverse/lib/context.js:77:19)

Running coverage on untested files...Failed to collect coverage from /private/tmp/test/force-app/main/default/lwc/foo/foo.js
ERROR: /private/tmp/test/force-app/main/default/lwc/foo/foo.js: don't know how to turn this value into a node
STACK: Error: /private/tmp/test/force-app/main/default/lwc/foo/foo.js: don't know how to turn this value into a node
    at valueToNode (/private/tmp/test/node_modules/@babel/types/lib/converters/valueToNode.js:98:9)
    at Object.valueToNode (/private/tmp/test/node_modules/@babel/types/lib/converters/valueToNode.js:92:58)
    at Object.exit (/private/tmp/test/node_modules/babel-plugin-istanbul/node_modules/istanbul-lib-instrument/src/visitor.js:700:36)
    at PluginPass.exit (/private/tmp/test/node_modules/babel-plugin-istanbul/lib/index.js:158:38)
    at newFn (/private/tmp/test/node_modules/@babel/traverse/lib/visitors.js:177:21)
    at NodePath._call (/private/tmp/test/node_modules/@babel/traverse/lib/path/context.js:53:20)
    at NodePath.call (/private/tmp/test/node_modules/@babel/traverse/lib/path/context.js:40:17)
    at NodePath.visit (/private/tmp/test/node_modules/@babel/traverse/lib/path/context.js:109:8)
    at TraversalContext.visitQueue (/private/tmp/test/node_modules/@babel/traverse/lib/context.js:103:16)
    at TraversalContext.visitSingle (/private/tmp/test/node_modules/@babel/traverse/lib/context.js:77:19)
----------|---------|----------|---------|---------|-------------------
File      | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s
----------|---------|----------|---------|---------|-------------------
All files |       0 |        0 |       0 |       0 |
----------|---------|----------|---------|---------|-------------------
Test Suites: 1 failed, 1 total
Tests:       0 total
Snapshots:   0 total
Time:        1.845 s
Ran all test suites.
error Command failed with exit code 1.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.
```