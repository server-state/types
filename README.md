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
