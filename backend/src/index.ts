import express, {Request, Response} from 'express'
import "reflect-metadata"
import cors from 'cors'
import { routes } from './routes';
// Import DB config
import {dataSource} from "./db-connector";
// Create connection with DB
dataSource

const expressPort = 8888;
const app = express();

// use json for API routes
app.use(express.json());
// cors for api address/port
app.use(cors({
    credentials: true,
    origin: ["http://localhost:8888"]
}));

routes(app)

app.get('/', (req: Request, res: Response) => {
    res.send('INFO :: Root route called');
});

app.listen(expressPort, () => {
    console.log('INFO :: Webserver started on port ' + expressPort)
});