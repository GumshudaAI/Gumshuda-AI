import { useState } from "react";
import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";
import PowerInput from "components/PowerInput";
import PowerButton from "components/PowerButton";
import CircularProgress from "@mui/material/CircularProgress";
// Authentication layout components
import BasicLayout from "layouts/authentication/components/BasicLayout";

const bgImage = "https://www.example.com/image";

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
            <PowerBox p={3} textAlign="center">
              <PowerTypography variant="h5" fontWeight="medium" sx={{ my: 1 }}>
                Search for the item you have Lost!
              </PowerTypography>
            </PowerBox>
            <PowerBox px={3} pb={3} textAlign="center">
              <PowerTypography
                display="block"
                variant="button"
                color="dark"
                fontWeight="regular"
                sx={{ mb: 3 }}
              >
                There is a high chance that someone found the item, and reported it here
              </PowerTypography>

              <PowerBox component="form" role="form">
                <PowerBox mb={1} textAlign="left">
                  <PowerTypography
                    display="inline"
                    variant="h6"
                    color="dark"
                    fontWeight="regular"
                    // align="left"
                    // sx={{ mb: 2 }}
                  >
                    Name of the item:
                  </PowerTypography>
                  <PowerInput
                    onChange={(e) => setName(e.target.value)}
                    type="text"
                    placeholder="Name"
                  />
                </PowerBox>

                <PowerBox mb={1} textAlign="left">
                  <PowerTypography display="inline" variant="h6" color="dark" fontWeight="regular">
                    Description:
                  </PowerTypography>
                  <PowerInput
                    onChange={(e) => setDescription(e.target.value)}
                    type="text"
                    placeholder="Description"
                  />
                </PowerBox>

                <PowerBox mb={1} textAlign="left">
                  <PowerTypography display="inline" variant="h6" color="dark" fontWeight="regular">
                    City where you lost:
                  </PowerTypography>
                  <PowerInput
                    onChange={(e) => setCity(e.target.value)}
                    type="text"
                    placeholder="City"
                  />
                </PowerBox>
                <PowerBox mb={1} textAlign="left">
                  <PowerTypography
                    display="inline"
                    variant="h6"
                    color="dark"
                    fontWeight="regular"
                    // align="left"
                    // sx={{ mb: 2 }}
                  >
                    When did you lose it?
                  </PowerTypography>
                  <PowerInput
                    onChange={(e) => setDate(e.target.value)}
                    type="date"
                    placeholder="When did you lose it"
                  />
                </PowerBox>

                <PowerBox mb={1} textAlign="left">
                  <PowerTypography display="inline" variant="h6" color="dark" fontWeight="regular">
                    Upload reference image
                  </PowerTypography>
                  <PowerInput
                    type="file"
                    onChange={handleFileChange}
                    placeholder="Upload reference image"
                  />
                </PowerBox>

                <PowerBox mt={4} mb={1}>
                  <PowerButton type="submit" onClick={handleSubmit} color="info" fullWidth>
                    Submit
                  </PowerButton>
                </PowerBox>
              </PowerBox>
            </PowerBox>
          </Card>
        </BasicLayout>
      )}

      {loader && (
        <BasicLayout image={bgImage}>
          <PowerBox color="white">
            <CircularProgress />
          </PowerBox>
        </BasicLayout>
      )}
      {showImages && !loader && (
        <BasicLayout vAlign={"start"} align={"flex-start"} image={bgImage}>
          <PowerBox
            style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", overflow: "auto" }}
            xs={12}
            sm={12}
            md={12}
            lg={12}
            xl={12}
          >
            {images.map((link, index) => (
              <PowerBox
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
                <PowerBox mt={4} mb={1}>
                  <PowerButton type="button" onClick={handleClaim} color="success" fullWidth>
                    Claim Item!
                  </PowerButton>
                </PowerBox>
              </PowerBox>
            ))}
          </PowerBox>
        </BasicLayout>
      )}
      {/* <Footer /> */}
    </>
  );
}

export default Search;
