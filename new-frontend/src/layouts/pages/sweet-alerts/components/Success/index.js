 

// sweetalert2 components
import Swal from "sweetalert2";

// Sweet Alerts page components
import Template from "layouts/pages/sweet-alerts/components/Template";

function Success() {
  const showAlert = () => Swal.fire("Good job!", "You clicked the button!", "success");

  return <Template title="A success message" action={showAlert} />;
}

export default Success;
