const mysql2 = require("mysql2")
const express = require("express");
const app = express();


const connection = mysql2.createConnection({
  host: "localhost",
  database: "rtamps",
  user: "root",
  password: "saba12345.",

});

const cors = require("cors");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());
const port = process.env.PORT || 5000;
app.use(require("./router/auth"));
console.log("good to go");

app.listen(port, () => {
  console.log(`SERVER  :  http://localhost:${port}`);
  connection.connect((err)=> {
      if (err) throw err;
      console.log("DATABASE CONNECTED");
  })
})
app.use("/fungi_database", (req, res)=> {
  console.log("server is fetching data");
  const sql_query = `SELECT * FROM fungi_database` 
  connection.query(sql_query, (err, result)=> {
      if(err) throw err;
      res.json(result);
      console.log("result is good to go");
  })
})



app.use("/bacteria_database", (req, res)=> {
  console.log("server is fetching data");
  const sql_query = `SELECT * FROM bacteria_database` 
  connection.query(sql_query, (err, result)=> {
      if(err) throw err;
      res.json(result);
      console.log("result is good to go");
  })
})

app.use("/virus_database", (req, res)=> {
  console.log("server is fetching data");
  const sql_query = `SELECT * FROM virus_database` 
  connection.query(sql_query, (err, result)=> {
      if(err) throw err;
      res.json(result);
      console.log("result is good to go");
  })
})

app.use("/animals_database", (req, res)=> {
  console.log("server is fetching data");
  const sql_query = `SELECT * FROM animals_database` 
  connection.query(sql_query, (err, result)=> {
      if(err) throw err;
      res.json(result);
      console.log("result is good to go");
  })
})

app.use("/plants_database", (req, res)=> {
  console.log("server is fetching data");
  const sql_query = `SELECT * FROM plants_database` 
  connection.query(sql_query, (err, result)=> {
      if(err) throw err;
      res.json(result);
      console.log("result is good to go");
  })
})

app.use("/protist_database", (req, res)=> {
  console.log("server is fetching data");
  const sql_query = `SELECT * FROM protist_database` 
  connection.query(sql_query, (err, result)=> {
      if(err) throw err;
      res.json(result);
      console.log("result is good to go");
  })
})

app.use("/links_data", (req, res)=> {
  console.log("server is fetching data");
  const sql_query = `SELECT * FROM fungi_database` 
  connection.query(sql_query, (err, result)=> {
      if(err) throw err;
      res.json(result);
      console.log("result is good to go");
  })
})