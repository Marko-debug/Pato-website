import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';
import '../../../style/home/photos.css'

export const Photos = (props: any): JSX.Element => {
  const [files, setFiles] = useState<any>([]);
  const {getRootProps, getInputProps} = useDropzone({
    // accept: 'image/*',
    onDrop: acceptedFiles => {
      setFiles(acceptedFiles.map(file => Object.assign(file, {
        preview: URL.createObjectURL(file)
      })));
    }
  });

  const thumbs = files.map((file: { name: React.Key | null | undefined; preview: string | undefined; }) => (
    <div 
        // style={thumb} 
        key={file.name}>
      <div 
    //   style={thumbInner}
      >
        <img
          src={file.preview}
        //   style={img}
        />
      </div>
    </div>
  ));

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks
    files.forEach((file: { preview: string; }) => URL.revokeObjectURL(file.preview));
  }, [files]);

  return (
    <div className="bubble-photos">
      <section className="container-photos">


        <button type="button" className="image-gallery-icon image-gallery-left-nav" aria-label="Previous Slide">
          <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" height="50" width="30">
              <polyline points="25 48 5 26 25 6"></polyline>
            </svg>
        </button>

        <div className="gallery-container">
          <div className="image-container">
            <button className="btn-delete-image">
              <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" height="26" width="30">
                <polyline points="8 13 18 13"></polyline></svg>
            </button>
            <img className="image" src={ require('../../../images/image1.jpg') } alt='not found'/>
          </div>
          <div className="image-container">
            <button className="btn-delete-image">
              <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" height="26" width="30">
                <polyline points="8 13 18 13"></polyline></svg>
            </button>
            <img className="image" src={ require('../../../images/image2.jpg') } alt='not found'/>
          </div>
          
          <div className="image-container">
            <button className="btn-delete-image">
              <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" height="26" width="30">
                <polyline points="8 13 18 13"></polyline></svg>
            </button>
            <img className="image" src={ require('../../../images/image3.jpg') } alt='not found'/>
          </div>

        </div>
          <button type="button" className="image-gallery-icon image-gallery-right-nav" aria-label="Next Slide">
            <svg className="image-gallery-svg" xmlns="http://www.w3.org/2000/svg" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" height="50" width="30">
              <polyline points="5 48 25 26 5 6"></polyline>
            </svg>
          </button>
        

        {/* <div {...getRootProps({className: 'dropzone'})}>
          <input {...getInputProps()} />
          <button className="btn-insert">+</button>
        </div> */}
        <aside 
          // style={thumbsContainer}
          >
          {thumbs}
        </aside>
      </section>
    </div>
  );
}
    
    // <div className="bubble-photos">
    //     <img src={ require('../../../images/image1.jpg') } alt='not found'/>
    //     <img src={ require('../../../images/image2.jpg') } alt='not found'/>
    //     <img src={ require('../../../images/image3.jpg') } alt='not found'/>
    // </div>