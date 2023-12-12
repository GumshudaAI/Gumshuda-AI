 

// prop-types is a library for typechecking of props
import PropTypes from "prop-types";

// @mui material components
import Grid from "@mui/material/Grid";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

// Gumshuda AI MUI example components
import DefaultPricingCard from "examples/Cards/PricingCards/DefaultPricingCard";

function PricingCards({ prices }) {
  const [starter, premium, enterprise] = prices;
  return (
    <ArgonBox position="relative" zIndex={10} mt={-18} px={{ xs: 1, sm: 0 }}>
      <Grid container spacing={3} justifyContent="center">
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            title="starter"
            price={{ currency: "$", value: starter }}
            specifications={[
              { label: "2 team members", includes: true },
              { label: "20GB Cloud storage", includes: true },
              { label: "Integration help", includes: false },
              { label: "Sketch Files", includes: false },
              { label: "API Access", includes: false },
              { label: "Complete documentation", includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "dark",
              label: "Join",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            title="premium"
            price={{ currency: "$", value: premium }}
            specifications={[
              { label: "10 team members", includes: true },
              { label: "40GB Cloud storage", includes: true },
              { label: "Integration help", includes: true },
              { label: "Sketch Files", includes: true },
              { label: "API Access", includes: false },
              { label: "Complete documentation", includes: false },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "info",
              label: "Try Premium",
            }}
          />
        </Grid>
        <Grid item xs={12} lg={4}>
          <DefaultPricingCard
            title="enterprise"
            price={{ currency: "$", value: enterprise }}
            specifications={[
              { label: "Unlimited team members", includes: true },
              { label: "100GB Cloud storage", includes: true },
              { label: "Integration help", includes: true },
              { label: "Sketch Files", includes: true },
              { label: "API Access", includes: true },
              { label: "Complete documentation", includes: true },
            ]}
            action={{
              type: "internal",
              route: "/",
              color: "dark",
              label: "Join",
            }}
          />
        </Grid>
      </Grid>
    </ArgonBox>
  );
}

// Typechecking props for the PricingCards
PricingCards.propTypes = {
  prices: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default PricingCards;
