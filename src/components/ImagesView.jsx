import { useParams } from "react-router-dom"
import {GrLocationPin} from "react-icons/gr"
import ImageViewer from "react-simple-image-viewer";
import { useState,useCallback } from "react";

export const ImagesView = (props) => {
  let { id } = useParams();
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const images = [
    "http://placeimg.com/1200/800/nature",
    "http://placeimg.com/800/1200/nature",
    "http://placeimg.com/1920/1080/nature",
    "http://placeimg.com/1500/500/nature"
  ];

  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };

  return (
    
    <div id='imagesview' className='text-center'>
      <div className='container-fluid'>          
          {
            props.data
            ? props.data.filter(u => u.id==id).map(item => {
              return <div className="row" key={item.id}>
                <div className="col-sm-12 col-md-12 col-lg-6">
                  <h2 className="imagetitle">{item.title}</h2>
                </div>
                <div className="col-sm-12 col-md-12 col-lg-6">
                 
                  <p>{item.description}</p>
                  
                  <p><GrLocationPin/> {item.location}</p>
                 
                  <p>Site Area : {item.sitearea}</p>
                  <p>Property Type : {item.projecttype}</p>
                </div>
              </div>
            }) : ""
          }

      {images.map((src, index) => (
        <img
          src={src}
          onClick={() => openImageViewer(index)}
          width="300"
          key={index}
          style={{ margin: "2px" }}
          alt=""
        />
      ))}
      {isViewerOpen && (
        <ImageViewer
          src={images}
          currentIndex={currentImage}
          onClose={closeImageViewer}
          disableScroll={false}
          backgroundStyle={{
            backgroundColor: "rgba(0,0,0,0.9)"
          }}
          closeOnClickOutside={true}
        />
      )}
        
      </div>
    </div>
  )
}
