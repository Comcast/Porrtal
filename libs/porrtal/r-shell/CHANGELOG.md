# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.15.0](https://github.com/Comcast/Porrtal/compare/v0.14.1...v0.15.0) (2024-04-06)


### Features

* **@porrtal/r-shell-blueprint:** tab arrangement 'hidden' working ([8180d34](https://github.com/Comcast/Porrtal/commit/8180d34f3c8e407dd2bd695b883ce2992c015cc7))
* **@porrtal/r-shell, @porrtal/r-shell-material:** cleanup approach for making tabs visible ([45bf003](https://github.com/Comcast/Porrtal/commit/45bf0039590aa698aa072d18ab2b80bf42f5d004))
* **@porrtal/r-shell:** hide footer until it is implemented ([21029e9](https://github.com/Comcast/Porrtal/commit/21029e9cecf146264e1316cb217e8ebb31a227b8))





## [0.14.1](https://github.com/Comcast/Porrtal/compare/v0.14.0...v0.14.1) (2024-03-18)


### Bug Fixes

* **@porrtal/r-*:** specify all dependencies are external (peer) dependencies ([4f68dc5](https://github.com/Comcast/Porrtal/commit/4f68dc5605154110aa3683d2dad67f04fca8f896))





# [0.14.0](https://github.com/Comcast/Porrtal/compare/v0.13.0...v0.14.0) (2024-03-12)


### Bug Fixes

* **@porrtal/r-shell, @porrtal/a-shell:** fix bug in "copy link" and increase deep link launch delay for react ([9c63638](https://github.com/Comcast/Porrtal/commit/9c63638d8c8287437e8a806efa6c7af5b5cc97d3))





# [0.13.0](https://github.com/Comcast/Porrtal/compare/v0.12.1...v0.13.0) (2024-03-02)

**Note:** Version bump only for package @porrtal/r-shell





## [0.12.1](https://github.com/Comcast/Porrtal/compare/v0.12.0...v0.12.1) (2023-12-07)

**Note:** Version bump only for package @porrtal/r-shell

# [0.12.0](https://github.com/Comcast/Porrtal/compare/v0.11.0...v0.12.0) (2023-11-30)

**Note:** Version bump only for package @porrtal/r-shell

# [0.11.0](https://github.com/Comcast/Porrtal/compare/v0.10.0...v0.11.0) (2023-11-21)

### Features

- **workspace:** migrate to nx 17.1.2 ([1cc3048](https://github.com/Comcast/Porrtal/commit/1cc3048b60a9eb41bb1512fc4f448ee6feb85dff))

# [0.10.0](https://github.com/Comcast/Porrtal/compare/v0.9.6...v0.10.0) (2023-11-19)

### Bug Fixes

- **workspace:** remove invalid project property ([650435f](https://github.com/Comcast/Porrtal/commit/650435f27eedeeece9649ea542b4b798a707b37e))

### Features

- **workspace:** apply migrations --> nx 17.0.2 ([87ae5aa](https://github.com/Comcast/Porrtal/commit/87ae5aa23058da6d4f7de095914de2f355e7855c))

## [0.9.6](https://github.com/Comcast/Porrtal/compare/v0.9.5...v0.9.6) (2023-08-20)

### Bug Fixes

- **@porrtal/r-\*:** add react and react-dom to project externals ([e0859b0](https://github.com/Comcast/Porrtal/commit/e0859b0e914716fd2d1268b13c286ddd9e0f4481))

## [0.9.5](https://github.com/Comcast/Porrtal/compare/v0.9.4...v0.9.5) (2023-08-19)

**Note:** Version bump only for package @porrtal/r-shell

## [0.9.4](https://github.com/Comcast/Porrtal/compare/v0.9.3...v0.9.4) (2023-08-17)

### Bug Fixes

- **workspace:** update from nx 16.5.5 --> 16.7.1 ([e14769a](https://github.com/Comcast/Porrtal/commit/e14769acf2e498d4c0b19ab1b6c47687b828ddd5))

## [0.9.3](https://github.com/Comcast/Porrtal/compare/v0.9.2...v0.9.3) (2023-08-16)

### Bug Fixes

- **@porrtal/\*:** fix circular dependencies and external dependencies ([63a855d](https://github.com/Comcast/Porrtal/commit/63a855d723f1d4170438f3e861fe339a55f03493))

## [0.9.2](https://github.com/Comcast/Porrtal/compare/v0.9.1...v0.9.2) (2023-08-16)

**Note:** Version bump only for package @porrtal/r-shell

## [0.9.1](https://github.com/Comcast/Porrtal/compare/v0.9.0...v0.9.1) (2023-08-15)

**Note:** Version bump only for package @porrtal/r-shell

# [0.9.0](https://github.com/Comcast/Porrtal/compare/v0.8.1...v0.9.0) (2023-07-31)

### Bug Fixes

- **@porrtal/r-shell-material:** fix timing issue with maximize tab (pass array and index, not value) ([a998a96](https://github.com/Comcast/Porrtal/commit/a998a96cbf97671bc70c2dfcd698f8122f0a9687))
- **@porrtal/r-shell:** encapsulate deep link processing in dispatch function ([44eabf0](https://github.com/Comcast/Porrtal/commit/44eabf0dcb6179a0f3b4b6d5b133c17bed243a0f))
- **a-porrtal-io-app, n-porrtal-io-app:** build and push to cf working ([49a85b2](https://github.com/Comcast/Porrtal/commit/49a85b2e1a1285e5d85694e31cff3f198926110b))

### Features

- **@porrtal/r-shell-blueprint, @porrtal/r-shell-material:** banner image working ([9b50972](https://github.com/Comcast/Porrtal/commit/9b509720cc0001b8838481cff42ff20856889c40))
- **@porrtal/r-shell-blueprint:** banner menu inline working ([03a2910](https://github.com/Comcast/Porrtal/commit/03a2910c1285fc04b2a410dad2eeae72d2312873))
- **@porrtal/r-shell-blueprint:** copy deep link working ([4884e4a](https://github.com/Comcast/Porrtal/commit/4884e4af4afcdb8a7d7f0ae37d8cc0b6589177b5))
- **@porrtal/r-shell-blueprint:** implement nav expand / collapse ([dbf3d54](https://github.com/Comcast/Porrtal/commit/dbf3d54644e91a07c7e4a87c833bd0998f723b65))
- **@porrtal/r-shell-blueprint:** launch q working ([de8d1f5](https://github.com/Comcast/Porrtal/commit/de8d1f5373e1d25bab2ab6de3616491194dd7f4e))
- **@porrtal/r-shell-blueprint:** maximize html element working ([88304ca](https://github.com/Comcast/Porrtal/commit/88304ca767d74ccec7e4d2ece2a319c04b5442c2))
- **@porrtal/r-shell-blueprint:** pass menuItems into banner manu bar and banner menu inline ([20ce0ff](https://github.com/Comcast/Porrtal/commit/20ce0fff8638cf948e529174bacaf6c89ea272ee))
- **@porrtal/r-shell-blueprint:** rough in banner menu bar and banner menu inline ([b30f322](https://github.com/Comcast/Porrtal/commit/b30f322cac9c04614e544cb77e58c4aab67355d3))
- **@porrtal/r-shell-blueprint:** rough in cards, show auth n and auth z card data ([15b446b](https://github.com/Comcast/Porrtal/commit/15b446b7386fe8cd496683feed6de85adb21e685))
- **@porrtal/r-shell-blueprint:** rough in shell state dashboard and auth n card ([1a7f273](https://github.com/Comcast/Porrtal/commit/1a7f2737058d899eaab212c14fe4fd90f0dc2c2a))
- **@porrtal/r-shell-material:** copy link working ([6aadae4](https://github.com/Comcast/Porrtal/commit/6aadae4d9596ffd94b924f87f0d1d4249941e702))
- **@porrtal/r-shell, @porrtal/r-shell-material:** refactor shared code into r-shell ([68fa7b8](https://github.com/Comcast/Porrtal/commit/68fa7b8caca960240b94cd619c6e46ed61596fc7))
- **@porrtal/r-shell:** deep links working ([5c9ceba](https://github.com/Comcast/Porrtal/commit/5c9ceba9fee294dfa006863ed118f4f5f4fff539))
- **@porrtal/r-shell:** fix keys in shell layout splitter's maximize hosts ([9b7dd02](https://github.com/Comcast/Porrtal/commit/9b7dd025a9013130a95634e59a3be9bec6f809c3))
- **@porrtal/r-shell:** implement porrtal menu item for view registration ([1ab6567](https://github.com/Comcast/Porrtal/commit/1ab65670a61b441596e7de5e915da204669d068a))
- **@porrtal/r-shell:** move cards-container to blueprint and material libraries ([881a55a](https://github.com/Comcast/Porrtal/commit/881a55af246c7cf59f89563a8e0f9c3982f60b83))
- **@porrtal/r-shell:** support spaces in viewId, delay deep link launch for late registered views ([ce8ad57](https://github.com/Comcast/Porrtal/commit/ce8ad579eb7072ad41602b49f86bed3e977bec1e))
- **@porrtal/r-user-mock:** no permissions q working ([e436cfb](https://github.com/Comcast/Porrtal/commit/e436cfbaa81f43bf15574bf77b01dc25d5ff7b6f))
- **@porrtal/r-user-strapi:** strapi auth working (and pulling porrtal_roles) ([9d2e644](https://github.com/Comcast/Porrtal/commit/9d2e644e5be9820b9b255944a5e0c9fad347d9b6))
- **porrtal-auth-a-auth0-app:** rough in views, add angular material ([598a145](https://github.com/Comcast/Porrtal/commit/598a145fc1896971e841776fa30eaa25e4c10949))
- **porrtal-auth-r-strapi-app:** strapi login and register working ([54aa81e](https://github.com/Comcast/Porrtal/commit/54aa81e2b93442c5159cc64539c7fce8194f612b))
- **workspace:** upgrade nx (apply migrations) ([549f5c3](https://github.com/Comcast/Porrtal/commit/549f5c353259b49d668ad91397b9b05a7fadb7e7))

## [0.8.1](https://github.com/Comcast/Porrtal/compare/v0.8.0...v0.8.1) (2022-12-15)

**Note:** Version bump only for package @porrtal/r-shell

# [0.8.0](https://github.com/Comcast/Porrtal/compare/v0.7.0...v0.8.0) (2022-12-15)

**Note:** Version bump only for package @porrtal/r-shell

# [0.7.0](https://github.com/Comcast/Porrtal/compare/v0.6.0...v0.7.0) (2022-12-03)

### Bug Fixes

- **@porrtal/r-shell-blueprint:** fix banner keys ([03ac0a3](https://github.com/Comcast/Porrtal/commit/03ac0a3648b703cf99876ff6138ae2b3a131d731))

### Features

- **workspace:** update package.json files and docs ([3d47347](https://github.com/Comcast/Porrtal/commit/3d47347412aaee8d8fc5043163625cc3fddb0188))

# [0.6.0](https://github.com/datumgeek/porrtal/compare/v0.5.1...v0.6.0) (2022-12-01)

**Note:** Version bump only for package @porrtal/r-shell

## [0.5.1](https://github.com/datumgeek/porrtal/compare/v0.5.0...v0.5.1) (2022-11-30)

**Note:** Version bump only for package @porrtal/r-shell

# [0.5.0](https://github.com/datumgeek/porrtal/compare/v0.4.1...v0.5.0) (2022-11-30)

### Features

- **@porrtal/_, @porrtal-components/_:** add new angular library formats project.json ([7e0dd44](https://github.com/datumgeek/porrtal/commit/7e0dd44eb41e158a960a60bae2b219f5c0e9c166))

## [0.4.1](https://github.com/datumgeek/porrtal/compare/v0.4.0...v0.4.1) (2022-11-26)

**Note:** Version bump only for package @porrtal/r-shell

# [0.4.0](https://github.com/datumgeek/porrtal/compare/v0.3.0...v0.4.0) (2022-11-26)

### Bug Fixes

- **@porrtal/r-shell-blueprint:** fix replaceable parameters in entity menu ([455cb9b](https://github.com/datumgeek/porrtal/commit/455cb9bc99e75aa79ec2238f1a6a4705f328f126))
- **@porrtal/r-shell:** format document shell-layout-splitter ([5ba2e53](https://github.com/datumgeek/porrtal/commit/5ba2e536c4f95f8c48545b660e007273ba10d587))
- **@porrtal/r-shell:** make nav area initial width 300px ([fc519e3](https://github.com/datumgeek/porrtal/commit/fc519e32c5878a7f7cc3a4740a6814e20f1b5f94))
- **@porrtal/r-shell:** set nav width to 320px ([1c2a71d](https://github.com/datumgeek/porrtal/commit/1c2a71dd72699586a1a5c27149659a7c01db9cc0))
- **@porrtal/r-shell:** update background for components to very light gray F3F3F3 ([d816be1](https://github.com/datumgeek/porrtal/commit/d816be1d844a859c240498926a79d1d5d0dc0d6b))

### Features

- **@porrtal/r-shell:** hide search in banner if no search views ([2663aa3](https://github.com/datumgeek/porrtal/commit/2663aa3e0fbd84e4eab247a55692b8741221d12d))

# [0.3.0](https://github.com/datumgeek/porrtal/compare/v0.2.0...v0.3.0) (2022-11-23)

### Features

- **@porrtal/r-\*:** bundle css inside index.js for published npm packages ([d433b9f](https://github.com/datumgeek/porrtal/commit/d433b9f6a5a36317263bfe63204b071e566fcee1))

# [0.2.0](https://github.com/datumgeek/porrtal/compare/v0.1.0...v0.2.0) (2022-10-30)

### Features

- **@porrtal/r-shell-blueprint:** add menu to banner component ([a57b436](https://github.com/datumgeek/porrtal/commit/a57b43606278038ad2f4075ae7b56412ce0d3a43))
- **@porrtal/r-shell-blueprint:** display optional image (including SVGs) in banner menu items ([0e16211](https://github.com/datumgeek/porrtal/commit/0e16211fa003e421c66ff2cc99b834676cdc47ec))
- **@porrtal/r-shell-material, @porrtal/r-shell-blueprint:** rough in banner component ([029aa6b](https://github.com/datumgeek/porrtal/commit/029aa6b3cba40a688918d88003b552687292312f))
- **a-porrtal-io-app:** rough in angular app ([e7381a8](https://github.com/datumgeek/porrtal/commit/e7381a8d324f18413b909e8800874d235e1f8567))

# 0.1.0 (2022-10-09)

### Features

- **@porrtal/r-shell-blueprint:** user and dev info tab menus working ([852e5a0](https://github.com/datumgeek/porrtal/commit/852e5a0b1d3aaa71198770c7018ec58470aee1e7))
- **porrtal-workspace:** format project.json files ([46fef12](https://github.com/datumgeek/porrtal/commit/46fef12bba99d07cc883cb08ab46e38ad232aae9))
- **workspace:** refactor react into "r" folders (prep for development of angular version) ([06e167d](https://github.com/datumgeek/porrtal/commit/06e167ddc353b0ba9f9b1c3b480474ff9614f237))
