# Foundry Spectrum Front-end

This is a Project startup that uses React as a front-end library, supports Tailwind CSS and uses Redux Toolkit for state Management

## Development

### Prerequisites

- Node.js v16.13.1
- Yarn v1.22.15 or higher

### Configuration

Copy [example.dev.env](example.dev.env) to dev.env and adapt you variables if needed

Copy [client - example.env](client/example.env) to .env and adapt you variables if needed

### Proxy Configuration (CORS Solution)

This project includes a proxy configuration to avoid CORS issues when making API calls to the backend. The proxy is configured in `vite.config.ts` and works as follows:

- **Frontend API calls**: All API calls from the frontend use `/api` as the base URL
- **Proxy target**: The proxy forwards requests to your backend server (default: `http://0.0.0.0:5000`)
- **URL rewriting**: `/api` requests are rewritten to `/api/v1` when forwarded to the backend

#### Environment Variables for Proxy:

- `VITE_BACKEND_BASE_URL`: The URL used by frontend API calls (default: `/api`)
- `VITE_BACKEND_TARGET_URL`: The actual backend server URL (default: `http://0.0.0.0:5000`)

#### Example Configuration:

```env
# Frontend will make API calls to /api
VITE_BACKEND_BASE_URL=/api

# Proxy will forward these calls to your backend
VITE_BACKEND_TARGET_URL=http://localhost:5000
```

This setup eliminates CORS issues during development while maintaining clean API URLs.

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
