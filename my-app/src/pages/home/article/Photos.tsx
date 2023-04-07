import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';

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
    <section className="container">
      <div {...getRootProps({className: 'dropzone'})}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
      </div>
      <aside 
        // style={thumbsContainer}
        >
        {thumbs}
      </aside>
    </section>
  );
}
    
    // <div className="bubble-photos">
    //     <img src={ require('../../../images/image1.jpg') } alt='not found'/>
    //     <img src={ require('../../../images/image2.jpg') } alt='not found'/>
    //     <img src={ require('../../../images/image3.jpg') } alt='not found'/>
    // </div>