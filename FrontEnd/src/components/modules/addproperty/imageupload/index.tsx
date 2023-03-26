import { Button } from '@mui/material';
import React from 'react';
import ImageUploading from 'react-images-uploading';

export function ImageUploadWrapper({ images, setImages }:any) {
    // const [images, setImages] = React.useState([]);
    const maxNumber = 69;

    const onChange = (imageList:any, addUpdateIndex:any) => {
        // data for submit
        // console.log('test image',imageList);
        setImages(imageList);
    };

//    const  uploadPicture = (e:any) => {
//     console.log('test',e.target.files[0])
//        setImages([...images, e.target.files[0]])
//         // this.setState({
//         //     /* contains the preview, if you want to show the picture to the user
//         //        you can access it with this.state.currentPicture
//         //    */
//         //     picturePreview: URL.createObjectURL(e.target.files[0]),
//         //     /* this contains the file we want to send */
//         //     pictureAsFile: e.target.files[0]
//         // })
//     };

    return (
        <div className="App">
             <ImageUploading
                multiple
                value={images}
                onChange={onChange}
                maxNumber={maxNumber}
                dataURLKey="data_url"
            >
                {({
                    imageList,
                    onImageUpload,
                    onImageRemoveAll,
                    onImageUpdate,
                    onImageRemove,
                    isDragging,
                    dragProps,
                }) => (
                    // write your building UI
                    <div className="upload__image-wrapper">
                        <Button
                            variant="contained"
                            style={isDragging ? { color: 'red', margin: 10 } : {margin:10}}
                            onClick={onImageUpload}
                            {...dragProps}
                          
                        >
                            Click or Drop Image Here
                        </Button>
                        &nbsp;
                        <Button variant="contained" onClick={onImageRemoveAll} style={{margin:10}}>Remove all images</Button>
                        {imageList.map((image, index) => (
                            <div key={index} className="image-item" style={{margin:10}}>
                                <img src={image['data_url']} alt="" width="100" />
                                <div className="image-item__btn-wrapper">
                                    <Button variant="contained" onClick={() => onImageUpdate(index)}>Update</Button>
                                    <Button variant="contained" style={{marginLeft:10}} onClick={() => onImageRemove(index)}>Remove</Button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </ImageUploading>
            {/* <input type="file" name="image" onChange={uploadPicture} /> */}
        </div>
    );
}