import './ImageList.css'
import React from 'react';
import ImageCard from './ImageCard';

const ImageList = props => {
//  const images =   props.images.map(({description, id, urls} ) => {
//         return <img alt={description} key={id} src={urls.regular}  />
//     });

const images =   props.images.map((img) => {
    return <ImageCard key={img.id} imagePreview={img}  />
});
return <div className="image-list">{images}</div>
}


export default ImageList;
