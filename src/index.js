import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import { userRouter } from "./routes/user.js";
import { recipesRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3001;

app.use("/auth", userRouter);
app.use("/recipes", recipesRouter);
mongoose
  .connect(
    `mongodb://poojaraheja:pooja@ac-gdnioyq-shard-00-00.k4ltzgp.mongodb.net:27017,ac-gdnioyq-shard-00-01.k4ltzgp.mongodb.net:27017,ac-gdnioyq-shard-00-02.k4ltzgp.mongodb.net:27017/?ssl=true&replicaSet=atlas-eih3dm-shard-0&authSource=admin&retryWrites=true&w=majority`,
    // `mongodb+srv://poojaraheja:pooja@recipe.k4ltzgp.mongodb.net/recipe?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      // useFindAndModify: false,
      useUnifiedTopology: true,
    }
  )
  .then(
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT} and connected to mongo`);
    })
  )
  .catch((err) => {
    console.log(err);
  });
