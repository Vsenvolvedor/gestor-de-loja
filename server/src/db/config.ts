import sqlite3 from "sqlite3";
import { open } from "sqlite";

export default open({
  filename:'./src/db/gestoja.sqlite',
  driver: sqlite3.Database,
})