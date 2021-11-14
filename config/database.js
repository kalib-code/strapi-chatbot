module.exports = ({
  env
}) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'postgres',
        host: env('DATABASE_HOST', '127.0.0.1'),
        port: env.int('DATABASE_PORT', 5432),
        database: env('DATABASE_NAME', 'chat-bot'),
        username: env('DATABASE_USERNAME', 'api_admin'),
        password: env('DATABASE_PASSWORD', 'Saltedasin123'),
        schema: 'public',
        ssl: { rejectUnauthorized: false },
      },
      options: {}
    },
  },
});
