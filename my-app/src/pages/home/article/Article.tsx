import { Dispatch, SetStateAction, Component} from "react";
import { v4 as uuidv4 } from "uuid";
import { onChange } from './utilities/utils';
import { SaveButton } from "./buttons/SaveButton";
import { EditButton } from "./buttons/EditButton";
import { DeleteButton } from "./buttons/DeleteButton";
import { CancelButtonPostArticle, CancelButton } from "./buttons/CancelButtonPostArticle";
import { UpdateButton } from "./buttons/UpdateButton";
import { MyGallery }  from "./MyGallery";
import { timeSince } from "./countingTime"
import { TypeNotes, TypeImages } from "./utilities/InterfacesAndTypes";

interface PropsArticle{
    update: boolean;
    note_id: string,
    side: string, 
    title: {name: string, value: string},
    content: {name: string, value: string},
    published: number;
    images: TypeImages[],
    note: TypeNotes,
    setData: Dispatch<SetStateAction<[]>>;
    deleteNote: (note_id: string) => void;
    deleteImage: (image_id: string) => void;
    cancelArticle: () => void;  // to the setState is not sending params, so we need to type it
}

interface StateArticle{
    note_id: string,
    side: string, 
    title: {name: string, value: string},
    content: {name: string, value: string},
    // note: { id: string,
    //         title: string,
    //         content: string,    
    //         createdAt: number,
    //         updatedAt: number,
    //         images: TypeImages[],
    // },
    note: any  // to complate the type later
    images: TypeImages[],
    areInputsVisible: boolean,
    updateImages: TypeImages[],
    cancelArticle: () => void; // to the setState is not sending params, so we need to type it
}

// export const Article = ({id, side, title, text}: PropsArticle) => {
export class Article extends Component<PropsArticle, StateArticle> {

    constructor(props: PropsArticle){
        super(props);

        // this.nameField = React.createRef();

        //this is option when it would be declare here instead of example below
        // this.state = {
        //     id: this.props.id,
        //     side: this.props.side,
        //     title: this.props.title, 
        //     text: this.props.text 
        // };
    }

    state: StateArticle = {
        note_id: this.props.note_id,
        side: this.props.side,
        title: this.props.title, 
        content: this.props.content, 
        note: this.props.note,
        images: this.props.images,
        areInputsVisible: false,
        cancelArticle: this.props.cancelArticle,
        updateImages: []
    };
    published = timeSince(this.props.published);

    onChange = (event: any) => {
        let name = event.target.name;
        let value = event.target.value;
        if(name === "text")name = 'content';

        onChange(this, name, value)
    }

    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    handleChangeImage = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { note_id, images, updateImages } = this.state;
        // if(this.len > 9){
        //     alert(`You are trying to insert more than 10 images`)
        //     return; 
        // }
        const selectedFiles = event.target.files as FileList;
        const url = URL.createObjectURL(selectedFiles?.[0]);
        // this.state.images.push( { image_id: uuidv4(), note_id: this.props.note_id, url: url})
        if(this.props.update === true){
            this.setState({ updateImages: [...updateImages, { image_id: uuidv4(), note_id: note_id, url: url}]});
        }
        else{
            this.setState({ images: [...images, { image_id: uuidv4(), note_id: note_id, url: url}]});
            console.log(images);
        }
    }

    showInputs = (props: boolean): any => {
        // useApiPost('http://localhost:8000/api/notes',this.props.text);
        this.setState({areInputsVisible: props})
    }

      // This function is called when the input changes
    inputHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        // setInputHeight(event, '400px'); it doesnt exist
        this.onChange(event); 
    };

    sortingImagesToNote = () =>{
        const { note_id, note, images } = this.state;
        const result = images.filter(image => image.image_id === note_id)
        this.setState({note: {...note, images: result}})
    }

    render(){
        const { note_id, side, title, content, areInputsVisible, images} = this.state;

        return(
            <div id={note_id} className={side}>
                <div className="bubble-m">
                    <div className="edit-buttons">
                        { this.props.update ?
                            <UpdateButton 
                                showInputs={this.showInputs} 
                                note_id={note_id} 
                                title={title.value} 
                                content={content.value}
                                images={this.state.updateImages}/>
                            : 
                            <SaveButton 
                                showInputs={this.showInputs} 
                                note_id={note_id} 
                                title={title.value} 
                                content={content.value}
                                images={images}
                                />
                        }
                        { areInputsVisible
                            ? 
                            <CancelButton showInputs={this.showInputs} />
                            :
                            <>
                                <EditButton 
                                    showInputs={this.showInputs} 
                                    cancelArticle={this.state.cancelArticle} />
                                <DeleteButton 
                                    note_id={note_id} 
                                    data={this.props.note}
                                    images={this.props.images} 
                                    setData={this.props.setData}
                                    deleteNote={this.props.deleteNote}
                                    deleteImage={this.props.deleteImage}
                                />
                            </>
                        }
                    </div>
                    <div className="bubble">
                <div className="content-title">
                            {areInputsVisible ?

                                <textarea
                                name={title.name}
                                value={title.value}
                                onChange={this.onChange}
                                className="content-title-input"
                                rows={2}
                                placeholder="Vložte nadpis..." /> : `${title.value}`

                                // <input 
                                //     // name={title.name}
                                //     name={title.name}
                                //     value={title.value}
                                //     onChange={this.onChange}
                                //     className="content-title-input"
                                //     type="text" 
                                //     contentEditable="true" 
                                //     placeholder="Vložte nadpis..."/> : `${title.value}`
                            }
                        </div>
                        <div className="article-content">
                            {areInputsVisible ? 

                                <textarea
                                    name={content.name}
                                    value={content.value}
                                    onChange={this.onChange}
                                    className="article-content-input"
                                    rows={10}
                                    cols={55}
                                    placeholder="Vložte text..." /> : `${content.value}`
                            }
                        </div>
                        <div>
                            <MyGallery
                                areInputsVisible={areInputsVisible}
                                note_id={note_id}
                                images={images}
                                handleChangeImage={this.handleChangeImage}
                                deleteImage={this.props.deleteImage}
                            />

                            <div className="dots-mapping">
                                {
                                    images.map((image: TypeImages, i: number) =>{
                                        return (
                                            <span className="dot" key={i}></span> 
                                        )
                                    })
                                }
                            </div>

                        {/*timer when the post was published */}
                        </div>
                            { this.props.published !== 0 ? 
                                <div className="published"> 
                                    {this.published}
                                </div>
                                : null
                            }
                    </div>
                </div>
            </div>
        )
    }
}