# Changelog

## [0.5.0](https://www.github.com/server-state/types/compare/v0.4.0...v0.5.0) (2021-09-25)


### ⚠ BREAKING CHANGES

* **extensions:** `ExtensionObject.schema?: GraphQLSchema` got replaced by `ExtensionObject.typeDefs?: TypeSource`.
* **extensions:** `ExtensionObject.resolvers?: any` is now `ExtensionObject.resolvers?: IResolvers`. This shouldn't cause any breaking changes for working extensions, but narrows the type to only valid resolver functions, meaning invalid extensions could break from this change.

### Features

* **extensions:** :sparkles: Make `onRemove` callback function optional in `ExtensionObject` ([ad1e44d](https://www.github.com/server-state/types/commit/ad1e44d4096016c3c326c10f3f0f9e53d87623d0))


### Bug Fixes

* **extensions:** :boom: Fix `ExtensionObject.resolvers` type ([977d710](https://www.github.com/server-state/types/commit/977d7103f0cb2a7eab0d4b443eceebb5e9b8f7c1))
* **extensions:** :boom: Rename `ExtensionObject.schema` to `ExtensionObject.typeDefs` ([977d710](https://www.github.com/server-state/types/commit/977d7103f0cb2a7eab0d4b443eceebb5e9b8f7c1))


### meta

* Multiple changes ([977d710](https://www.github.com/server-state/types/commit/977d7103f0cb2a7eab0d4b443eceebb5e9b8f7c1))

## [0.4.0](https://www.github.com/server-state/types/compare/v0.3.1...v0.4.0) (2021-09-25)


### Features

* :sparkles: Allow extension functions to be asynchronous (returning a `Promise<ExtensionObject>`) ([a957259](https://www.github.com/server-state/types/commit/a957259355f2617ad090f04afa367c47510bb4f2))

### [0.3.1](https://www.github.com/server-state/types/compare/v0.3.0...v0.3.1) (2021-09-20)


### Bug Fixes

* :bookmark: Re-release to ensure consistency across registries ([6085013](https://www.github.com/server-state/types/commit/6085013130100ba9091661a204b02e8ce45087ff))

## [0.3.0](https://www.github.com/server-state/types/compare/v0.2.0...v0.3.0) (2021-09-20)


### Features

* :tada: Relaunch initial commit ([dc6f69d](https://www.github.com/server-state/types/commit/dc6f69d7582f38a3ad1f77b67e073b116cc45f08))
* Add types from the Extension API ([43dcbce](https://www.github.com/server-state/types/commit/43dcbcec9c46d4c252cdd75a319e07f16d52ea72))
* Update Extension API Types ([13ad425](https://www.github.com/server-state/types/commit/13ad4253b19b403c0e8e4282848f03472a6068ba))


### Bug Fixes

* **extensions:** :ambulance: Fix wrong types and add missing docs to Extension API types ([a4661d0](https://www.github.com/server-state/types/commit/a4661d0e41bd90553676b648550f80c0ee2704a9))
* Fix `async` problems in Extension API Types ([3d0b6c6](https://www.github.com/server-state/types/commit/3d0b6c6dfe93b034a5f7cbafaeee800582505455))
