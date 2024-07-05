 

import { useEffect, useRef } from "react";

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Dropzone components
import Dropzone from "dropzone";

// Dropzone styles
import "dropzone/dist/dropzone.css";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Custom styles for the ArgonDropzone
import ArgonDropzoneRoot from "components/ArgonDropzone/ArgonDropzoneRoot";

function ArgonDropzone({ options }) {
  const dropzoneRef = useRef();

  useEffect(() => {
    Dropzone.autoDiscover = false;

    function createDropzone() {
      return new Dropzone(dropzoneRef.current, { ...options });
    }

    function removeDropzone() {
      if (Dropzone.instances.length > 0) Dropzone.instances.forEach((dz) => dz.destroy());
    }

    createDropzone();

    return () => removeDropzone();
  }, [options]);

  return (
    <ArgonDropzoneRoot
      component="form"
      action="/file-upload"
      ref={dropzoneRef}
      className="form-control dropzone"
    >
      <ArgonBox className="fallback">
        <ArgonBox component="input" name="file" type="file" multiple />
      </ArgonBox>
    </ArgonDropzoneRoot>
  );
}

// Typechecking props for the ArgonDropzone
ArgonDropzone.propTypes = {
  options: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default ArgonDropzone;
