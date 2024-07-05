import Default from "layouts/dashboards/default";
import Post from "layouts/authentication/post-found-item";
import Search from "layouts/authentication/search";

import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-shop" />,
    collapse: [
      {
        name: "Default",
        key: "default",
        route: "/home",
        component: <Default />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Authentication",
    key: "authentication",
    icon: <ArgonBox component="i" color="error" fontSize="14px" className="ni ni-single-copy-04" />,
    collapse: [
      {
        name: "Sign In",
        key: "sign-in",
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
    ],
  },
];

export default routes;
