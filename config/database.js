module.exports = ({ env }) => ({
  connection: {
    client: 'postgres',
    connection: {
      host: env('DATABASE_HOST', 'dpg-cflbm89gp3jiui9fhki0-a.ohio-postgres.render.com'),
      port: env.int('DATABASE_PORT', 5432),
      database: env('DATABASE_NAME', 'guitarla_6sfw'),
      user: env('DATABASE_USERNAME', 'root'),
      password: env('DATABASE_PASSWORD', 'Bsi5shf5WYdxmVIcQCR43XGi6qlnFnjr'),
      ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
