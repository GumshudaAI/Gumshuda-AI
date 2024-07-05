 

import { useState } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Icon from "@mui/material/Icon";
import Switch from "@mui/material/Switch";
import Tooltip from "@mui/material/Tooltip";
import Divider from "@mui/material/Divider";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Images
import logoSlack from "assets/images/small-logos/logo-slack.svg";
import logoSpotify from "assets/images/small-logos/logo-spotify.svg";
import logoAtlassian from "assets/images/small-logos/logo-atlassian.svg";
import logoAsana from "assets/images/small-logos/logo-asana.svg";

// Gumshuda AI MUI contexts
import { useArgonController } from "context";

function Accounts() {
  const [controller] = useArgonController();
  const { darkMode } = controller;
  const [slack2FA, setSlack2FA] = useState(true);
  const [spotify2FA, setSpotify2FA] = useState(true);
  const [atlassian2FA, setAtlassian2FA] = useState(true);
  const [asana2FA, setAsana2FA] = useState(false);

  const handleSetSlack2FA = () => setSlack2FA(!slack2FA);
  const handleSetSpotify2FA = () => setSpotify2FA(!spotify2FA);
  const handleSetAtlassian2FA = () => setAtlassian2FA(!atlassian2FA);
  const handleSetAsana2FA = () => setAsana2FA(!asana2FA);

  return (
    <Card id="accounts">
      <ArgonBox p={3} lineHeight={1}>
        <ArgonBox mb={1}>
          <ArgonTypography variant="h5">Accounts</ArgonTypography>
        </ArgonBox>
        <ArgonTypography variant="button" color="text" fontWeight="regular">
          Here you can setup and manage your integration settings.
        </ArgonTypography>
      </ArgonBox>
      <ArgonBox pt={2} pb={3} px={3}>
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ArgonBox display="flex" alignItems="center">
            <ArgonAvatar src={logoSlack} alt="Slack logo" variant="rounded" />
            <ArgonBox ml={2}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Slack
              </ArgonTypography>
              <ArgonBox display="flex" alignItems="flex-end">
                <ArgonTypography variant="button" color="text" fontWeight="regular">
                  Show less
                </ArgonTypography>
                <ArgonTypography variant="button" color="text" sx={{ lineHeight: 0 }}>
                  <Icon fontSize="small">expand_less</Icon>
                </ArgonTypography>
              </ArgonBox>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ArgonBox lineHeight={0} mx={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                {slack2FA ? "Enabled" : "Disabled"}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={1}>
              <Switch checked={slack2FA} onChange={handleSetSlack2FA} />
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
        <ArgonBox ml={2} pl={6} pt={2} lineHeight={1}>
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            You haven&apos;t added your Slack yet or you aren&apos;t authorized. Please add our
            Slack Bot to your account by clicking on here. When you&apos;ve added the bot, send your
            verification code that you have received.
          </ArgonTypography>
          <ArgonBox
            bgColor={darkMode ? "transparent" : "grey-100"}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <ArgonTypography variant="button" fontWeight="medium" color="text">
              Verification Code
            </ArgonTypography>
            <ArgonBox width={{ xs: "100%", sm: "25%", md: "15%" }} mt={{ xs: 1, sm: 0 }}>
              <Tooltip title="Copy" placement="top">
                <ArgonInput size="small" value="1172913" />
              </Tooltip>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox
            bgColor={darkMode ? "transparent" : "grey-100"}
            borderRadius="lg"
            display="flex"
            justifyContent="space-between"
            alignItems={{ xs: "flex-start", sm: "center" }}
            flexDirection={{ xs: "column", sm: "row" }}
            my={3}
            py={1}
            pl={{ xs: 1, sm: 2 }}
            pr={1}
          >
            <ArgonTypography variant="button" fontWeight="medium" color="text">
              Connected account
            </ArgonTypography>
            <ArgonBox
              display="flex"
              alignItems={{ xs: "flex-start", sm: "center" }}
              flexDirection={{ xs: "column", sm: "row" }}
            >
              <ArgonBox mr={2} mb={{ xs: 1, sm: 0 }} lineHeight={0}>
                <ArgonTypography variant="button" fontWeight="medium">
                  hello@creative-tim.com
                </ArgonTypography>
              </ArgonBox>
              <ArgonButton variant="gradient" color="error" size="small">
                Delete
              </ArgonButton>
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
        <Divider />
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ArgonBox display="flex" alignItems="center">
            <ArgonAvatar src={logoSpotify} alt="Slack logo" variant="rounded" />
            <ArgonBox ml={2} lineHeight={0}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Spotify
              </ArgonTypography>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Music
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ArgonBox lineHeight={0} mx={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                {spotify2FA ? "Enabled" : "Disabled"}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={1}>
              <Switch checked={spotify2FA} onChange={handleSetSpotify2FA} />
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
        <Divider />
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ArgonBox display="flex" alignItems="center">
            <ArgonAvatar src={logoAtlassian} alt="Slack logo" variant="rounded" />
            <ArgonBox ml={2} lineHeight={0}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Atlassian
              </ArgonTypography>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Payment vendor
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ArgonBox lineHeight={0} mx={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                {atlassian2FA ? "Enabled" : "Disabled"}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={1}>
              <Switch checked={atlassian2FA} onChange={handleSetAtlassian2FA} />
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
        <Divider />
        <ArgonBox
          display="flex"
          justifyContent="space-between"
          alignItems={{ xs: "flex-start", sm: "center" }}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <ArgonBox display="flex" alignItems="center">
            <ArgonAvatar src={logoAsana} alt="Slack logo" variant="rounded" />
            <ArgonBox ml={2} lineHeight={0}>
              <ArgonTypography variant="h5" fontWeight="medium">
                Asana
              </ArgonTypography>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                Organize your team
              </ArgonTypography>
            </ArgonBox>
          </ArgonBox>
          <ArgonBox
            display="flex"
            alignItems="center"
            justifyContent="flex-end"
            width={{ xs: "100%", sm: "auto" }}
            mt={{ xs: 1, sm: 0 }}
          >
            <ArgonBox lineHeight={0} mx={2}>
              <ArgonTypography variant="button" color="text" fontWeight="regular">
                {asana2FA ? "Enabled" : "Disabled"}
              </ArgonTypography>
            </ArgonBox>
            <ArgonBox mr={1}>
              <Switch checked={asana2FA} onChange={handleSetAsana2FA} />
            </ArgonBox>
          </ArgonBox>
        </ArgonBox>
      </ArgonBox>
    </Card>
  );
}

export default Accounts;
