 

import { useState } from "react";

// react-images-viewer components
import ImgsViewer from "react-images-viewer";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Images
const image1 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb.jpg";
const image2 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-1.jpg";
const image3 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-2.jpg";
const image4 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-4.jpg";
const image5 =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/product-thumb-5.jpg";

function ProductImages() {
  const [currentImage, setCurrentImage] = useState(image1);
  const [imgsViewer, setImgsViewer] = useState(false);
  const [imgsViewerCurrent, setImgsViewerCurrent] = useState(0);

  const handleSetCurrentImage = ({ currentTarget }) => {
    setCurrentImage(currentTarget.src);
    setImgsViewerCurrent(Number(currentTarget.id));
  };

  const openImgsViewer = () => setImgsViewer(true);
  const closeImgsViewer = () => setImgsViewer(false);
  const imgsViewerNext = () => setImgsViewerCurrent(imgsViewerCurrent + 1);
  const imgsViewerPrev = () => setImgsViewerCurrent(imgsViewerCurrent - 1);

  return (
    <ArgonBox>
      <ImgsViewer
        imgs={[{ src: image1 }, { src: image2 }, { src: image3 }, { src: image4 }, { src: image5 }]}
        isOpen={imgsViewer}
        onClose={closeImgsViewer}
        currImg={imgsViewerCurrent}
        onClickPrev={imgsViewerPrev}
        onClickNext={imgsViewerNext}
        backdropCloseable
      />

      <ArgonBox
        component="img"
        src={currentImage}
        alt="Product Image"
        shadow="lg"
        borderRadius="lg"
        width="100%"
        onClick={openImgsViewer}
      />
      <ArgonBox mt={2} pt={1}>
        <Grid container spacing={3}>
          <Grid item xs={2.4}>
            <ArgonBox
              component="img"
              id={0}
              src={image1}
              alt="small image 1"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ArgonBox
              component="img"
              id={1}
              src={image2}
              alt="small image 2"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ArgonBox
              component="img"
              id={2}
              src={image3}
              alt="small image 3"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ArgonBox
              component="img"
              id={3}
              src={image4}
              alt="small image 4"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
          <Grid item xs={2.4}>
            <ArgonBox
              component="img"
              id={4}
              src={image5}
              alt="small image 5"
              borderRadius="lg"
              shadow="md"
              width="100%"
              sx={{ cursor: "pointer", height: "100%", objectFit: "cover" }}
              onClick={handleSetCurrentImage}
            />
          </Grid>
        </Grid>
      </ArgonBox>
    </ArgonBox>
  );
}

export default ProductImages;
