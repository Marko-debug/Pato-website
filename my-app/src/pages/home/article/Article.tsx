import React from "react";
import { onChange } from './utils';
import { setInputHeight } from './setInputHeight';
import { SaveButton } from "./buttons/SaveButton";
import { EditButton } from "./buttons/EditButton";
import { DeleteButton } from "./buttons/DeleteButton";
import { Photos }  from "./Photos";
import {useApiPost} from '../customHook'

interface PropsArticle{
    id: string,
    side: string, 
    title: {name: string, value: string},
    text: {name: string, value: string}
}

interface StateArticle{
    id: string,
    side: string, 
    title: {name: string, value: string},
    text: {name: string, value: string},
    areInputsVisible: boolean
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
        text: this.props.text, 
        areInputsVisible: false
    };

    onChange = (event: any) => {
        const name = event.target.name;
        let value = event.target.value;
        console.log(this.props)

        onChange(this, name, value)
    }

    showInputs = (props: boolean): any => {
        // useApiPost('http://localhost:8000/api/notes',this.props.text);
        this.setState({areInputsVisible: props})
    }

    render(){
        const { id, side, title, text, areInputsVisible } = this.state;
        return(
            <div id={id} className={side}>
                <div className="bubble-m">
                    <div className="edit-buttons">
                        <SaveButton showInputs={this.showInputs} id={id}/>
                        <EditButton showInputs={this.showInputs} />
                        <DeleteButton id={id}/>
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
                                    name={text.name}
                                    value={text.value}
                                    onChange={this.onChange}
                                    // onChange={(event)=>setInputHeight(event, '100px')}
                                    className="article-content-input"
                                    type="text"  
                                    placeholder="Vložte text..."/> : `${text.value}`
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