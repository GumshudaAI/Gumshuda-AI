 

// sweetalert2 components
import Swal from "sweetalert2";

// Sweet Alerts page components
import Template from "layouts/pages/sweet-alerts/components/Template";

function TitleWithText() {
  const showAlert = () =>
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageAlt: "Custom image",
    });

  return <Template title="A title with a text under" action={showAlert} />;
}

export default TitleWithText;
