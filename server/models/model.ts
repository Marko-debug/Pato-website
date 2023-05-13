import { sequelize, DataTypes } from "../config/db";

export const NoteModel = sequelize.define("notes", {
    note_id: {
        type: DataTypes.STRING(100),
        // defaultValue: DataTypes.UUIDV4, // this line is for ganerating uuid in postgre table
        primaryKey: true,
        unique: true,
    },
    title: {
        type: DataTypes.STRING(100),
        allowNull: false,
        unique: true,
    },
    content: {
        type: DataTypes.TEXT,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
});

export const ImageModel = sequelize.define("images", {
    image_id: {
        type: DataTypes.STRING,
        // defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        unique: true,
    },
    // note_id: {
    //     type: DataTypes.STRING,
    //     allowNull: false,
    // },
    url: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    createdAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
    updatedAt: {
        type: DataTypes.DATE,
        defaultValue: DataTypes.NOW,
        allowNull: false,
    },
});

NoteModel.hasMany(ImageModel)
ImageModel.belongsTo(NoteModel)
 
