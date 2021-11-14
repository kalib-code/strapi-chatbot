module.exports = ({
  env
}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', 'app-ed666b4c-7f96-4549-9d7c-13ff851139e2-do-user-1705610-0.b.db.ondigitalocean.com'),
        port: env.int('DATABASE_PORT', 25061),
        database: env('DATABASE_NAME', 'chatDB'),
        username: env('DATABASE_USERNAME', 'db'),
        password: env('DATABASE_PASSWORD', 'lVRIlJojgUzgbWyK'),
        ssl: { rejectUnauthorized: true },
      },
      options: {}
    },
  },
});
