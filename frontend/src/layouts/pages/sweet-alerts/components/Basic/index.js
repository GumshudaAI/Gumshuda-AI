 

// sweetalert2 components
import Swal from "sweetalert2";

// Sweet Alerts page components
import Template from "layouts/pages/sweet-alerts/components/Template";

function Basic() {
  const showAlert = () => Swal.fire("Any fool can use a computer");

  return <Template title="Basic example" action={showAlert} />;
}

export default Basic;
