export interface ObjectData{
    id: string,
    side: string,
    title: {name: string, value: string},
    content: {name: string, value: string}, 
    published: number,
    show: boolean,   
}

export type TypeNotes = {
    id: string,
    title: string,
    content: string,    
    createdAt: number,
    updatedAt: number,
}