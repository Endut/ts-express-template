import * as express from "express";
import * as http from "http";

import { Request, Response } from "express";


const app: any = express();
const httpServer = new http.Server(app);

const port = 8080

app.get('*', (_req: Request, res: Response) => {
    res.send({
        data: [
            'heqweq',
            'asdasdasda',
            'sdagqwieuwqe'
            ]
    })
});

httpServer.listen(port, () => {
    console.log(`http listening on localhost:${port}`);
});
