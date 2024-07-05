import PowerBox from "components/PowerBox";

const bgImageAuth =
  "https://images.unsplash.com/photo-1635944095210-23114a1fb7c0?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=1335&amp;q=80";

const pageRoutes = [
  {
    name: "pages",
    columns: 3,
    rowsPerColumn: 2,
    collapse: [
      {
        name: "dashboards",
        icon: <PowerBox component="i" color="info" className="ni ni-spaceship" />,
        collapse: [
          {
            name: "default",
            route: "/home",
          },
        ],
      },
    ],
  },
  {
    name: "authenticaton",
    image: (
      <PowerBox
        width="100%"
        height="100%"
        display="flex"
        borderRadius="lg"
        position="relative"
        py={8}
        sx={({ palette: { gradients }, functions: { linearGradient, rgba } }) => ({
          backgroundImage: `${linearGradient(
            rgba(gradients.info.main, 0.8),
            rgba(gradients.info.state, 0.8)
          )}, url(${bgImageAuth})`,
          backgroundSize: "cover",
          backgroundPosition: "50%",
        })}
      >
        <PowerBox
          display="flex"
          alignItems="center"
          justifyContent="center"
          flexDirection="column"
          textAlign="center"
          color="white"
          fontWeight="medium"
        >
          <span className="text-lg">
            Explore our
            <br />
            Authentication pages
          </span>
        </PowerBox>
      </PowerBox>
    ),
  },
  {
    name: "application",
    collapse: [
      {
        name: "kanban",
        route: "/applications/kanban",
        icon: (
          <PowerBox
            component="i"
            color="info"
            className="ni ni-single-copy-04"
            mt={0.125}
            py={0.625}
          />
        ),
      },
      {
        name: "wizard",
        route: "/applications/wizard",
        icon: (
          <PowerBox component="i" color="info" className="ni ni-laptop" mt={0.125} py={0.625} />
        ),
      },
      {
        name: "data tables",
        route: "/applications/data-tables",
        icon: <PowerBox component="i" color="info" className="ni ni-badge" mt={0.125} py={0.625} />,
      },
      {
        name: "calendar",
        route: "/applications/calendar",
        icon: (
          <PowerBox
            component="i"
            color="info"
            className="ni ni-notification-70"
            mt={0.125}
            py={0.625}
          />
        ),
      },
    ],
  },
];

export default pageRoutes;
