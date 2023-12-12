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

const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-basic.jpg";

function Post() {
  const [postSuccess, setPostSuccess] = useState(false);
  const [loader, setLoader] = useState(false);

  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  // const [postSuccess, setPostSuccess] = useState(false);
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
      const response = await axios.post("http://localhost:8000/post_request/", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      setPostSuccess(true);
      setLoader(false);
      console.log("Response:", response.data);
    } catch (error) {
      setPostSuccess(false);
      setLoader(false);
      console.error("Error:", error);
    }
  };

  return (
    <>
      {!postSuccess && !loader && (
        <BasicLayout image={bgImage}>
          <Card m={5}>
            <ArgonBox p={3} textAlign="center">
              <ArgonTypography variant="h5" fontWeight="medium" sx={{ my: 1 }}>
                Report the item you found
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
                Report the item you found by mistake, there is always the owner searching for it!
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
                  <ArgonTypography
                    display="inline"
                    variant="h6"
                    color="dark"
                    fontWeight="regular"
                    // align="left"
                    // sx={{ mb: 2 }}
                  >
                    Upload image
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

      {postSuccess && !loader && (
        <BasicLayout vAlign={"center"} align={"center"} image={bgImage}>
          <Card m={5} p={3}>
            <ArgonBox
              style={{ display: "flex", flexDirection: "row", flexWrap: "wrap", overflow: "auto" }}
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={12}
              color="success"
              p={3}
            >
              <ArgonTypography display="inline" variant="h6" color="dark" fontWeight="regular">
                Successfullp posted item! Thanks for you contribution &nbsp;
                <ArgonBox
                  component="i"
                  color="primary"
                  fontSize="14px"
                  className="ni ni-spaceship"
                />
                <br />
                The Item is now available on Search Page
              </ArgonTypography>
            </ArgonBox>
          </Card>
        </BasicLayout>
      )}
    </>
  );
}

export default Post;
