const config = {
  port: process.env.PORT || 3001,
  db: {
    url:
      process.env.DB_URL ||
      'mongodb+srv://deniskirpichnik:deniskirpichnik123@cluster0.gj23o.mongodb.net/fibonacciDB?retryWrites=true&w=majority',
    mongooseDebug: true,
  },
};

export default config;
