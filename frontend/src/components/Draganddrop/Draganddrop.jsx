import React, { useState } from 'react';
import './drag.scss';
import FileUploadOutlinedIcon from '@mui/icons-material/FileUploadOutlined';

function Dragdrop() {
  const [images, setImages] = useState([]);
  const [selectedImages, setSelectedImages] = useState([]);
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleImageChange = (e) => {
    const selectedFiles = Array.from(e.target.files);
    const selectedImagesPreviews = [];

    if (selectedFiles.length > 0) {
      selectedFiles.forEach((file) => {
        const reader = new FileReader();
        reader.onload = () => {
          selectedImagesPreviews.push(reader.result);
          if (selectedImagesPreviews.length === selectedFiles.length) {
            setSelectedImages([...selectedImages, ...selectedImagesPreviews]);
          }
        };
        reader.readAsDataURL(file);
      });
    }
  };

  const handleUploadClick = () => {
    if (selectedImages.length > 0) {
      setImages([...images, ...selectedImages]); 
      setSelectedImages([]); 
      setUploadSuccess(true);

      // Log the images array to the console
      console.log('Uploaded Images:', images);
    }
  };

  return (
    <div id="App">
      <div className="drop-zone">
        {selectedImages.length > 0 ? (
          <div className="image-preview">
            {selectedImages.map((image, index) => (
              <img key={index} src={image} alt={`Uploaded ${index}`} />
            ))}
          </div>
        ) : (
           <div>
              
          <p> 
            Drag & drop images or click to upload</p>
          </div>
        )}
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          id="fileInput"
          style={{ display: 'none' }}
          multiple
        />
        <label htmlFor="fileInput" className="upload-button">
          Upload Images
        </label>
        {selectedImages.length > 0 && (
          <button className="upload-button" onClick={handleUploadClick}>
            Confirm Upload
          </button>
        )}
      </div >
      {uploadSuccess  && <p style={{marginTop:"-8px"}}>Successfully uploaded {selectedImages.length} images!</p>}
    </div>
  );
}

export default Dragdrop;
