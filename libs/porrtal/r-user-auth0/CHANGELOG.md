# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.10.0](https://github.com/Comcast/Porrtal/compare/v0.9.6...v0.10.0) (2023-11-19)

### Bug Fixes

- **workspace:** remove invalid project property ([650435f](https://github.com/Comcast/Porrtal/commit/650435f27eedeeece9649ea542b4b798a707b37e))

### Features

- **porrtal-auth-n-auth0-app, @porrtal/r-user-auth0:** getToken working ([8250b1f](https://github.com/Comcast/Porrtal/commit/8250b1f147eef00abe2b70cade2cf19b4a70f359))
- **porrtal-auth-n-keycloak-app, @porrtal/r-user-keycloak:** getToken working ([7d290d0](https://github.com/Comcast/Porrtal/commit/7d290d09073b243366d2841d0789597d3b17ddf0))
- **porrtal-auth-r-auth0-app, @porrtal/r-user-auth0:** provide audience+scope in app. getToken works ([004a844](https://github.com/Comcast/Porrtal/commit/004a844e82ce88eee7e499775c551079283e3977))
- **workspace:** apply migrations --> nx 17.0.2 ([87ae5aa](https://github.com/Comcast/Porrtal/commit/87ae5aa23058da6d4f7de095914de2f355e7855c))

## [0.9.6](https://github.com/Comcast/Porrtal/compare/v0.9.5...v0.9.6) (2023-08-20)

### Bug Fixes

- **@porrtal/r-\*:** add react and react-dom to project externals ([e0859b0](https://github.com/Comcast/Porrtal/commit/e0859b0e914716fd2d1268b13c286ddd9e0f4481))

## [0.9.5](https://github.com/Comcast/Porrtal/compare/v0.9.4...v0.9.5) (2023-08-19)

**Note:** Version bump only for package @porrtal/r-user-auth0

## [0.9.4](https://github.com/Comcast/Porrtal/compare/v0.9.3...v0.9.4) (2023-08-17)

### Bug Fixes

- **workspace:** update from nx 16.5.5 --> 16.7.1 ([e14769a](https://github.com/Comcast/Porrtal/commit/e14769acf2e498d4c0b19ab1b6c47687b828ddd5))

## [0.9.3](https://github.com/Comcast/Porrtal/compare/v0.9.2...v0.9.3) (2023-08-16)

### Bug Fixes

- **@porrtal/\*:** fix circular dependencies and external dependencies ([63a855d](https://github.com/Comcast/Porrtal/commit/63a855d723f1d4170438f3e861fe339a55f03493))

## [0.9.2](https://github.com/Comcast/Porrtal/compare/v0.9.1...v0.9.2) (2023-08-16)

**Note:** Version bump only for package @porrtal/r-user-auth0

## [0.9.1](https://github.com/Comcast/Porrtal/compare/v0.9.0...v0.9.1) (2023-08-15)

### Bug Fixes

- **@porrtal/\*:** fix package.json license and repository info ([4229a6a](https://github.com/Comcast/Porrtal/commit/4229a6ae297b5686316f2a4fc1e51fa3d73ff863))

# [0.9.0](https://github.com/datumgeek/porrtal/compare/v0.8.1...v0.9.0) (2023-07-31)

### Bug Fixes

- **@porrtal/r-user-auth0, @porrtal/r-user-keycloak:** add missing loginStrategy property to auth0 and keycloak ([0cafcf2](https://github.com/datumgeek/porrtal/commit/0cafcf27065550a3ac13686e18793937a2d10266))
- **@porrtal/r-user-auth0:** update children type in interface to ReactNode ([67956f8](https://github.com/datumgeek/porrtal/commit/67956f8f6a1230c9350b5ad0825d44df0df7cb14))

### Features

- **@porrtal/r-user-\*:** rough in react auth0, keycloak, msal, and strapi libraries ([83037bf](https://github.com/datumgeek/porrtal/commit/83037bf9257da81e0810fa8f38bdcf611dc190f0))
- **@porrtal/r-user-auth0:** auth0 auth n working ([89cf2c8](https://github.com/datumgeek/porrtal/commit/89cf2c84d7e28569e5717295ddda0857a8b20d05))
- **@porrtal/r-user-auth0:** auth0 auth z working ([1167b6c](https://github.com/datumgeek/porrtal/commit/1167b6c2aa83e721dd536d4ee744c766962f232b))
- **@porrtal/r-user:** move auth0 and keycloak items into thier own libraries to limit dependencies ([99794f3](https://github.com/datumgeek/porrtal/commit/99794f3dfae0bd556039b966887a838944851b34))
- **@porrtal/r-user:** rename AuthInterface --> AuthNInterface ([540525e](https://github.com/datumgeek/porrtal/commit/540525e8367fd7f0d427a8e11c6451350661b694))
- **@porrtal/r-user:** useAuth --> useAuthN to prep for AuthZ (N: authorization, Z: authorization) ([ff41b80](https://github.com/datumgeek/porrtal/commit/ff41b8031be8f92846227d037a90ab5802d6a315))
- **porrtal-auth-a-auth0-app:** rough in views, add angular material ([598a145](https://github.com/datumgeek/porrtal/commit/598a145fc1896971e841776fa30eaa25e4c10949))
- **porrtal-auth-n-auth0-app:** rough in views ([b254871](https://github.com/datumgeek/porrtal/commit/b2548711af9ac1ebd13a9eafde938b4c021f52ed))
- **workspace:** upgrade nx (apply migrations) ([549f5c3](https://github.com/datumgeek/porrtal/commit/549f5c353259b49d668ad91397b9b05a7fadb7e7))
