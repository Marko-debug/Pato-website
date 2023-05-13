// require ("dotenv").config();
import express, { Request, Response } from "express";
import morgan from "morgan";
import cors from "cors";
import { connectDB, sequelize } from './config/db';
import noteRouter from './routesNote';
import imageRouter from './routesImage';
// import NoteModel from "./model";

const app = express();

app.use(express.json({limit: '10kb'}))
if(process.env.NODE_ENV === "development") app.use(morgan("dev"));

app.use(
    cors({
        origin: ["http://localhost:3000"],
        credentials: true,
    })
)

app.use("/api/notes", noteRouter);
app.use("/api/images", imageRouter);

app.all("*", (req: Request, res: Response) => {
    res.status(404).json({
        status: "fail",
        message: `Route: ${req.originalUrl} does not exist on this server`,
    })
})


// const createData = async () => {

//         const data = await NoteModel.create({ title: "Diskusia na Svoradove", content: "Hfjdhfkal hfdjs afhdkj fhdlafhdsjk fhdkjaf dhfkjdal hdjkal fdhkj lfhadhfjkaf ldhkjfa hfdkja lhdlahfd" });
//         data;
//         console.log("inserted data")
//     }
    
    
    const PORT = 8000 || 3000;
    app.listen(PORT, async()=>{
    console.log("Server started Sucessfully");
    await connectDB();
    sequelize.sync({ force: false }).then(() => {
        console.log("Synced database successfully...");
    });
    // createData();
});