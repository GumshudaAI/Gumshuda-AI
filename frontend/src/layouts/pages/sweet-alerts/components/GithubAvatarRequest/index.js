 

/* eslint-disable no-dupe-keys */
// sweetalert2 components
import Swal from "sweetalert2";

// Sweet Alerts page components
import Template from "layouts/pages/sweet-alerts/components/Template";

function GithubAvatarRequest() {
  const showAlert = () => {
    const newSwal = Swal.mixin({
      customClass: {
        confirmButton: "button button-success",
        cancelButton: "button button-error",
      },
    });
    newSwal
      .fire({
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: (login) =>
          fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            }),
        title: "Submit your Github username",
        input: "text",
        inputAttributes: {
          autocapitalize: "off",
        },
        showCancelButton: true,
        confirmButtonText: "Look up",
        showLoaderOnConfirm: true,
        preConfirm: (login) =>
          fetch(`//api.github.com/users/${login}`)
            .then((response) => {
              if (!response.ok) {
                throw new Error(response.statusText);
              }
              return response.json();
            })
            .catch((error) => {
              Swal.showValidationMessage(`Request failed: ${error}`);
            }),
        allowOutsideClick: () => !Swal.isLoading(),
      })
      .then((result) => {
        if (result.isConfirmed) {
          Swal.fire({
            title: `${result.value.login}'s avatar`,
            imageUrl: result.value.avatar_url,
          });
        }
      });
  };

  return <Template title="A success message" action={showAlert} />;
}

export default GithubAvatarRequest;
