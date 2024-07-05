/* eslint-disable no-param-reassign */

import { useState, useEffect, Fragment } from "react";

// prop-types is a library for typechecking of props.
import PropTypes from "prop-types";

// react-router components
import { Link } from "react-router-dom";

// @mui material components
import Icon from "@mui/material/Icon";
import Popper from "@mui/material/Popper";
import Grow from "@mui/material/Grow";
import Grid from "@mui/material/Grid";
import Divider from "@mui/material/Divider";
import MuiLink from "@mui/material/Link";
import Container from "@mui/material/Container";

// Gumshuda AI MUI components
import PowerBox from "components/PowerBox";
import PowerTypography from "components/PowerTypography";
import PowerButton from "components/PowerButton";

// Gumshuda AI MUI examples components
import DefaultNavbarDropdown from "examples/Navbars/DefaultNavbar/DefaultNavbarDropdown";
import DefaultNavbarMobile from "examples/Navbars/DefaultNavbar/DefaultNavbarMobile";

// Gumshuda AI MUI Base Styles
import breakpoints from "assets/theme/base/breakpoints";

// Material Dashboard 2 PRO React context
import { usePowerController } from "context";

function DefaultNavbar({ routes, brand, transparent, light, action }) {
  const [controller] = usePowerController();
  const { darkMode } = controller;

  const [dropdown, setDropdown] = useState("");
  const [dropdownEl, setDropdownEl] = useState("");
  const [dropdownName, setDropdownName] = useState("");
  const [nestedDropdown, setNestedDropdown] = useState("");
  const [nestedDropdownEl, setNestedDropdownEl] = useState("");
  const [nestedDropdownName, setNestedDropdownName] = useState("");
  const [arrowRef, setArrowRef] = useState(null);
  const [mobileNavbar, setMobileNavbar] = useState(false);
  const [mobileView, setMobileView] = useState(false);

  const openMobileNavbar = () => setMobileNavbar(!mobileNavbar);

  useEffect(() => {
    // A function that sets the display state for the DefaultNavbarMobile.
    function displayMobileNavbar() {
      if (window.innerWidth < breakpoints.values.lg) {
        setMobileView(true);
        setMobileNavbar(false);
      } else {
        setMobileView(false);
        setMobileNavbar(false);
      }
    }

    /** 
     The event listener that's calling the displayMobileNavbar function when 
     resizing the window.
    */
    window.addEventListener("resize", displayMobileNavbar);

    // Call the displayMobileNavbar function to set the state with the initial value.
    displayMobileNavbar();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", displayMobileNavbar);
  }, []);

  const renderNavbarItems = routes.map(({ name, icon, href, route, collapse }) => (
    <DefaultNavbarDropdown
      key={name}
      name={name}
      icon={icon}
      href={href}
      route={route}
      collapse={Boolean(collapse)}
      onMouseEnter={({ currentTarget }) => {
        if (collapse) {
          setDropdown(currentTarget);
          setDropdownEl(currentTarget);
          setDropdownName(name);
        }
      }}
      onMouseLeave={() => collapse && setDropdown(null)}
      light={light}
    />
  ));

  // Render the routes on the dropdown menu
  const renderRoutes = routes.map(({ name, collapse, columns, rowsPerColumn, image }) => {
    let template;

    // Render the dropdown menu that should be display as columns
    if (collapse && columns && name === dropdownName) {
      const calculateColumns = collapse.reduce((resultArray, item, index) => {
        const chunkIndex = Math.floor(index / rowsPerColumn);

        if (!resultArray[chunkIndex]) {
          resultArray[chunkIndex] = [];
        }

        resultArray[chunkIndex].push(item);

        return resultArray;
      }, []);

      template = (
        <Grid key={name} container spacing={3} py={1} px={1.5}>
          {calculateColumns.map((cols, key) => {
            const gridKey = `grid-${key}`;
            const dividerKey = `divider-${key}`;

            return (
              <Grid key={gridKey} item xs={12 / columns} sx={{ position: "relative" }}>
                {cols.map((col, index) => (
                  <Fragment key={col.name}>
                    <PowerBox
                      width="100%"
                      display="flex"
                      alignItems="center"
                      py={1}
                      mt={index !== 0 ? 2 : 0}
                    >
                      <PowerBox
                        display="flex"
                        justifyContent="center"
                        alignItems="center"
                        width="1.5rem"
                        height="1.5rem"
                        borderRadius="md"
                        color="text"
                        mr={1}
                        fontSize="0.875rem"
                        lineHeight={1}
                      >
                        {col.icon}
                      </PowerBox>
                      <PowerTypography
                        display="block"
                        variant="button"
                        fontWeight="bold"
                        textTransform="capitalize"
                      >
                        {col.name}
                      </PowerTypography>
                    </PowerBox>
                    {col.collapse.map((item) => (
                      <PowerTypography
                        key={item.name}
                        component={item.route ? Link : MuiLink}
                        to={item.route ? item.route : ""}
                        href={item.href ? item.href : (e) => e.preventDefault()}
                        target={item.href ? "_blank" : ""}
                        rel={item.href ? "noreferrer" : "noreferrer"}
                        minWidth="11.25rem"
                        display="block"
                        variant="button"
                        color="text"
                        textTransform="capitalize"
                        fontWeight="regular"
                        py={0.625}
                        pr={2}
                        pl={4}
                        sx={({
                          palette: { white, grey, dark },
                          borders: { borderRadius },
                          functions: { rgba },
                        }) => ({
                          borderRadius: borderRadius.md,
                          cursor: "pointer",
                          transition: "all 300ms linear",

                          "&:hover": {
                            backgroundColor: rgba(grey[200], darkMode ? 0.1 : 1),
                            color: darkMode ? white.main : dark.main,
                          },
                        })}
                      >
                        {item.name}
                      </PowerTypography>
                    ))}
                  </Fragment>
                ))}
                {key !== 0 && (
                  <Divider
                    key={dividerKey}
                    orientation="vertical"
                    sx={{
                      position: "absolute",
                      top: "50%",
                      left: "-4px",
                      transform: "translateY(-45%)",
                      height: "90%",
                    }}
                  />
                )}
              </Grid>
            );
          })}
        </Grid>
      );

      // Render the dropdown menu that should be display as list items
    } else if (collapse && name === dropdownName) {
      template = (
        <Grid container alignItems="center" spacing={image ? 1 : 0} p={image ? 0.5 : 0}>
          {image && (
            <Grid item xs={6}>
              {image}
            </Grid>
          )}
          <Grid item xs={image ? 6 : 12}>
            {collapse.map((item, key) => {
              const linkComponent = {
                component: MuiLink,
                href: item.href,
                target: "_blank",
                rel: "noreferrer",
              };

              const routeComponent = {
                component: Link,
                to: item.route,
              };

              return (
                <PowerTypography
                  key={item.name}
                  {...(item.route ? routeComponent : linkComponent)}
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  variant="button"
                  textTransform="capitalize"
                  minWidth={item.description ? "14rem" : "12rem"}
                  color={item.description ? "dark" : "text"}
                  fontWeight={item.description ? "bold" : "regular"}
                  py={item.description ? 1 : 0.625}
                  px={2}
                  mb={key === collapse.length - 1 ? 0 : 0.5}
                  sx={({ palette: { grey }, borders: { borderRadius }, functions: { rgba } }) => ({
                    borderRadius: borderRadius.md,
                    cursor: "pointer",
                    transition: "all 300ms linear",

                    "&:hover": {
                      backgroundColor: rgba(grey[200], darkMode ? 0.1 : 1),
                    },
                  })}
                  onMouseEnter={({ currentTarget }) => {
                    if (item.dropdown) {
                      setNestedDropdown(currentTarget);
                      setNestedDropdownEl(currentTarget);
                      setNestedDropdownName(item.name);
                    }
                  }}
                  onMouseLeave={() => {
                    if (item.dropdown) {
                      setNestedDropdown(null);
                    }
                  }}
                >
                  {item.description ? (
                    <PowerBox display="flex" py={0.25} fontSize="0.875rem" color="text">
                      {typeof item.icon === "string" ? (
                        <Icon color="inherit" sx={{ mr: 1.25, mt: 0.125 }}>
                          {item.icon}
                        </Icon>
                      ) : (
                        <PowerBox color="inherit" mr={1.25} mt={0.125}>
                          {item.icon}
                        </PowerBox>
                      )}
                      <PowerBox pl={1} lineHeight={0}>
                        <PowerTypography
                          variant="button"
                          display="block"
                          fontWeight="bold"
                          textTransform="capitalize"
                        >
                          {item.name}
                        </PowerTypography>
                        <PowerTypography variant="button" fontWeight="regular" color="text">
                          {item.description}
                        </PowerTypography>
                      </PowerBox>
                    </PowerBox>
                  ) : item.icon ? (
                    <PowerBox
                      display="flex"
                      alignItems="center"
                      color={darkMode ? "white" : "dark"}
                    >
                      {typeof item.icon === "string" ? (
                        <Icon color="inherit">{item.icon}</Icon>
                      ) : (
                        <PowerBox mr={1.5} lineHeight={1}>
                          {item.icon}
                        </PowerBox>
                      )}
                      <span>{item.name}</span>
                    </PowerBox>
                  ) : (
                    item.name
                  )}
                  {item.collapse && (
                    <Icon sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}>
                      keyboard_arrow_right
                    </Icon>
                  )}
                </PowerTypography>
              );
            })}
          </Grid>
        </Grid>
      );
    }

    return template;
  });

  // Routes dropdown menu
  const dropdownMenu = (
    <Popper
      anchorEl={dropdown}
      popperRef={null}
      open={Boolean(dropdown)}
      placement="top-start"
      transition
      style={{ zIndex: 999 }}
      modifiers={[
        {
          name: "arrow",
          enabled: true,
          options: {
            element: arrowRef,
          },
        },
      ]}
      onMouseEnter={() => setDropdown(dropdownEl)}
      onMouseLeave={() => {
        if (!nestedDropdown) {
          setDropdown(null);
          setDropdownName("");
        }
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white, background } }) =>
              darkMode ? background.dark : white.main,
          }}
        >
          <PowerBox borderRadius="lg">
            <PowerTypography
              variant="h1"
              sx={({ palette: { white, background } }) => ({
                color: darkMode ? background.dark : white.main,
              })}
            >
              <Icon ref={setArrowRef} sx={{ mt: -3 }}>
                arrow_drop_up
              </Icon>
            </PowerTypography>
            <PowerBox shadow="lg" borderRadius="lg" p={1.625} mt={1}>
              {renderRoutes}
            </PowerBox>
          </PowerBox>
        </Grow>
      )}
    </Popper>
  );

  // Render routes that are nested inside the dropdown menu routes
  const renderNestedRoutes = routes.map(({ collapse, columns }) =>
    collapse && !columns
      ? collapse.map(({ name: parentName, collapse: nestedCollapse }) => {
          let template;

          if (parentName === nestedDropdownName) {
            template =
              nestedCollapse &&
              nestedCollapse.map((item) => {
                const linkComponent = {
                  component: MuiLink,
                  href: item.href,
                  target: "_blank",
                  rel: "noreferrer",
                };

                const routeComponent = {
                  component: Link,
                  to: item.route,
                };

                return (
                  <PowerTypography
                    key={item.name}
                    {...(item.route ? routeComponent : linkComponent)}
                    display="flex"
                    justifyContent="space-between"
                    alignItems="center"
                    variant="button"
                    textTransform="capitalize"
                    minWidth={item.description ? "14rem" : "12rem"}
                    color={item.description ? "dark" : "text"}
                    fontWeight={item.description ? "bold" : "regular"}
                    py={item.description ? 1 : 0.625}
                    px={2}
                    sx={({
                      palette: { white, grey, dark },
                      borders: { borderRadius },
                      functions: { rgba },
                    }) => ({
                      borderRadius: borderRadius.md,
                      cursor: "pointer",
                      transition: "all 300ms linear",

                      "&:hover": {
                        backgroundColor: rgba(grey[200], darkMode ? 0.1 : 1),
                        color: darkMode ? white.main : dark.main,
                      },
                    })}
                  >
                    {item.description ? (
                      <PowerBox>
                        {item.name}
                        <PowerTypography
                          display="block"
                          variant="button"
                          color="text"
                          fontWeight="regular"
                          sx={{ transition: "all 300ms linear" }}
                        >
                          {item.description}
                        </PowerTypography>
                      </PowerBox>
                    ) : (
                      item.name
                    )}
                    {item.collapse && (
                      <Icon
                        fontSize="small"
                        sx={{ fontWeight: "normal", verticalAlign: "middle", mr: -0.5 }}
                      >
                        keyboard_arrow_right
                      </Icon>
                    )}
                  </PowerTypography>
                );
              });
          }

          return template;
        })
      : null
  );

  // Dropdown menu for the nested dropdowns
  const nestedDropdownMenu = (
    <Popper
      anchorEl={nestedDropdown}
      popperRef={null}
      open={Boolean(nestedDropdown)}
      placement="right-start"
      transition
      style={{ zIndex: 999 }}
      onMouseEnter={() => {
        setNestedDropdown(nestedDropdownEl);
      }}
      onMouseLeave={() => {
        setNestedDropdown(null);
        setNestedDropdownName("");
        setDropdown(null);
      }}
    >
      {({ TransitionProps }) => (
        <Grow
          {...TransitionProps}
          sx={{
            transformOrigin: "left top",
            background: ({ palette: { white, background } }) =>
              darkMode ? background.dark : white.main,
          }}
        >
          <PowerBox ml={2.5} mt={-2.5} borderRadius="lg">
            <PowerBox shadow="lg" borderRadius="lg" py={1.5} px={1} mt={2}>
              {renderNestedRoutes}
            </PowerBox>
          </PowerBox>
        </Grow>
      )}
    </Popper>
  );

  return (
    <Container>
      <PowerBox
        pt={0.75}
        pb={1}
        px={{ xs: 4, sm: transparent ? 2 : 3, lg: transparent ? 0 : 2 }}
        my={2}
        mx={3}
        width="calc(100% - 48px)"
        borderRadius="lg"
        shadow={transparent ? "none" : "md"}
        color={light ? "white" : "dark"}
        position="absolute"
        left={0}
        zIndex={99}
        sx={({
          palette: { transparent: transparentColor, white, background },
          functions: { rgba },
        }) => ({
          backgroundColor: transparent
            ? transparentColor.main
            : rgba(darkMode ? background.dark : white.main, 0.8),
          backdropFilter: transparent ? "none" : `saturate(200%) blur(30px)`,
        })}
      >
        <PowerBox display="flex" justifyContent="space-between" alignItems="center">
          <PowerBox
            component={Link}
            to="/"
            py={transparent ? 1.5 : 0.75}
            lineHeight={1}
            pl={{ xs: 0, lg: 1 }}
          >
            <PowerTypography variant="button" fontWeight="bold" color={light ? "white" : "dark"}>
              {brand}
            </PowerTypography>
          </PowerBox>
          <PowerBox color="inherit" display={{ xs: "none", lg: "flex" }} m={0} p={0}>
            {renderNavbarItems}
          </PowerBox>
          {action &&
            (action.type === "internal" ? (
              <PowerBox display={{ xs: "none", lg: "inline-block" }}>
                <PowerButton
                  component={Link}
                  to={action.route}
                  variant={action.variant ? action.variant : "contained"}
                  color={action.color ? action.color : "info"}
                  size="small"
                >
                  {action.label}
                </PowerButton>
              </PowerBox>
            ) : (
              <PowerBox display={{ xs: "none", lg: "inline-block" }}>
                <PowerButton
                  component="a"
                  href={action.route}
                  target="_blank"
                  rel="noreferrer"
                  variant={action.variant ? action.variant : "contained"}
                  color={action.color ? action.color : "info"}
                  size="small"
                  sx={{ mt: -0.3 }}
                >
                  {action.label}
                </PowerButton>
              </PowerBox>
            ))}
          <PowerBox
            display={{ xs: "inline-block", lg: "none" }}
            lineHeight={0}
            py={1.5}
            pl={1.5}
            color={transparent || darkMode ? "white" : "inherit"}
            sx={{ cursor: "pointer" }}
            onClick={openMobileNavbar}
          >
            <Icon fontSize="default">{mobileNavbar ? "close" : "menu"}</Icon>
          </PowerBox>
        </PowerBox>
        <PowerBox
          shadow={transparent ? "lg" : "none"}
          borderRadius="md"
          px={transparent ? 2 : 0}
          sx={{
            backgroundColor: ({
              palette: { white, transparent: transparentColor, background },
            }) => {
              let bgColorValue = transparentColor.main;

              if (transparent && darkMode) {
                bgColorValue = background.dark;
              } else if (transparent) {
                bgColorValue = white.main;
              }

              return bgColorValue;
            },
          }}
        >
          {mobileView && <DefaultNavbarMobile routes={routes} open={mobileNavbar} />}
        </PowerBox>
      </PowerBox>
      {dropdownMenu}
      {nestedDropdownMenu}
    </Container>
  );
}

// Declaring default props for DefaultNavbar
DefaultNavbar.defaultProps = {
  brand: "Gumshuda AI",
  transparent: false,
  light: false,
  action: false,
};

// Typechecking props for the DefaultNavbar
DefaultNavbar.propTypes = {
  brand: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
  transparent: PropTypes.bool,
  light: PropTypes.bool,
  action: PropTypes.shape({
    type: PropTypes.oneOf(["external", "internal"]).isRequired,
    route: PropTypes.string.isRequired,
    variant: PropTypes.oneOf(["contained", "outlined", "gradient"]),
    color: PropTypes.oneOf([
      "primary",
      "secondary",
      "info",
      "success",
      "warning",
      "error",
      "dark",
      "light",
      "default",
      "white",
    ]),
    label: PropTypes.string.isRequired,
  }),
};

export default DefaultNavbar;
