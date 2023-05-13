import { Request, Response } from "express";
import { NoteModel }  from "./models/model";
import {
    CreateNoteInput,
    // FilterQueryInput,
    ParamsInput,
    UpdateNoteInput,
} from "./note.schema";


// const createData = async () => {

//     const data = await NoteModel.create({ title: "Diskusia na Svoradove", content: "Hfjdhfkal hfdjs afhdkj fhdlafhdsjk fhdkjaf dhfkjdal hdjkal fdhkj lfhadhfjkaf ldhkjfa hfdkja lhdlahfd" });
//     data;
//     console.log("inserted data")
// }

// createData();

export const createNoteController = async (
    req: Request<{}, {}, CreateNoteInput>,
    res: Response
) => {
    try{
        const {note_id, title, content } = req.body;

        const note = await NoteModel.create({
            note_id,
            title,
            content,
            // images,
        });

        res.status(201).json({
            status: "success",
            data: {
                note,
                // images,
            }
        });
    } catch (error: any){
        if (error.name === "SequelizeUniqueConstraintError"){
            return res.status(409).json({
                status: "failed",
                message: "Note with that title already exists",
            });
        }

        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const updateNoteController = async (
    req: Request<UpdateNoteInput['params'], {}, UpdateNoteInput["body"]>,
    res: Response
) => {
    try {
        const result = await NoteModel.update(
            {...req.body, updateAt: Date.now() },
            {
                where: {
                    note_id: req.params.noteId,
                },
            }
        );

        if (result[0] === 0){
            return res.status(404).json({
                status: "fail",
                message: "Note with that ID not found",
            });
        }

        const note = await NoteModel.findByPk(req.params.noteId);

        res.status(200).json({
            status: "sucess",
            data: {
                note,
                // images,
            },
        });
    } catch (error: any){
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const findNoteController = async (
    req: Request<ParamsInput>,
    res: Response
  ) => {
    try {
      const note = await NoteModel.findByPk(req.params.noteId);
  
      if (!note) {
        return res.status(404).json({
          status: "fail",
          message: "Note with that ID not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        data: {
          note,
        //   images,
        },
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

export const findAllNotesController = async (
    // req: Request<{}, {}, {}, FilterQueryInput>,
    req: Request<{}, {}, {}>,
    res: Response
  ) => {
    try {
    //   const page = req.query.page || 1;
    //   const limit = req.query.limit || 10;
    //   const skip = (page - 1) * limit;
  
    //   const notes = await NoteModel.findAll({ limit, offset: skip });
      const notes = await NoteModel.findAll();
  
      res.status(200).json({
        status: "success",
        results: notes.length,
        notes,
        // images,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

export const deleteNoteController = async (
    req: Request<ParamsInput>,
    res: Response
) => {
    try {
        const result = await NoteModel.destroy({
            where: {note_id: req.params.noteId},
            force: true,
        });
        
        if(result === 0){
            return res.status(404).json({
                status: "fail",
                message: "Note with that ID not found",
            })
        }
    } catch (error: any){
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};