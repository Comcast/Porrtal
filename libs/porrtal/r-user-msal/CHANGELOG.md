# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

# [0.13.0](https://github.com/Comcast/Porrtal/compare/v0.12.1...v0.13.0) (2024-03-02)


### Features

* **@porrtal/r-user-msal:** add popup option to MsalAuthentication component (vs redirect) ([26f4e6a](https://github.com/Comcast/Porrtal/commit/26f4e6a61de5145b35f335cf8dc9a3b787b206a5))





## [0.12.1](https://github.com/Comcast/Porrtal/compare/v0.12.0...v0.12.1) (2023-12-07)

**Note:** Version bump only for package @porrtal/r-user-msal

# [0.12.0](https://github.com/Comcast/Porrtal/compare/v0.11.0...v0.12.0) (2023-11-30)

**Note:** Version bump only for package @porrtal/r-user-msal

# [0.11.0](https://github.com/Comcast/Porrtal/compare/v0.10.0...v0.11.0) (2023-11-21)

### Features

- **@porrtal/r-user-msal, workspace:** upgrade msal to current, fix react msal ([b487b70](https://github.com/Comcast/Porrtal/commit/b487b7090edd3a94be7411cbb868d3e85650a90c))
- **workspace:** migrate to nx 17.1.2 ([1cc3048](https://github.com/Comcast/Porrtal/commit/1cc3048b60a9eb41bb1512fc4f448ee6feb85dff))

# [0.10.0](https://github.com/Comcast/Porrtal/compare/v0.9.6...v0.10.0) (2023-11-19)

### Bug Fixes

- **workspace:** remove invalid project property ([650435f](https://github.com/Comcast/Porrtal/commit/650435f27eedeeece9649ea542b4b798a707b37e))

### Features

- **porrtal-auth-n-msal-app, @porrtal/r-user, @porrtal/r-user-msal:** getToken returns access token ([a4d9f84](https://github.com/Comcast/Porrtal/commit/a4d9f846b80fbc0d8a18a689fa4101f0f7837b7c))
- **workspace:** apply migrations --> nx 17.0.2 ([87ae5aa](https://github.com/Comcast/Porrtal/commit/87ae5aa23058da6d4f7de095914de2f355e7855c))

## [0.9.6](https://github.com/Comcast/Porrtal/compare/v0.9.5...v0.9.6) (2023-08-20)

### Bug Fixes

- **@porrtal/r-\*:** add react and react-dom to project externals ([e0859b0](https://github.com/Comcast/Porrtal/commit/e0859b0e914716fd2d1268b13c286ddd9e0f4481))

## [0.9.5](https://github.com/Comcast/Porrtal/compare/v0.9.4...v0.9.5) (2023-08-19)

**Note:** Version bump only for package @porrtal/r-user-msal

## [0.9.4](https://github.com/Comcast/Porrtal/compare/v0.9.3...v0.9.4) (2023-08-17)

### Bug Fixes

- **workspace:** update from nx 16.5.5 --> 16.7.1 ([e14769a](https://github.com/Comcast/Porrtal/commit/e14769acf2e498d4c0b19ab1b6c47687b828ddd5))

## [0.9.3](https://github.com/Comcast/Porrtal/compare/v0.9.2...v0.9.3) (2023-08-16)

### Bug Fixes

- **@porrtal/\*:** fix circular dependencies and external dependencies ([63a855d](https://github.com/Comcast/Porrtal/commit/63a855d723f1d4170438f3e861fe339a55f03493))

## [0.9.2](https://github.com/Comcast/Porrtal/compare/v0.9.1...v0.9.2) (2023-08-16)

**Note:** Version bump only for package @porrtal/r-user-msal

## [0.9.1](https://github.com/Comcast/Porrtal/compare/v0.9.0...v0.9.1) (2023-08-15)

### Bug Fixes

- **@porrtal/\*:** fix package.json license and repository info ([4229a6a](https://github.com/Comcast/Porrtal/commit/4229a6ae297b5686316f2a4fc1e51fa3d73ff863))

# [0.9.0](https://github.com/datumgeek/porrtal/compare/v0.8.1...v0.9.0) (2023-07-31)

### Bug Fixes

- **@porrtal/r-user-msal:** use @porrtal/r-user instead of redefining "useAuthN" ([d49694c](https://github.com/datumgeek/porrtal/commit/d49694cde046e1b2d92f7386f9b911edab71fc94))

### Features

- **@porrtal/r-user-\*:** rough in react auth0, keycloak, msal, and strapi libraries ([83037bf](https://github.com/datumgeek/porrtal/commit/83037bf9257da81e0810fa8f38bdcf611dc190f0))
- **@porrtal/r-user-msal:** claims and email working ([60c17d8](https://github.com/datumgeek/porrtal/commit/60c17d886108b5bc58459298dfdca2b185ca8089))
- **@porrtal/r-user-msal:** msal auth n working ([ec348a6](https://github.com/datumgeek/porrtal/commit/ec348a6bb84c8c70bef556f772d2ab67ea3b6c06))
- **@porrtal/r-user-msal:** msal auth z working ([5315477](https://github.com/datumgeek/porrtal/commit/53154772ecab328ae1bbed6e0a49089d87a98ecd))
- **@porrtal/r-user-msal:** rough in msal authentication ([3e36d62](https://github.com/datumgeek/porrtal/commit/3e36d62dc923365cf0f86cb1b8e077fcef9ef26c))
- **@porrtal/r-user-msal:** rough in msal-authentication ([fafb3de](https://github.com/datumgeek/porrtal/commit/fafb3def18ea6bed274f942547dccb846696b317))
- **@porrtal/r-user:** useAuth --> useAuthN to prep for AuthZ (N: authorization, Z: authorization) ([ff41b80](https://github.com/datumgeek/porrtal/commit/ff41b8031be8f92846227d037a90ab5802d6a315))
- **porrtal-auth-a-auth0-app:** rough in views, add angular material ([598a145](https://github.com/datumgeek/porrtal/commit/598a145fc1896971e841776fa30eaa25e4c10949))
- **porrtal-auth-n-msal-app:** login working ([30db1ff](https://github.com/datumgeek/porrtal/commit/30db1ff2ed878e3832c62500993e0d260b8266b6))
- **porrtal-auth-r-msal-app:** login working ([b30f211](https://github.com/datumgeek/porrtal/commit/b30f211baefbd4d35b1ef4cd0a5655440b8614ee))
- **workspace:** upgrade nx (apply migrations) ([549f5c3](https://github.com/datumgeek/porrtal/commit/549f5c353259b49d668ad91397b9b05a7fadb7e7))
