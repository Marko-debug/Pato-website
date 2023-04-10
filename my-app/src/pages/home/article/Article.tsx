import React from "react";
import { onChange } from './utils';
import { setInputHeight } from './setInputHeight';
import { SaveButton } from "./buttons/SaveButton";
import { EditButton } from "./buttons/EditButton";
import { DeleteButton } from "./buttons/DeleteButton";
import { CancelButton } from "./buttons/CancelButton";
import { UpdateButton } from "./buttons/UpdateButton";
import { Photos }  from "./Photos";
import {useApiPost} from '../customHook'

interface PropsArticle{
    update: boolean;
    id: string,
    side: string, 
    title: {name: string, value: string},
    content: {name: string, value: string},
    cancelArticle: () => void;  // to the setState is not sending params, so we need to type it
}

interface StateArticle{
    id: string,
    side: string, 
    title: {name: string, value: string},
    content: {name: string, value: string},
    areInputsVisible: boolean,
    cancelArticle: () => void; // to the setState is not sending params, so we need to type it
}

// export const Article = ({id, side, title, text}: PropsArticle) => {
export class Article extends React.Component<PropsArticle, StateArticle> {

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
        id: this.props.id,
        side: this.props.side,
        title: this.props.title, 
        content: this.props.content, 
        areInputsVisible: false,
        cancelArticle: this.props.cancelArticle,
    };

    onChange = (event: any) => {
        let name = event.target.name;
        // let attribute = undefined;
        let value = event.target.value;
        if(name === "text")name = 'content';

        onChange(this, name, value)
    }

    showInputs = (props: boolean): any => {
        // useApiPost('http://localhost:8000/api/notes',this.props.text);
        this.setState({areInputsVisible: props})
    }

    render(){
        const { id, side, title, content, areInputsVisible } = this.state;
        return(
            <div id={id} className={side}>
                <div className="bubble-m">
                    <div className="edit-buttons">
                        {this.props.update ?
                            <UpdateButton showInputs={this.showInputs} id={id} title={title.value} content={content.value}/>
                            : 
                            <SaveButton showInputs={this.showInputs} id={id} title={title.value} content={content.value}/>
                        }
                        <EditButton showInputs={this.showInputs} />
                        {this.props.update ?
                            <DeleteButton id={id}/>
                            :
                            <CancelButton cancelArticle={this.state.cancelArticle}/>
                        }
                    </div>
                    <div className="bubble">
                        <div className="content-title">
                            {areInputsVisible ?
                                <input 
                                    // name={title.name}
                                    name={title.name}
                                    value={title.value}
                                    onChange={this.onChange}
                                    className="content-title-input"
                                    type="text" 
                                    placeholder="Vložte nadpis..."/> : `${title.value}`
                            }
                        </div>
                        <div className="article-content">
                            {areInputsVisible ? 
                                <input 
                                    // ref={this.nameField}
                                    name={content.name}
                                    value={content.value}
                                    onChange={this.onChange}
                                    // onChange={(event)=>setInputHeight(event, '100px')}
                                    className="article-content-input"
                                    type="text"  
                                    placeholder="Vložte text..."/> : `${content.value}`
                            }
                        </div>
                        <div>
                            <div className="bubble-photos">
                                 <img src={ require('../../../images/image1.jpg') } alt='not found'/>
                                 <img src={ require('../../../images/image2.jpg') } alt='not found'/>
                                 <img src={ require('../../../images/image3.jpg') } alt='not found'/>
                            </div>
                            {/* <Photos /> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}