import React, { Component } from "react"
import { TypeNotes } from './article/utilities/InterfacesAndTypes'

interface TypeStoredArticles{
    id: string,
    side: string,
    title: {name: string, value: string},
    text: {name: string, value: string},    
}

// type TypeList = {
//     notes_id: string
//     title: string,
//     content: string,    
// }

interface PropsGuide{
    // createArticle: (params: any) => any;
    notes: TypeNotes[];
}

interface StateGuide{
    notes: TypeNotes[];
    name: string,
}

export class Guide extends Component<PropsGuide, StateGuide>{
    
    constructor(props: PropsGuide){
        super(props);

        this.state = {
            notes: this.props.notes,  // i dont know but notes has not the same value as this.props.notes
            name: '',
        }
    }

    // componentDidUpdate() {
        
    //   }
    
    filter = (e: React.ChangeEvent<HTMLInputElement>) => {
        const keyword = e.target.value;

        if (keyword !== ''){
            const results = this.state.notes.filter((note)=>{
                return note.title.toLowerCase().startsWith(keyword.toLowerCase());
            })
            this.setState({ notes: results });
        }else{
            this.setState({ notes: this.props.notes });
        }
        this.setState({ name: keyword });
    }

    render(): React.ReactNode {
        const { notes, name } = this.state;
        console.log(this.state.notes)
        
        return(
            <aside className="guides">
                <div className="guides-container">
                    <h1 className="title-list">List</h1>
                    <input className="search-input" type="search" value={name} onChange={this.filter} placeholder="Vyhľadať"></input>
        
                    <div className="guides-headers">
                        <div className="guides-before-nav">
                            <nav className="guides-nav">
                                
                                <ul>
                                    {notes && notes.length > 0 ? (
                                        notes.reverse().map((note: TypeNotes, i: number)=>(
                                            <li key={i}>
                                                <a  
                                                href={`#${note.note_id}`}>
                                                {note.title}
                                                </a>
                                            </li>
                                        ))
                                    )
                                        :null
                                    }

                                {/* {this.props.notes.reverse().map((note: TypeNotes, i: number) =>{
                                    return(
                                            <li key={i}><a  
                                                href={`#${note.note_id}`}>
                                                {note.title}
                                            </a></li>
                                    )
                                })} */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </aside>
        )
    }
}

