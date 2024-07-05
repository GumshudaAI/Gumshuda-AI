import { useEffect, useState } from "react";
import Default from "layouts/dashboards/default";
// react-router-dom components
import { useLocation, NavLink } from "react-router-dom";
// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";
// @mui material components
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import Link from "@mui/material/Link";
import Icon from "@mui/material/Icon";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";

// Gumshuda AI MUI example components
import SidenavCollapse from "examples/Sidenav/SidenavCollapse";
import SidenavList from "examples/Sidenav/SidenavList";
import SidenavItem from "examples/Sidenav/SidenavItem";

// Custom styles for the Sidenav
import SidenavRoot from "examples/Sidenav/SidenavRoot";
import sidenavLogoLabel from "examples/Sidenav/styles/sidenav";

// Gumshuda AI MUI context
import { usePowerController, setMiniSidenav } from "context";
import Search from "layouts/authentication/search";
import Post from "layouts/authentication/post-found-item";

function Sidenav({ color, brand, brandName, routes, ...rest }) {
  const [openCollapse, setOpenCollapse] = useState(false);
  const [openNestedCollapse, setOpenNestedCollapse] = useState(false);
  const [controller, dispatch] = usePowerController();
  const { miniSidenav, darkSidenav, layout } = controller;
  const location = useLocation();
  const { pathname } = location;
  const collapseName = pathname.split("/").slice(1)[0];
  const itemName = pathname.split("/").slice(1)[1];

  const routes1 = [
    {
      type: "collapse",
      name: "Dashboards",
      key: "dashboards",
      icon: <PowerBox component="i" color="primary" fontSize="14px" className="ni ni-shop" />,
      collapse: [
        {
          name: "Home",
          key: "Home",
          route: "/home",
          component: <Default />,
        },
      ],
    },
    {
      type: "collapse",
      name: "Application",
      key: "dashboards",
      icon: <PowerBox component="i" color="warning" fontSize="14px" className="ni ni-ui-04" />,
      collapse: [
        {
          name: "Search Lost Item",
          key: "search-lost-item",
          route: "/search-lost-item",
          component: <Search />,
        },
        {
          name: "Post Found Item",
          key: "post-found-item",
          route: "/post-found-item",
          component: <Post />,
        },
      ],
    },
  ];
  const closeSidenav = () => setMiniSidenav(dispatch, true);

  useEffect(() => {
    // A function that sets the mini state of the sidenav.
    function handleMiniSidenav() {
      setMiniSidenav(dispatch, window.innerWidth < 1200);
    }

    /** 
     The event listener that's calling the handleMiniSidenav function when resizing the window.
    */
    window.addEventListener("resize", handleMiniSidenav);

    // Call the handleMiniSidenav function to set the state with the initial value.
    handleMiniSidenav();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleMiniSidenav);
  }, [dispatch, location]);

  // Render all the nested collapse items from the routes.js
  const renderNestedCollapse = (collapse) => {
    const template = collapse.map(({ name, route, key, href }) =>
      href ? (
        <Link key={key} href={href} target="_blank" rel="noreferrer">
          <SidenavItem name={name} nested />
        </Link>
      ) : (
        <NavLink to={route} key={key}>
          <SidenavItem name={name} active={route === pathname} nested />
        </NavLink>
      )
    );

    return template;
  };

  // Render the all the collpases from the routes.js
  const renderCollapse = (collapses) =>
    collapses.map(({ name, collapse, route, href, key }) => {
      let returnValue;

      if (collapse) {
        returnValue = (
          <SidenavItem
            key={key}
            name={name}
            active={key === itemName}
            open={openNestedCollapse === name}
            onClick={() =>
              openNestedCollapse === name
                ? setOpenNestedCollapse(false)
                : setOpenNestedCollapse(name)
            }
          >
            {renderNestedCollapse(collapse)}
          </SidenavItem>
        );
      } else {
        returnValue = href ? (
          <Link href={href} key={key} target="_blank" rel="noreferrer">
            <SidenavItem name={name} active={key === itemName} />
          </Link>
        ) : (
          <NavLink to={route} key={key}>
            <SidenavItem name={name} active={key === itemName} />
          </NavLink>
        );
      }
      return <SidenavList key={key}>{returnValue}</SidenavList>;
    });

  // Render all the routes from the routes.js (All the visible items on the Sidenav)
  const renderRoutes = routes1.map(
    ({ type, name, icon, title, collapse, noCollapse, key, href, route }) => {
      let returnValue;

      if (type === "collapse") {
        if (href) {
          returnValue = (
            <Link href={href} key={key} target="_blank" rel="noreferrer">
              <SidenavCollapse
                name={name}
                icon={icon}
                active={key === collapseName}
                noCollapse={noCollapse}
              />
            </Link>
          );
        } else if (noCollapse && route) {
          returnValue = (
            <NavLink to={route} key={key}>
              <SidenavCollapse
                name={name}
                icon={icon}
                noCollapse={noCollapse}
                active={key === collapseName}
              >
                {collapse ? renderCollapse(collapse) : null}
              </SidenavCollapse>
            </NavLink>
          );
        } else {
          returnValue = (
            <SidenavCollapse
              key={key}
              name={name}
              icon={icon}
              active={key === collapseName}
              open={openCollapse === key}
              onClick={() => (openCollapse === key ? setOpenCollapse(false) : setOpenCollapse(key))}
            >
              {collapse ? renderCollapse(collapse) : null}
            </SidenavCollapse>
          );
        }
      } else if (type === "title") {
        returnValue = (
          <PowerTypography
            key={key}
            color={darkSidenav ? "white" : "dark"}
            display="block"
            variant="caption"
            fontWeight="bold"
            textTransform="uppercase"
            opacity={0.6}
            pl={3}
            mt={2}
            mb={1}
            ml={1}
          >
            {title}
          </PowerTypography>
        );
      } else if (type === "divider") {
        returnValue = <Divider key={key} light={darkSidenav} />;
      }

      return returnValue;
    }
  );

  return (
    <SidenavRoot {...rest} variant="permanent" ownerState={{ darkSidenav, miniSidenav, layout }}>
      <PowerBox pt={3} pb={1} px={4} textAlign="center">
        <PowerBox
          display={{ xs: "block", xl: "none" }}
          position="absolute"
          top={0}
          right={0}
          p={1.625}
          onClick={closeSidenav}
          sx={{ cursor: "pointer" }}
        >
          <PowerTypography variant="h6" color="secondary">
            <Icon sx={{ fontWeight: "bold" }}>close</Icon>
          </PowerTypography>
        </PowerBox>
        <PowerBox component={NavLink} to="/" display="flex" alignItems="center">
          {brand && (
            <PowerBox component="img" src={brand} alt="Power Logo" width="2rem" mr={0.25} />
          )}
          <PowerBox
            width={!brandName && "100%"}
            sx={(theme) => sidenavLogoLabel(theme, { miniSidenav })}
          >
            <PowerTypography
              component="h6"
              variant="button"
              fontWeight="medium"
              color={darkSidenav ? "white" : "dark"}
            >
              {brandName}
            </PowerTypography>
          </PowerBox>
        </PowerBox>
      </PowerBox>
      <Divider light={darkSidenav} />
      <List>{renderRoutes}</List>
      {/* <List>Hello</List> */}
      <PowerBox pt={1} mt="auto" mb={2} mx={2}>
        {/* <SidenavFooter /> */}
      </PowerBox>
    </SidenavRoot>
  );
}

// Setting default values for the props of Sidenav
Sidenav.defaultProps = {
  color: "info",
  brand: "",
};

// Typechecking props for the Sidenav
Sidenav.propTypes = {
  color: PropTypes.oneOf(["primary", "secondary", "info", "success", "warning", "error", "dark"]),
  brand: PropTypes.string,
  brandName: PropTypes.string.isRequired,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default Sidenav;
