import React, {useEffect, useState} from 'react';
import '../../../style/home/myGallery.css'
import { v4 as uuidv4 } from "uuid";
import {showSlides } from "./PhotoFunctions"
// interface Element {
//   style: CSSStyleDeclaration
// }

export const MyGallery = ({areInputsVisible}: {areInputsVisible: boolean}): JSX.Element => {
  const [images, setImages] = useState<any>([]);
    // Create a reference to the hidden file input element
  const hiddenFileInput = React.useRef<HTMLInputElement>(null);
  
  // Programatically click the hidden file input element
  // when the Button component is clicked
  const handleClick = () => {
    if (hiddenFileInput.current) {
      hiddenFileInput.current.click();
  }
  };
  // Call a function (passed as a prop from the parent component)
  // to handle the user-selected file 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const len = images.length;
    if(len > 9){
      alert(`You are trying to insert more than 10 images`)
      return; 
    }
    const selectedFiles = event.target.files as FileList;
    const url = URL.createObjectURL(selectedFiles?.[0]);
    setImages([...images, { id: uuidv4(), url: url}]);
    console.log(images);
  }

  const deleteImage = (id: string) =>{
    const filteredImage = images.filter((image: any) => image.id !== id)
    setImages([...filteredImage]);
  }
  
  let slideIndex = 1;
//   if(images.length > 0) {
//       showSlides(slideIndex);
//   }
  

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
        {images.map((image:any, i: number) =>{
            return(     
                <div id={image.id} className="image-container" key={i}>
                  {/* delete button in svg with polyline */}
                  <button id="jano" className="btn-delete-image" onClick={()=>deleteImage(image.id) }>
                    <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" height="26" width="30">
                      <polyline points="8 13 18 13"></polyline></svg>
                  </button>
                  <img className="image" src= {image.url} alt='not found'/>
                </div>
            );
        })}

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
              onChange={handleChange}  
              ref={hiddenFileInput} 
              multiple 
              style={{display: 'none'}} />
            <button className="btn-insert" onClick={()=>handleClick()}>+</button>
          </div>
           : null
        }
      </section>
    </div>
  );

}