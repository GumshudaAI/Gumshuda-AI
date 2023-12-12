 
// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

// Custom styles for the ArgonEditor
import ArgonEditorRoot from "components/ArgonEditor/ArgonEditorRoot";

function ArgonEditor(props) {
  return (
    <ArgonEditorRoot>
      <ReactQuill theme="snow" {...props} />
    </ArgonEditorRoot>
  );
}

export default ArgonEditor;
