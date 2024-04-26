# DevEx-Node-Service
To run locally, You will need to make sure that `local.dev-notion.com` is added to the localhost entry in your hosts file

```bash
sudo nano /etc/hosts
```

Make sure this exists in there. if not, add it:

```bash
127.0.0.1       localhost local.dev-notion.com
```

To start GraphQL running locally and connecting to remote services run:

```shell
yarn watch:run # start development server with automatic reloading
```

This will output some startup logs and will be available at `http://local.dev-notion.com:3000`.