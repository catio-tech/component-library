# `@catio/component-library`

This project serves as the central repository for Catio architecture component definitions.

## Technology

The core technologies used in this project are:

| Category                 | Technology                                                                                                       |
| ------------------------ | ---------------------------------------------------------------------------------------------------------------- |
| **Programming Language** | [TypeScript](https://www.typescriptlang.org/), [JavaScript](https://www.javascript.com/)                         |
| **Web Frameworks**       | [Node.js](https://nodejs.org/en)                                                                                 |
| **Developer Experience** | [json-schema-to-typescript](https://www.npmjs.com/package/json-schema-to-typescript), [AJV](https://ajv.js.org/) |
| **Test Libraries**       | [Jest](https://jestjs.io/)                                                                                       |
| **Build Tools**          | [Yarn](https://yarnpkg.com/), [Babel](https://babeljs.io/)                                                       |

## Yarn Workspaces

If you are developing within the Catio Console monorepo, this package is set up as a Yarn workspace within a parent monorepo via [Git submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Please refer to the [parent README](../../README.md) for more information about how to navigate and develop within this project.

## Getting Started

1. Install [NodeJS](https://nodejs.org/en/download).
2. Install [NVM](https://github.com/nvm-sh/nvm#installing-and-updating)
3. Install [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable).
4. Install [`direnv`](https://direnv.net/docs/installation.html).
5. Clone the repository.

```bash
git clone git@github.com:catio-tech/component-library.git
cd component-library
```

6. Enable `direnv`.

```bash
direnv allow
```

7. Install Yarn dependencies.

```bash
yarn install
```

7. Generate types and build package contents.

```bash
yarn build
```

## Development Environment

### Node Version

There is an `.nvmrc` [file](./.nvmrc) at the root of this repository which will inform [NVM](https://github.com/nvm-sh/nvm) of which Node version to load for this project. You can simply run (after installing NVM):

```bash
nvm use
```

### Dependency Management

This project uses [Yarn](https://classic.yarnpkg.com/lang/en/docs/install/#mac-stable) to manage dependencies. You can install local project dependencies by running:

```
yarn install
```

**Note:** We are currently still using [Yarn 1.x (a.k.a. Yarn classic)](https://classic.yarnpkg.com/lang/en/).

### Version Control

This repository uses [Git](https://git-scm.com/) and [GitHub](https://github.com/catio-tech/catio-console) for source control and change management.

#### Pre-Commit Hooks

- Fix linting errors if any exist (ESLint).
- Fix code formatting issues if any exist (Prettier).

If there are any issues that are not automatically fixable, the hook (and thus your commit) will fail with a relevant error message.

#### Change Management

Changes to the `main` branch must be pushed via a [GitHub Pull Request](https://github.com/catio-tech/catio-console/pulls). Pull requests must pass our [CI pipeline](./.github/workflows/test.yml), which runs in [GitHub Actions](https://github.com/catio-tech/catio-console/actions).

### Static Analysis

#### Linting

This project uses [ESLint](https://eslint.org/) to lint code files. There is a single [configuration file](./.eslintrc) at the root of the repository which is used across all packages. Linting is checked in CI, and there is a git pre-commit hook to fix any auto-fixable linting issues before committing code changes.

#### Formatting

This project uses [Prettier](https://prettier.io/) to format code files. There is a single [configuration file](./.prettierrc) and [ignore file](./.prettierignore) at the root of the repository which is used across all packages. Formatting is checked in CI, and there is a git pre-commit hook to fix any auto-fixable formatting issues before committing code changes.

### Directory Environment

There are some local environment variables that need to be added to a `.env` [file](./.env) at the root of the project repository. Please reach out to the engineering team for help getting this file configured correctly.

This project uses `direnv` to ensure that local environment variables are always available to necessary programs and scripts.

From [direnv.net](https://direnv.net/):

> `direnv` is an extension for your shell. It augments existing shells with a new feature that can load and unload environment variables depending on the current directory.

**Optional:** If you are using a GUI editor, you can use a `direnv` plugin to ensure environment variables are available in your editor context. If running from or in the terminal, this is still recommended but not necessary, since starting your editor from the direnv-activated terminal shell will pull all of the direnv updates into your editor environment automatically. Here are some example plugins:

- [emacs-direnv](https://github.com/wbolster/emacs-direnv)
- [direnv.vim](https://github.com/direnv/direnv.vim)
- [vscode-direnv](https://marketplace.visualstudio.com/items?itemName=cab404.vscode-direnv)

### TypeScript Type Generation

This repository is set up to automatically generate typescript types from [JSON Schemas](https://json-schema.org/). You can run the script manually using:

```
yarn generate-schema-types
```

### Testing

This project uses Jest for schema validation tests.

Jest tests are detected and executed when they exist within a standard Jest `/__tests__/` directory.

During development, you can run all tests in a live window which watches for changes using:

```bash
yarn test
```

**Note:** you can append more Jest arguments after any `yarn test` call.
