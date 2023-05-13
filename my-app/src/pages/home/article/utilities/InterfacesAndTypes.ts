export interface ObjectData{
    note_id: string,
    side: string,
    title: {name: string, value: string},
    content: {name: string, value: string}, 
    published: number,
    images: []
    show: boolean,   
}

export type TypeNotes = {
    note_id: string,
    title: string,
    content: string,    
    createdAt: number,
    updatedAt: number,
}

export type TypeImages = {
    image_id: string,
    note_id: string,
    url: string,
}