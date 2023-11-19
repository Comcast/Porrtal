# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.10.0](https://github.com/Comcast/Porrtal/compare/v0.9.6...v0.10.0) (2023-11-19)

### Bug Fixes

- **workspace:** remove invalid project property ([650435f](https://github.com/Comcast/Porrtal/commit/650435f27eedeeece9649ea542b4b798a707b37e))

### Features

- **workspace:** apply migrations --> nx 17.0.2 ([87ae5aa](https://github.com/Comcast/Porrtal/commit/87ae5aa23058da6d4f7de095914de2f355e7855c))

## [0.9.6](https://github.com/Comcast/Porrtal/compare/v0.9.5...v0.9.6) (2023-08-20)

**Note:** Version bump only for package @porrtal/a-shell

## [0.9.5](https://github.com/Comcast/Porrtal/compare/v0.9.4...v0.9.5) (2023-08-19)

**Note:** Version bump only for package @porrtal/a-shell

## [0.9.4](https://github.com/Comcast/Porrtal/compare/v0.9.3...v0.9.4) (2023-08-17)

### Bug Fixes

- **workspace:** update from nx 16.5.5 --> 16.7.1 ([e14769a](https://github.com/Comcast/Porrtal/commit/e14769acf2e498d4c0b19ab1b6c47687b828ddd5))

## [0.9.3](https://github.com/Comcast/Porrtal/compare/v0.9.2...v0.9.3) (2023-08-16)

**Note:** Version bump only for package @porrtal/a-shell

## [0.9.2](https://github.com/Comcast/Porrtal/compare/v0.9.1...v0.9.2) (2023-08-16)

**Note:** Version bump only for package @porrtal/a-shell

## [0.9.1](https://github.com/Comcast/Porrtal/compare/v0.9.0...v0.9.1) (2023-08-15)

**Note:** Version bump only for package @porrtal/a-shell

# [0.9.0](https://github.com/Comcast/Porrtal/compare/v0.8.1...v0.9.0) (2023-07-31)

### Bug Fixes

- **@porrtal/a-shell-material:** change z-index so entity menu shows (defaults to z 1000) ([a2dc0df](https://github.com/Comcast/Porrtal/commit/a2dc0df9599e95f8e5ac674d4ca719d80943508f))
- **@porrtal/a-shell-material:** fix duplicate orphan auth z cards in shell dashboard ([bed4bf8](https://github.com/Comcast/Porrtal/commit/bed4bf8dcaa69e527e9f89d7ad5c73e7b07452c7))
- **@porrtal/a-shell-material:** remove log messages ([4bcff79](https://github.com/Comcast/Porrtal/commit/4bcff7974cdc966b84ff59977b20429748fcc9aa))
- **@porrtal/a-shell:** accomodate issue in @rx-angular/state where updates to state are delayed ([24f247d](https://github.com/Comcast/Porrtal/commit/24f247d8e60c8b5d1246a246591d4e3094ab5fdd))

### Features

- **@porrtal/a-api, @porrtal/a-shell:** add types for auth z support in shell ([3bf48bb](https://github.com/Comcast/Porrtal/commit/3bf48bb7fe9d432b4dbaf5c70f0d2903a5f2998e))
- **@porrtal/a-shell-material:** banner image working ([366b723](https://github.com/Comcast/Porrtal/commit/366b723cf66eb761cf1e1f8e428879cc6e648cca))
- **@porrtal/a-shell-material:** copy link working ([6cf0131](https://github.com/Comcast/Porrtal/commit/6cf0131ae052c3c903a99080c1286d85608df279))
- **@porrtal/a-shell-material:** implement maximize and restore ([87fd4f5](https://github.com/Comcast/Porrtal/commit/87fd4f5cb2d3a4fa74be55a37c8f3a733b89ce0b))
- **@porrtal/a-shell-material:** implement nav expand / collapse ([28a7693](https://github.com/Comcast/Porrtal/commit/28a769353f4347ab8529992fe458ac6455fd85e4))
- **@porrtal/a-shell-material:** maximize tab working ([cfa49f8](https://github.com/Comcast/Porrtal/commit/cfa49f8ad8caef521f0715d6d6740c8177c17099))
- **@porrtal/a-shell-material:** shell state service updates to use callback instead of imperative calls ([a758ea8](https://github.com/Comcast/Porrtal/commit/a758ea8887867cb5bdeadcdd41af600910c7d511))
- **@porrtal/a-shell:** deep links working ([9992bdb](https://github.com/Comcast/Porrtal/commit/9992bdbb80b0d71e1748e99199162eb39d6e9775))
- **@porrtal/a-shell:** permissions caching working ([7e652a6](https://github.com/Comcast/Porrtal/commit/7e652a6107c9db7af9ecbc2f7474a639a311d7bc))
- **@porrtal/a-shell:** populate menuItems when registering views ([a155af9](https://github.com/Comcast/Porrtal/commit/a155af94047ea12d63a01c6680586f2682c7b6be))
- **@porrtal/a-shell:** prevent actions that might destroy a component when elements are maximized ([b0b1514](https://github.com/Comcast/Porrtal/commit/b0b1514c9024fc47a986a2944b71fd6c3c2984a0))
- **@porrtal/a-shell:** shell service 'setAuthZReady' and 'registerAuthZPermissionCheck' working ([795eb1f](https://github.com/Comcast/Porrtal/commit/795eb1f2cacd08ee02cb963f8860298f73664f07))
- **@porrtal/a-shell:** support spaces in viewId, delay deep link launch for late registered views ([f2e45e5](https://github.com/Comcast/Porrtal/commit/f2e45e59f3e707561daa8f8bf6727989c8382452))
- **@porrtal/a-shell:** suppress focus for delayed launch tabs ([84313bb](https://github.com/Comcast/Porrtal/commit/84313bb95aff8cda0d0b0eeb19f8edff2c9ba7b1))
- **@porrtal/a-user-auth-z:** wire up mock auth n and mock auth z ([cdf2d0d](https://github.com/Comcast/Porrtal/commit/cdf2d0de49f8b3a3f434d971715f1409d76ae796))
- **porrtal-auth-a-auth0-app:** rough in views, add angular material ([598a145](https://github.com/Comcast/Porrtal/commit/598a145fc1896971e841776fa30eaa25e4c10949))
- **workspace:** upgrade nx (apply migrations) ([549f5c3](https://github.com/Comcast/Porrtal/commit/549f5c353259b49d668ad91397b9b05a7fadb7e7))

## [0.8.1](https://github.com/Comcast/Porrtal/compare/v0.8.0...v0.8.1) (2022-12-15)

**Note:** Version bump only for package @porrtal/a-shell

# [0.8.0](https://github.com/Comcast/Porrtal/compare/v0.7.0...v0.8.0) (2022-12-15)

**Note:** Version bump only for package @porrtal/a-shell

# [0.7.0](https://github.com/Comcast/Porrtal/compare/v0.6.0...v0.7.0) (2022-12-03)

### Features

- **workspace:** update package.json files and docs ([3d47347](https://github.com/Comcast/Porrtal/commit/3d47347412aaee8d8fc5043163625cc3fddb0188))

# [0.6.0](https://github.com/datumgeek/porrtal/compare/v0.5.1...v0.6.0) (2022-12-01)

**Note:** Version bump only for package @porrtal/a-shell

## [0.5.1](https://github.com/datumgeek/porrtal/compare/v0.5.0...v0.5.1) (2022-11-30)

**Note:** Version bump only for package @porrtal/a-shell

# [0.5.0](https://github.com/datumgeek/porrtal/compare/v0.4.1...v0.5.0) (2022-11-30)

### Features

- **@porrtal/_, @porrtal-components/_:** add new angular library formats project.json ([7e0dd44](https://github.com/datumgeek/porrtal/commit/7e0dd44eb41e158a960a60bae2b219f5c0e9c166))

## [0.4.1](https://github.com/datumgeek/porrtal/compare/v0.4.0...v0.4.1) (2022-11-26)

**Note:** Version bump only for package @porrtal/a-shell

# [0.4.0](https://github.com/datumgeek/porrtal/compare/v0.3.0...v0.4.0) (2022-11-26)

**Note:** Version bump only for package @porrtal/a-shell

# [0.3.0](https://github.com/datumgeek/porrtal/compare/v0.2.0...v0.3.0) (2022-11-23)

### Bug Fixes

- **@porrtal/a-api, @porrtal/a-shell:** move projects to fix build issues ([4887065](https://github.com/datumgeek/porrtal/commit/488706573ca6979f8a81e43c2dcee0401e425a88))

# [0.2.0](https://github.com/datumgeek/porrtal/compare/v0.1.0...v0.2.0) (2022-10-30)

### Features

- **@porrtal/a-shell-material:** add banner with menu ([ad5d011](https://github.com/datumgeek/porrtal/commit/ad5d01100e0caf0834f335452e64dee812f58d01))
- **a-porrtal-io-app:** quick-start route working ([eac83fa](https://github.com/datumgeek/porrtal/commit/eac83fa0402159d7e9a4923d531516b5c0aa6789))
- **a-porrtal-io-app:** rough in angular app ([e7381a8](https://github.com/datumgeek/porrtal/commit/e7381a8d324f18413b909e8800874d235e1f8567))

# 0.1.0 (2022-10-09)

### Bug Fixes

- **@porrtal/a-shell-material:** turn user info back on by default ([5afdc0d](https://github.com/datumgeek/porrtal/commit/5afdc0df7e0d939121edc16f695eb4507c063338))

### Features

- **@porrtal/a-_, @porrtal-components/a-_:** rough in libraries and test components ([eaa7c24](https://github.com/datumgeek/porrtal/commit/eaa7c246134ad587812933c87bb46f7072e22ca3))
- **@porrtal/a-\*:** remove "-workspace" from selectors ([7a757fc](https://github.com/datumgeek/porrtal/commit/7a757fc1cf09d1d173728f497b2d46c63f3cebe1))
- **@porrtal/a-shell-material:** search dialog working ([618b6e0](https://github.com/datumgeek/porrtal/commit/618b6e01a8eb4f51388dcd634c2d48fdf2837987))
- **@porrtal/a-shell-material:** tabs-left working ([5e8482c](https://github.com/datumgeek/porrtal/commit/5e8482ccc037fb730e1bd74f9ca114bccf794655))
- **@porrtal/a-shell-material:** use shell state to contrrol visibilty of user and dev info menus ([aec0288](https://github.com/datumgeek/porrtal/commit/aec028860c1d605465bd6dfc9fa9b715e6c8072b))
- **@porrtal/a-shell-material:** user and dev info tab menus working ([a07c640](https://github.com/datumgeek/porrtal/commit/a07c64018a5c1d54adad62b2aaac28f37add2cb5))
- **@porrtal/a-shell-material:** view host working and sized to fit ([058f80b](https://github.com/datumgeek/porrtal/commit/058f80b568482c7140b1d8cb2d88b9adc76fafc4))
- **@porrtal/a-shell, @porrtal/a-shell-material:** rough in loger service and components ([5b97b6c](https://github.com/datumgeek/porrtal/commit/5b97b6c2c8eeae706c5ee05e367f6fddd79ca46a))
- **@porrtal/a-shell:** create scrolling containers in view host ([11657d1](https://github.com/datumgeek/porrtal/commit/11657d1c97c0b5355f381c6b42967f7fe8749934))
- **@porrtal/a-shell:** logger-state service working ([b06dfd1](https://github.com/datumgeek/porrtal/commit/b06dfd185f46579f9923d1123ada6a80219b9114))
- **@porrtal/a-shell:** rough in shell-state service ([c1bb967](https://github.com/datumgeek/porrtal/commit/c1bb967856b5051d96c5de56cc4e4062ebb0bd8b))
- **@porrtal/a-shell:** search state service working ([12cf74f](https://github.com/datumgeek/porrtal/commit/12cf74fe3b86c912edb3c67b12f872da093331f9))
- **@porrtal/a-shell:** view host component working ([839dc2a](https://github.com/datumgeek/porrtal/commit/839dc2afa10a8b12de40fc1d3e3ae2bf34ff8143))
- **a-porrtal-app:** initialize shell state ([0a73081](https://github.com/datumgeek/porrtal/commit/0a730815cccebd6b7168c147f3c5c9260d820b98))
- change prefix from porrtal-workspace to porrtal ([f0620ea](https://github.com/datumgeek/porrtal/commit/f0620ea3496545bcbb1b596b5900a3381ebea41d))
- **porrtal-workspace:** format project.json files ([46fef12](https://github.com/datumgeek/porrtal/commit/46fef12bba99d07cc883cb08ab46e38ad232aae9))
