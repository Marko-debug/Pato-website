import { Request, Response } from "express";
import { ImageModel }  from "./models/model";
import {
    CreateImageInput,
    // FilterQueryInput,
    ParamsInput,
} from "./image.schema";

export const createImageController = async (
    req: Request<{}, {}, CreateImageInput>,
    res: Response
) => {
    try{
        const {image_id, noteNoteId, url } = req.body;

        const image = await ImageModel.create({
            image_id,
            noteNoteId,
            url,
        });

        res.status(201).json({
            status: "success",
            data: {
                image,
            }
        });
    } catch (error: any){
        if (error.name === "SequelizeUniqueConstraintError"){
            return res.status(409).json({
                status: "failed",
                message: "Image with that image_id already exists",
            });
        }

        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};

export const findImageController = async (
    req: Request<ParamsInput>,
    res: Response
  ) => {
    try {
      const image = await ImageModel.findByPk(req.params.image_id);
  
      if (!image) {
        return res.status(404).json({
          status: "fail",
          message: "Image with that ID not found",
        });
      }
  
      res.status(200).json({
        status: "success",
        data: {
          image
        },
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

export const findAllImagesController = async (
    // req: Request<{}, {}, {}, FilterQueryInput>,
    req: Request<{}, {}, {}>,
    res: Response
  ) => {
    try {
    //   const page = req.query.page || 1;
    //   const limit = req.query.limit || 10;
    //   const skip = (page - 1) * limit;
  
    //   const notes = await NoteModel.findAll({ limit, offset: skip });
      const images = await ImageModel.findAll();
  
      res.status(200).json({
        status: "success",
        results: images.length,
        images,
      });
    } catch (error: any) {
      res.status(500).json({
        status: "error",
        message: error.message,
      });
    }
  };

export const deleteImageController = async (
    req: Request<ParamsInput>,
    res: Response
) => {
    try {
        const result = await ImageModel.destroy({
            where: {image_id: req.params.image_id},
            force: true,
        });
        
        if(result === 0){
            return res.status(404).json({
                status: "fail",
                message: "Image with that ID not found",
            })
        }
    } catch (error: any){
        res.status(500).json({
            status: "error",
            message: error.message,
        });
    }
};