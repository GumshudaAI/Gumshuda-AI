 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonAvatar from "components/ArgonAvatar";

function ProductCell({ image, name, orders }) {
  return (
    <ArgonBox display="flex" alignItems="center" pr={2}>
      <ArgonBox mr={2}>
        <ArgonAvatar src={image} alt={name} variant="rounded" />
      </ArgonBox>
      <ArgonBox display="flex" flexDirection="column">
        <ArgonTypography variant="button" fontWeight="medium">
          {name}
        </ArgonTypography>
        <ArgonTypography variant="button" fontWeight="medium" color="secondary">
          <ArgonTypography component="span" variant="button" color="success">
            {orders}
          </ArgonTypography>{" "}
          orders
        </ArgonTypography>
      </ArgonBox>
    </ArgonBox>
  );
}

// Typechecking props for the ProductCell
ProductCell.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  orders: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
};

export default ProductCell;
