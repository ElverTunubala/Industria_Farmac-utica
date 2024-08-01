import express from "express";
import bodyParser from "body-parser";
import router from "./routes/routes";

const app = express();
const port = 4000;

app.use(bodyParser.json());
app.use("/api", router);

app.listen(port, () => {
  console.log(`Servidor ejecutándose en http://localhost:${port}`);
});

// lo que debo tener instalado
//npm init -y
//npm install @types/node express @types/express mysql2 @types/mysql2 body-parser

// para correr el proyecto
//tsc
//node dist/app.js

// esto va en tsconfig.json
// {
//     "compilerOptions": {
//       "target": "ES6",
//       "module": "commonjs",
//       "strict": true,
//       "esModuleInterop": true,
//       "skipLibCheck": true,
//       "outDir": "./dist"
//     },
//     "include": ["src"]
//   }
