module.exports = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'user',
  password: 'password',
  database: 'parking_db',
  entities: ['dist/**/*.entity{.ts,.js}'],
  synchronize: true,
};
