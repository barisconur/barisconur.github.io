const mongoose = require('mongoose');

module.exports = async () => {
  const connectionString = prepareConnectionString();

  mongoose
  .connect(connectionString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log(`Connected to ${process.env.DB_NAME}`));
};

const prepareConnectionString = () => {
  let { DB_CONN_STRING, DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;

  const credentials = {
    '<USER>': DB_USER,
    '<PASSWORD>': DB_PASSWORD,
    '<HOST>': DB_HOST,
    '<DBNAME>': DB_NAME,
  };

  Object.keys(credentials).forEach((key) => {
    DB_CONN_STRING = DB_CONN_STRING.replace(key, credentials[key]);
  });

  return DB_CONN_STRING;
}