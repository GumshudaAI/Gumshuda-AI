 

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";

// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";

// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/reset-ill.jpg";

function Illustration() {
  return (
    <IllustrationLayout
      title="Reset Password"
      description="You will receive an e-mail in maximum 60 seconds"
      illustration={{
        image: bgImage,
        title: "Argon Design",
        description:
          "Just as it takes a company to sustain a product, it takes a community to sustain a protocol.",
      }}
    >
      <ArgonBox component="form" role="form">
        <ArgonBox mb={2}>
          <ArgonInput type="email" placeholder="Email" size="large" />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput placeholder="Verification Code" size="large" />
        </ArgonBox>
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" fullWidth>
            Send
          </ArgonButton>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
