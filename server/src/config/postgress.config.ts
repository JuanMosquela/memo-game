import pg from "pg";
const Pool = pg.Pool;

const pool = new Pool({
  user: "postgres",
  password: "mosquella96",
  host: "localhost",
  port: 5432,
  database: "memo_game",
});

pool.connect((err) => {
  if (err) {
    return console.log(err);
  }
  console.log("database succesfully connected");
});

export default pool;
