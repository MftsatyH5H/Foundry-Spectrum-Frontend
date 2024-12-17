# React-Nodejs-Setup

This is a Project startup that uses React as a front-end library, supports Tailwind CSS and uses Redux Toolkit for state Management

## Development

### Prerequisites

- Node.js v16.13.1
- Yarn v1.22.15 or higher

### Configuration

Copy [example.dev.env](example.dev.env) to dev.env and adapt you variables if needed

Copy [client - example.env](client/example.env) to .env and adapt you variables if needed

### Run instructions

- Install dependencies

```sh
yarn
```

- If env variables does'nt load automatically, You need to load env variables for the client from dev.env

```sh
# For windows (use Gitbash)
set -a && source ../dev.env && set +a
# Or
export $(grep -v '^#' ../dev.env | xargs)

# For linux
source ../dev.env

```

- Run the client

```sh
yarn dev
```

### Helpful tools

- Visual studio code (VS)
- Markdownlint VS extension
- ESLint VS extension

## Deployment

### Build Instructions

- Copy [example.env](example.env) to .env and adapt you variables (See configuration section)

- Build Project (Go to client directory)

```sh
make build
```

### Docker instructions

- Copy [example.env](example.env) to .env and adapt you variables (See configuration section)

- Build image (Go to client directory)

```sh
make build
```

- Publish image (Go to client directory)

```sh
cd client
make publish
```

- Test it (if you didn't run this command before for the server)

```sh
docker-compose up -d
```
