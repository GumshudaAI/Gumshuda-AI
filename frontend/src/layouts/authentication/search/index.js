import { useState } from "react";
import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import CircularProgress from "@mui/material/CircularProgress";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import Footer from "examples/Footer";

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg";

function Search() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  // const [postSuccess, setPostSuccess] = useState(false);
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleClaim = async (e) => {};
  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoader(true);

    const formData = new FormData();
    const finalData = JSON.stringify({
      description: description,
      name: name,
      city: city,
      date: date,
    });
    formData.append("finalData", finalData);
    formData.append("image", file);
    console.log("FormData:", formData);
    try {
      const response = await axios.post("http://localhost:8000/get_results/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setShowImages(true);
      setImages(response.data.images);
      setLoader(false);
      console.log("Response:", response.data.images);
    } catch (error) {
      setShowImages(false);
      setLoader(false);
      console.error("Error:", error);
      console.error("Error:", error);
    }
  };

  return (
    <>
      {!showImages && !loader && (
        <BasicLayout image={bgImage}>
          <Card m={5}>
            <ArgonBox p={3} textAlign="center">
              <ArgonTypography variant="h5" fontWeight="medium" sx={{ my: 1 }}>
                Search for the item you have Lost!
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox px={3} pb={3} textAlign="center">
              <ArgonTypography
                display="block"
                variant="button"
                color="dark"
                fontWeight="regular"
                sx={{ mb: 3 }}
              >
                There is a high chance that someone found the item, and reported it here
              </ArgonTypography>

              <ArgonBox component="form" role="form">
                <ArgonBox mb={1} textAlign="left">
                  <ArgonTypography
                    display="inline"
                    variant="h6"
                    color="dark"
                    fontWeight="regular"
                    // align="left"
                    // sx={{ mb: 2 }}
                  >
                    Name of the item:
                  </ArgonTypography>
                  <ArgonInput
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                  />
                </ArgonBox>

                <ArgonBox mb={1} textAlign="left">
                  <ArgonTypography display="inline" variant="h6" color="dark" fontWeight="regular">
                    Description:
                  </ArgonTypography>
                  <ArgonInput
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Description"
                  />
                </ArgonBox>

                <ArgonBox mb={1} textAlign="left">
                  <ArgonTypography display="inline" variant="h6" color="dark" fontWeight="regular">
                    City where you lost:
                  </ArgonTypography>
                  <ArgonInput
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="City"
                  />
                </ArgonBox>
                <ArgonBox mb={1} textAlign="left">
                  <ArgonTypography
                    display="inline"
                    variant="h6"
                    color="dark"
                    fontWeight="regular"
                    // align="left"
                    // sx={{ mb: 2 }}
                  >
                    When did you lose it?
                  </ArgonTypography>
                  <ArgonInput
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    placeholder="When did you lose it"
                  />
                </ArgonBox>

                <ArgonBox mb={1} textAlign="left">
                  <ArgonTypography display="inline" variant="h6" color="dark" fontWeight="regular">
                    Upload reference image
                  </ArgonTypography>
                  <ArgonInput
                    type="file"
                    onChange={handleFileChange}
                    placeholder="Upload reference image"
                  />
                </ArgonBox>

                <ArgonBox mt={4} mb={1}>
                  <ArgonButton type="submit" onClick={handleSubmit} color="info" fullWidth>
                    Submit
                  </ArgonButton>
                </ArgonBox>
              </ArgonBox>
            </ArgonBox>
          </Card>
        </BasicLayout>
      )}

      {loader && (
        <BasicLayout image={bgImage}>
          <ArgonBox color="white">
            <CircularProgress />
          </ArgonBox>
        </BasicLayout>
      )}
      {showImages && !loader && (
        <BasicLayout vAlign={"start"} align={"flex-start"} image={bgImage}>
          <ArgonBox
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", overflow: "auto" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            {images.map((link, index) => (
              <ArgonBox
                key={index}
                color="white"
                bgColor="dark"
                variant="gradient"
                borderRadius="md"
                shadow="lg"
                opacity={1}
                p={1}
                m={1}
                textAlign="center"
              >
                <img src={link} style={{ width: "320px", height: "250px" }} alt={`${index}`} />
                <ArgonBox mt={4} mb={1}>
                  <ArgonButton type="button" onClick={handleClaim} color="success" fullWidth>
                    Claim Item!
                  </ArgonButton>
                </ArgonBox>
              </ArgonBox>
            ))}
          </ArgonBox>
        </BasicLayout>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default Search;
