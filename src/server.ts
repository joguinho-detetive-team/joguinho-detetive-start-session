import app from "./app";
import { Logger } from "./utils";

const port = process.env.PORT || 3001;

app.listen(port, () => {
  Logger.info(`Server listening on port: ${port}`);
});

