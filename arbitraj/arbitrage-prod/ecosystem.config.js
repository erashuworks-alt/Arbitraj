module.exports = {
  apps: [
    {
      name: "event-hub",
      script: "node_modules/tsx/dist/cli.mjs",
      args: "event-hub.ts",
      autorestart: true,
      watch: false,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
      name: "risk-service",
      script: "node_modules/tsx/dist/cli.mjs",
      args: "risk-service.ts",
      autorestart: true,
      watch: false,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
      name: "fetcher",
      script: "node_modules/tsx/dist/cli.mjs",
      args: "fetcher.ts",
      autorestart: true,
      watch: false,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
      name: "sniper",
      script: "node_modules/tsx/dist/cli.mjs",
      args: "sniper.ts",
      autorestart: true,
      watch: false,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
      name: "worker",
      script: "node_modules/tsx/dist/cli.mjs",
      args: "worker.ts",
      autorestart: true,
      watch: false,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "production",
      }
    },
    {
      name: "ui",
      script: "start-ui.js",
      cwd: "./",
      autorestart: true,
      watch: false,
      env_development: {
        NODE_ENV: "development",
      },
      env_production: {
        NODE_ENV: "development",
      }
    }
  ]
};
