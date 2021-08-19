# Server State TypeScript Definitions

npm: [`@server-state/types`](https://www.npmjs.com/package/@server-state/types)

[![GitHub](https://img.shields.io/github/license/server-state/types)](LICENSE)
[![Twitter Follow](https://img.shields.io/twitter/follow/server_state?style=social)](https://twitter.com/server_state)

Common, useful TypeScript definitions for use in Server State projects.

## Installation

First, add it as a development dependency to your project:

```shell
npm install --save-dev @server-state/types
```

After the installation, check out the provided types:

```ts
import { Extension } from '@server-state/types';

const myExtension: Extension<MyConfig> = (config, api) => {
	//...
	return {
		name: 'MyExtension'
	};
};
```

For all full list of types, check out the reference:
https://types.server-state.tech/

## Package structure

```
.
├── sample (samples for the types, useful for testing the types)
│   ├── sample.ts
│   ├── sample-js.js
│   └── tsconfig.json
├── src
│   ├── index.ts
│   └── [...]
├── types (built in build script)
│   ├── index.d.ts
│   └── [...]
├── CHANGELOG.md (DO NOT TOUCH! auto-generated changelog for the package)
├── LICENSE
├── package.json
├── README.md (you're here :P)
└── [...] (configuration files, etc.)
```

## Contributing

Coming soon :wink:

## Contributors

Thank you to all contributors of this repository:

[![Contributors](https://contrib.rocks/image?repo=server-state/types)](https://github.com/server-state/types/graphs/contributors)

Made with [contributors-img](https://contrib.rocks).

## About

This is part of [Server State](https://www.server-state.tech/), a project by [fliegwerk](https://www.fliegwerk.com/).
