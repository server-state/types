# @server-state/types
Typescript Type Declarations that are common for Server State projects.

Types are defined in the global `ServerState` namespace.

## Installation
### Using `npm`
```bash
npm install --save-dev @server-state/types
```

### Using `yarn`
```bash
yarn add -D @server-state/types
```

### Locally

*This is not recommended as updates are not automated this way*

Download the `types.zip` from the latest release and extract it in your project. This creates a `types` folder with an `index.d.ts` file.

Be sure to include the relative path to the `types` folder in your `tsconfig.json`'s or `jsconfig.json`'s `types` field:

```json5
{
    "compilerOptions": {
        // [...]
        "types": [
            // [...]
            "./types/"
        ]
    }
    // [...]
}
```

You can take a look at the `sample` directory for an example.

## Usage
When the types are set up, you're able to use them in JavaScript files (using doc comments) and Typescript files. In both contexts, the `ServerState` namespace including the common types with full documentation will be available to you.

### Inside Typescript
When the types are set up in the way described above, you'll be ready to go for typescript. The `ServerState` module with all common types is then globally available to you, meaning you can do something like:

```typescript
let a: ServerState.ServerBase.Config;

console.log(a);
```

Please refer to [`sample/ts-sample.ts`](sample/ts-sample.ts) for some more examples.

### Inside JavaScript
To use the TypeScript language service, you'll need to add a `tsconfig.json` with `"allowJS": true, "checkJS": true` or a `jsconfig.json` file in your project folder. Then, you can use the types in your JSDoc comments in the following way:

```js
/**
 * @type {ServerState.SMF}
 */
let a;

console.log(a);
```

Please refer to [`sample/js-sample.js`](sample/js-sample.js) for some more examples.

## Declared types
For a full overview of the declared types, please refer to https://server-state.github.io/types.
