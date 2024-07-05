 

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/lock-ill.jpg";

function Illustration() {
  return (
    <IllustrationLayout
      color="dark"
      header={
        <ArgonBox textAlign="center">
          <ArgonTypography variant="h4" fontWeight="bold">
            Mike Priesler
          </ArgonTypography>
          <ArgonTypography variant="body2" color="text">
            Enter password to unlock your account.
          </ArgonTypography>
        </ArgonBox>
      }
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
      button={{ color: "dark", variant: "gradient" }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput type="password" placeholder="Password" size="large" />
        </ArgonBox>
        <ArgonButton variant="gradient" color="dark" size="large" fullWidth>
          Unlock
        </ArgonButton>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
