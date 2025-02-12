import express, { Request, Response } from 'express';

const app = express();
const port = 3001;

app.get('/', (req: Request, res: Response) => {
  res.send('TypeScript + Express!');
});

app.listen(port, () => {
  console.log(`サーバーが起動しました: http://localhost:${port}`);
});
