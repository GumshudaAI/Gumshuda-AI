import { useState } from "react";
import React from "react";
import axios from "axios";
import Card from "@mui/material/Card";
import CircularProgress from "@mui/material/CircularProgress";
import BasicLayout from "layouts/authentication/components/BasicLayout";
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";
import PowerInput from "components/PowerInput";
import PowerButton from "components/PowerButton";
import DetailsModal from "components/DetailsModal"; // Import the DetailsModal component

const bgImage =
  "https://raw.githubusercontent.com/whynesspower/next-js-landing-pages/main/background.jpg";

function Search() {
  const [file, setFile] = useState(null);
  const [description, setDescription] = useState("");
  const [city, setCity] = useState("");
  const [date, setDate] = useState("");
  const [name, setName] = useState("");
  const [loader, setLoader] = useState(false);
  const [images, setImages] = useState([]);
  const [showImages, setShowImages] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null); // State to manage the selected item
  const [openModal, setOpenModal] = useState(false); // State to manage modal open/close

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

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
      const response = await axios.post(
        "https://wmumfbmzka.ap-south-1.awsapprunner.com/get_results/",
        // "http://localhost:8000/get_results/",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setShowImages(true);
      setImages(response.data.result.matches);
      setLoader(false);
      console.log("Response:", response.data.result.matches);
    } catch (error) {
      setShowImages(false);
      setLoader(false);
      console.error("Error:", error);
    }
  };

  const handleOpenModal = (item) => {
    setSelectedItem(item);
    setOpenModal(true);
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedItem(null);
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
                  <PowerTypography display="inline" variant="h6" color="dark" fontWeight="regular">
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
                  <PowerTypography display="inline" variant="h6" color="dark" fontWeight="regular">
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
            {images.map((item, index) => (
              <PowerBox
                key={index}
                color="white"
                bgColor="red"
                variant="gradient"
                borderRadius="md"
                shadow="lg"
                opacity={1}
                p={1}
                m={1}
                textAlign="center"
                onClick={() => handleOpenModal(item)} // Open modal on click
              >
                <img
                  src={item.metadata.style_image}
                  style={{ width: "320px", height: "250px" }}
                  alt={`${index}`}
                />
                <PowerTypography variant="h6" component="h2">
                  {item.metadata.name}
                </PowerTypography>
                <PowerTypography sx={{ mt: 2 }}>
                  Description: {item.metadata.description}
                </PowerTypography>
                <PowerTypography sx={{ mt: 2 }}>City: {item.metadata.city}</PowerTypography>
                <PowerTypography sx={{ mt: 2 }}>Date: {item.metadata.date}</PowerTypography>
                <PowerBox mt={4} mb={1}>
                  <PowerButton type="button" color="success" fullWidth>
                    Claim Item!
                  </PowerButton>
                </PowerBox>
              </PowerBox>
            ))}
          </PowerBox>
        </BasicLayout>
      )}
      <DetailsModal open={openModal} handleClose={handleCloseModal} item={selectedItem} />{" "}
      {/* Modal component */}
    </>
  );
}

export default Search;
