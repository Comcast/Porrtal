# Change Log

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.9.1](https://github.com/Comcast/Porrtal/compare/v0.9.0...v0.9.1) (2023-08-15)

### Bug Fixes

- **@porrtal/\*:** fix package.json license and repository info ([4229a6a](https://github.com/Comcast/Porrtal/commit/4229a6ae297b5686316f2a4fc1e51fa3d73ff863))

# [0.9.0](https://github.com/datumgeek/porrtal/compare/v0.8.1...v0.9.0) (2023-07-31)

### Bug Fixes

- **@porrtal/a-user-oidc:** log undefined claims (shouldn't happen) ([51cd334](https://github.com/datumgeek/porrtal/commit/51cd334a611e9ee44f4d3c9bcbc9f16eab1cb12e))
- **@porrtal/a-user-oidc:** refactor login for auth0 and keycloak to support login strategy ([b559adc](https://github.com/datumgeek/porrtal/commit/b559adc9ba7944944b5817ee3df4acf7db50a8df))
- **@porrtal/a-user-oidc:** remove unused get user function (user$ is used now) ([c0005c3](https://github.com/datumgeek/porrtal/commit/c0005c377e88b363bc16e22e2a592440223f2777))
- **@porrtal/a-user-oidc:** set the roles in the rxState roles property (now shows in dashboard) ([afdd65a](https://github.com/datumgeek/porrtal/commit/afdd65a0462ea67b2e695cb120b974a21cff6fee))
- **porrtal-auth-a-auth0-app:** fix material styles, remove logging message ([d7cfb6e](https://github.com/datumgeek/porrtal/commit/d7cfb6e086f1ce537f385f7b569e2331ed505e1f))

### Features

- **@porrtal/a-user-\*:** rough in angular msal, oidc, and strapi libraries ([e863bfc](https://github.com/datumgeek/porrtal/commit/e863bfc5ffaa3767d3886ecdc3fce049eb3c7ad7))
- **@porrtal/a-user-msal:** refactor async model, msal auth working ([88a7998](https://github.com/datumgeek/porrtal/commit/88a7998175caaadc7c1398d556a1780bcae35519))
- **@porrtal/a-user-oidc:** display user name in banner when logged in, refactor supporting code ([922cf94](https://github.com/datumgeek/porrtal/commit/922cf9475aca80c1f0d558bcb549c3ded517de5e))
- **@porrtal/a-user-oidc:** oidc auth n and auth z working for porrtal-auth-a-auth0-app ([928783e](https://github.com/datumgeek/porrtal/commit/928783e45ccb592bd5183cd0ac312178690744c5))
- **@porrtal/a-user-oidc:** rough in oidc auth feature ([1587d8c](https://github.com/datumgeek/porrtal/commit/1587d8c1bc711d17680db599f128be8af289cc98))
- **@porrtal/a-user-oidc:** update user$ in auth-n service when claims change ([6ca6cf7](https://github.com/datumgeek/porrtal/commit/6ca6cf792f4885323570d45315ca6a802c76437e))
- **porrtal-auth-a-auth0-app:** auth0 authentication working with login & logout ([a680e0a](https://github.com/datumgeek/porrtal/commit/a680e0a036e858f4ca4619ec7942c85fc7a7af82))
- **porrtal-auth-a-auth0-app:** rough in oidc auth0 authentication ([6ce86f7](https://github.com/datumgeek/porrtal/commit/6ce86f75d1765de9fdfe44b6752046752a9546db))
- **porrtal-auth-a-auth0-app:** rough in views, add angular material ([598a145](https://github.com/datumgeek/porrtal/commit/598a145fc1896971e841776fa30eaa25e4c10949))
- **porrtal-auth-a-keycloak-app:** login / logout working with keycloak and @porrtal/a-user-oidc ([55e9f02](https://github.com/datumgeek/porrtal/commit/55e9f0254eb663f05620e91e211e3150922fcbc6))
- **workspace:** upgrade nx (apply migrations) ([549f5c3](https://github.com/datumgeek/porrtal/commit/549f5c353259b49d668ad91397b9b05a7fadb7e7))
