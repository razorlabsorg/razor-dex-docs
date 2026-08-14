# syntax=docker/dockerfile:1

# ---- build ----
FROM node:22-alpine AS builder
WORKDIR /app

ENV COREPACK_ENABLE_DOWNLOAD_PROMPT=0
RUN corepack enable

# vocs spawns `git log` per page to derive "Last updated"; without the binary
# the routes plugin rejects on ENOENT and the build fails outright.
RUN apk add --no-cache git

# Dependencies are installed against the lockfile alone so this layer is reused
# whenever only page content changed.
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . .

# vocs.config.tsx keys baseUrl off NODE_ENV, so the canonical/sitemap URLs are
# only correct when the build runs as production.
ENV NODE_ENV=production
ENV NODE_OPTIONS=--max_old_space_size=4096
RUN pnpm build

# ---- runtime ----
FROM node:22-alpine AS runtime
WORKDIR /app

# `serve` is installed here rather than pulled from the build stage's
# node_modules so the runtime image carries no build-time dependencies.
RUN npm install --global serve@14

COPY --from=builder /app/dist ./dist

ENV PORT=3000
EXPOSE 3000

# -s serves index.html for unmatched paths; vocs prerenders every known route
# and renders its own not-found view client-side for anything else.
CMD ["sh", "-c", "serve dist -s -l tcp://0.0.0.0:${PORT:-3000}"]
