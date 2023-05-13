import React, {Component, createRef} from 'react';
import '../../../style/home/myGallery.css'
import {showSlides } from "./PhotoFunctions"
import {TypeImages} from './utilities/InterfacesAndTypes'
// interface Element {
//   style: CSSStyleDeclaration
// }

//function component

// export const MyGallery = ({areInputsVisible, note_id, images}: {areInputsVisible: boolean, note_id: string,images: []}): JSX.Element => {
// //   const [images, setImages] = useState<any>([]);
//     // Create a reference to the hidden file input element
//   const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  
//   // Programatically click the hidden file input element
//   // when the Button component is clicked
//   const handleClick = () => {
//     if (hiddenFileInput.current) {
//       hiddenFileInput.current.click();
//   }
//   };
//   // Call a function (passed as a prop from the parent component)
//   // to handle the user-selected file 
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     const len = images.length;
//     if(len > 9){
//       alert(`You are trying to insert more than 10 images`)
//       return; 
//     }
//     const selectedFiles = event.target.files as FileList;
//     const url = URL.createObjectURL(selectedFiles?.[0]);
//     setState([...images, { image_id: uuidv4(), note_id: note_id, url: url}]);
//     console.log(images);
//   }

//   const deleteImage = (id: string) =>{
//     const filteredImage = images.filter((image: any) => image.image_id !== id)
//     setImages([...filteredImage]);
//   }
  
//   let slideIndex = 1;
// //   if(images.length > 0) {
// //       showSlides(slideIndex);
// //   }
  

//   return (
//     <div className="bubble-photos">
//       <section className="container-photos">

//         {/* button for moving back */}
//         <button 
//             type="button" 
//             className="image-gallery-icon image-gallery-left-nav" 
//             // onClick={()=>plusSlides(-1)} 
//             aria-label="Previous Slide">
//           <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" height="50" width="30">
//               <polyline points="25 48 5 26 25 6"></polyline>
//             </svg>
//         </button>

//         <div className="gallery-container">
//         {/* rendering images */}
//         {images.map((image:any, i: number) =>{
//             return(     
//                 <div id={image.image_id} className="image-container" key={i}>
//                   {/* delete button in svg with polyline */}
//                   <button id="jano" className="btn-delete-image" onClick={()=>deleteImage(image.image_id) }>
//                     <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="26" width="30">
//                       <polyline points="8 13 18 13"></polyline></svg>
//                   </button>
//                   <img className="image" src= {image.url} alt='not found'/>
//                 </div>
//             );
//         })}

//         </div>
//         {/* button for moving forward */}
//           <button 
//             type="button" 
//             className="image-gallery-icon image-gallery-right-nav" 
//             // onClick={()=>plusSlides(1)} 
//             aria-label="Next Slide">
//             <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" height="50" width="30">
//               <polyline points="5 48 25 26 5 6"></polyline>
//             </svg>
//           </button>
        
//         { areInputsVisible ?
//           <div >
//             {/* <label htmlFor="imageUpload">+</label> */}
//             <input 
//               id="imageUpload" 
//               name="imageUpload" 
//               type="file" 
//               accept=".jpg, .jpeg, .png" 
//               onChange={handleChange}  
//               ref={hiddenFileInput} 
//               multiple 
//               style={{display: 'none'}} />
//             <button className="btn-insert" onClick={()=>handleClick()}>+</button>
//           </div>
//            : null
//         }
//       </section>
//     </div>
//   );

// }

interface PropsMyGallery{
    areInputsVisible: boolean, 
    note_id: string,
    images: TypeImages[],
    handleChangeImage: any,
    deleteImage: (image_id: string) => void,
}
interface StateMyGallery{
    areInputsVisible: boolean,
    images: TypeImages[],
}

export class MyGallery extends Component<PropsMyGallery, StateMyGallery> {
    // Create a reference to the hidden file input element
    hiddenFileInput: React.RefObject<HTMLInputElement>;
    constructor(props: PropsMyGallery){
        super(props)
        this.hiddenFileInput = createRef();
    }

    state: StateMyGallery = {
        areInputsVisible: this.props.areInputsVisible,
        images: this.props.images
    }

    len = this.props.images.length;

    // Programatically click the hidden file input element
    // when the Button component is clicked
    handleClick = () => {
        if (this.hiddenFileInput.current) {
            this.hiddenFileInput.current.click();
        }
    };
    // Call a function (passed as a prop from the parent component)
    // to handle the user-selected file 
    // handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     const { images } = this.state;
    //     // if(this.len > 9){
    //     //     alert(`You are trying to insert more than 10 images`)
    //     //     return; 
    //     // }
    //     const selectedFiles = event.target.files as FileList;
    //     const url = URL.createObjectURL(selectedFiles?.[0]);
    //     // this.state.images.push( { image_id: uuidv4(), note_id: this.props.note_id, url: url})
    //     this.setState({ images: [...images, { image_id: uuidv4(), note_id: this.props.note_id, url: url}]});
    //     console.log(this.state.images);
    // }

    deleteImage = (id: string) =>{
        const filteredImage = this.state.images.filter((image: any) => image.image_id !== id)
        this.setState({ images: [...filteredImage]});
    }
    
    slideIndex = 1;
    // if(images.length > 0) {
    //     showSlides(slideIndex);
    // }
    
    render(){
        const {areInputsVisible, images } = this.props;
        // console.log(images)
        return (
            <div className="bubble-photos">
            <section className="container-photos">
                    {/* button for moving back */}
                    <button 
                        type="button" 
                        className="image-gallery-icon image-gallery-left-nav" 
                        // onClick={()=>plusSlides(-1)} 
                        aria-label="Previous Slide">
                    <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" height="50" width="30">
                        <polyline points="25 48 5 26 25 6"></polyline>
                        </svg>
                    </button>
            
                    <div className="gallery-container">
                    {/* rendering images */}
                    { this.len > 0 ?
                        images.map((image:any, i: number) =>{
                            return(     
                                <div id={image.image_id} className="image-container" key={i}>
                                {/* delete button in svg with polyline */}
                                <button id="jano" className="btn-delete-image" onClick={()=>this.props.deleteImage(image.image_id) }>
                                    <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="26" width="30">
                                    <polyline points="8 13 18 13"></polyline></svg>
                                </button>
                                <img className="image" src= {image.url} alt='not found'/>
                                </div>
                            );
                        })
                        : null
                    }
                    
            
                    </div>
                    {/* button for moving forward */}
                    <button 
                        type="button" 
                        className="image-gallery-icon image-gallery-right-nav" 
                        // onClick={()=>plusSlides(1)} 
                        aria-label="Next Slide">
                        <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" height="50" width="30">
                        <polyline points="5 48 25 26 5 6"></polyline>
                        </svg>
                    </button>

                { areInputsVisible ?
                <div >
                    {/* <label htmlFor="imageUpload">+</label> */}
                    <input 
                    id="imageUpload" 
                    name="imageUpload" 
                    type="file" 
                    accept=".jpg, .jpeg, .png" 
                    onChange={this.props.handleChangeImage}  
                    ref={this.hiddenFileInput} 
                    multiple 
                    style={{display: 'none'}} />
                    <button className="btn-insert" onClick={()=>this.handleClick()}>+</button>
                </div>
                : null
                }
            </section>
            </div>
        );
    }
}