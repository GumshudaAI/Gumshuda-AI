/** 
  All of the routes for the Gumshuda AI MUI are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Sidenav.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `type` key with the `collapse` value is used for a route.
  2. The `type` key with the `title` value is used for a title inside the Sidenav. 
  3. The `type` key with the `divider` value is used for a divider between Sidenav items.
  4. The `name` key is used for the name of the route on the Sidenav.
  5. The `key` key is used for the key of the route (It will help you with the key prop inside a loop).
  6. The `icon` key is used for the icon of the route on the Sidenav, you have to add a node.
  7. The `collapse` key is used for making a collapsible item on the Sidenav that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  8. The `route` key is used to store the route location which is used for the react router.
  9. The `href` key is used to store the external links location.
  10. The `title` key is only for the item with the type of `title` and its used for the title text on the Sidenav.
  10. The `component` key is used to store the component of its route.
*/

// Gumshuda AI MUI layouts
import Landing from "layouts/dashboards/landing";
import Default from "layouts/dashboards/default";
import Automotive from "layouts/dashboards/automotive";
import SmartHome from "layouts/dashboards/smart-home";
import VRDefault from "layouts/dashboards/virtual-reality/vr-default";
import VRInfo from "layouts/dashboards/virtual-reality/vr-info";
import CRM from "layouts/dashboards/crm";
import ProfileOverview from "layouts/pages/profile/profile-overview";
import Teams from "layouts/pages/profile/teams";
import AllProjects from "layouts/pages/profile/all-projects";
import Reports from "layouts/pages/users/reports";
import NewUser from "layouts/pages/users/new-user";
import Settings from "layouts/pages/account/settings";
import Billing from "layouts/pages/account/billing";
import Invoice from "layouts/pages/account/invoice";
import Security from "layouts/pages/account/security";
import General from "layouts/pages/projects/general";
import Timeline from "layouts/pages/projects/timeline";
import NewProject from "layouts/pages/projects/new-project";
import Widgets from "layouts/pages/widgets";
import Charts from "layouts/pages/charts";
import SweetAlerts from "layouts/pages/sweet-alerts";
import Notifications from "layouts/pages/notifications";
import PricingPage from "layouts/pages/pricing-page";
import RTL from "layouts/pages/rtl";
import Kanban from "layouts/applications/kanban";
import Wizard from "layouts/applications/wizard";
import DataTables from "layouts/applications/data-tables";
import Calendar from "layouts/applications/calendar";
import Analytics from "layouts/applications/analytics";
import Overview from "layouts/ecommerce/overview";
import NewProduct from "layouts/ecommerce/products/new-product";
import EditProduct from "layouts/ecommerce/products/edit-product";
import ProductPage from "layouts/ecommerce/products/product-page";
import ProductsList from "layouts/ecommerce/products/products-list";
import OrderList from "layouts/ecommerce/orders/order-list";
import OrderDetails from "layouts/ecommerce/orders/order-details";
import Referral from "layouts/ecommerce/referral";

import Post from "layouts/authentication/post-found-item";
import Search from "layouts/authentication/search";

import SignInBasic from "layouts/authentication/sign-in/basic";
import SignInCover from "layouts/authentication/sign-in/cover";
import SignInIllustration from "layouts/authentication/sign-in/illustration";
import SignUpBasic from "layouts/authentication/sign-up/basic";
import SignUpCover from "layouts/authentication/sign-up/cover";
import SignUpIllustration from "layouts/authentication/sign-up/illustration";
import ResetBasic from "layouts/authentication/reset-password/basic";
import ResetCover from "layouts/authentication/reset-password/cover";
import ResetIllustration from "layouts/authentication/reset-password/illustration";
import LockBasic from "layouts/authentication/lock/basic";
import LockCover from "layouts/authentication/lock/cover";
import LockIllustration from "layouts/authentication/lock/illustration";
import VerificationBasic from "layouts/authentication/2-step-verification/basic";
import VerificationCover from "layouts/authentication/2-step-verification/cover";
import VerificationIllustration from "layouts/authentication/2-step-verification/illustration";
import Error404 from "layouts/authentication/error/404";
import Error500 from "layouts/authentication/error/500";

// Gumshuda AI MUI components
import ArgonBox from "components/ArgonBox";

const routes = [
  {
    type: "collapse",
    name: "Dashboards",
    key: "dashboards",
    icon: <ArgonBox component="i" color="primary" fontSize="14px" className="ni ni-shop" />,
    collapse: [
      {
        name: "Landing",
        key: "landing",
        route: "/dashboards/landing",
        component: <Landing />,
      },
      {
        name: "Default",
        key: "default",
        route: "/home",
        component: <Default />,
      },
      {
        name: "Automotive",
        key: "automotive",
        route: "/dashboards/automotive",
        component: <Automotive />,
      },
      {
        name: "Smart Home",
        key: "smart-home",
        route: "/dashboards/smart-home",
        component: <SmartHome />,
      },
      {
        name: "Virtual Reality",
        key: "virtual-reality",
        collapse: [
          {
            name: "VR Default",
            key: "vr-default",
            route: "/dashboards/virtual-reality/default",
            component: <VRDefault />,
          },
          {
            name: "VR Info",
            key: "vr-info",
            route: "/dashboards/virtual-reality/info",
            component: <VRInfo />,
          },
        ],
      },
      { name: "CRM", key: "crm", route: "/dashboards/crm", component: <CRM /> },
    ],
  },
  { type: "title", title: "Pages", key: "title-pages" },
  {
    type: "collapse",
    name: "Pages",
    key: "pages",
    icon: <ArgonBox component="i" color="warning" fontSize="14px" className="ni ni-ungroup" />,
    collapse: [
      {
        name: "Profile",
        key: "profile",
        collapse: [
          {
            name: "Profile Overview",
            key: "profile-overview",
            route: "/pages/profile/profile-overview",
            component: <ProfileOverview />,
          },
          {
            name: "Teams",
            key: "teams",
            route: "/pages/profile/teams",
            component: <Teams />,
          },
          {
            name: "All Projects",
            key: "all-projects",
            route: "/pages/profile/all-projects",
            component: <AllProjects />,
          },
        ],
      },
      {
        name: "Users",
        key: "users",
        collapse: [
          {
            name: "Reports",
            key: "reports",
            route: "/pages/users/reports",
            component: <Reports />,
          },
          {
            name: "New User",
            key: "new-user",
            route: "/pages/users/new-user",
            component: <NewUser />,
          },
        ],
      },
      {
        name: "Account",
        key: "account",
        collapse: [
          {
            name: "Settings",
            key: "settings",
            route: "/pages/account/settings",
            component: <Settings />,
          },
          {
            name: "Billing",
            key: "billing",
            route: "/pages/account/billing",
            component: <Billing />,
          },
          {
            name: "Invoice",
            key: "invoice",
            route: "/pages/account/invoice",
            component: <Invoice />,
          },
          {
            name: "Security",
            key: "security",
            route: "/pages/account/security",
            component: <Security />,
          },
        ],
      },
      {
        name: "Projects",
        key: "projects",
        collapse: [
          {
            name: "General",
            key: "general",
            route: "/pages/projects/general",
            component: <General />,
          },
          {
            name: "Timeline",
            key: "timeline",
            route: "/pages/projects/timeline",
            component: <Timeline />,
          },
          {
            name: "New Project",
            key: "new-project",
            route: "/pages/projects/new-project",
            component: <NewProject />,
          },
        ],
      },
      {
        name: "Pricing Page",
        key: "pricing-page",
        route: "/pages/pricing-page",
        component: <PricingPage />,
      },
      { name: "RTL", key: "rtl", route: "/pages/rtl", component: <RTL /> },
      { name: "Widgets", key: "widgets", route: "/pages/widgets", component: <Widgets /> },
      { name: "Charts", key: "charts", route: "/pages/charts", component: <Charts /> },
      {
        name: "Sweet Alerts",
        key: "sweet-alerts",
        route: "/pages/sweet-alerts",
        component: <SweetAlerts />,
      },
      {
        name: "Notfications",
        key: "notifications",
        route: "/pages/notifications",
        component: <Notifications />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Applications",
    key: "applications",
    icon: <ArgonBox component="i" color="info" fontSize="14px" className="ni ni-ui-04" />,
    collapse: [
      {
        name: "Kanban",
        key: "kanban",
        route: "/applications/kanban",
        component: <Kanban />,
      },
      {
        name: "Wizard",
        key: "wizard",
        route: "/applications/wizard",
        component: <Wizard />,
      },
      {
        name: "Data Tables",
        key: "data-tables",
        route: "/applications/data-tables",
        component: <DataTables />,
      },
      {
        name: "Calendar",
        key: "calendar",
        route: "/applications/calendar",
        component: <Calendar />,
      },
      {
        name: "Analytics",
        key: "analytics",
        route: "/applications/analytics",
        component: <Analytics />,
      },
    ],
  },
  {
    type: "collapse",
    name: "Ecommerce",
    key: "ecommerce",
    icon: <ArgonBox component="i" color="success" fontSize="14px" className="ni ni-archive-2" />,
    collapse: [
      {
        name: "Overview",
        key: "overview",
        route: "/ecommerce/overview",
        component: <Overview />,
      },
      {
        name: "Products",
        key: "products",
        collapse: [
          {
            name: "New Product",
            key: "new-product",
            route: "/ecommerce/products/new-product",
            component: <NewProduct />,
          },
          {
            name: "Edit Product",
            key: "edit-product",
            route: "/ecommerce/products/edit-product",
            component: <EditProduct />,
          },
          {
            name: "Product Page",
            key: "product-page",
            route: "/ecommerce/products/product-page",
            component: <ProductPage />,
          },
          {
            name: "Products List",
            key: "products-list",
            route: "/ecommerce/products/products-list",
            component: <ProductsList />,
          },
        ],
      },
      {
        name: "Orders",
        key: "orders",
        collapse: [
          {
            name: "Order List",
            key: "order-list",
            route: "/ecommerce/orders/order-list",
            component: <OrderList />,
          },
          {
            name: "Order Details",
            key: "order-details",
            route: "/ecommerce/orders/order-details",
            component: <OrderDetails />,
          },
        ],
      },
      {
        name: "Referral",
        key: "referral",
        route: "/ecommerce/referral",
        component: <Referral />,
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
            name: "Basic",
            key: "basic",
            route: "/sign-in",
            component: <SignInBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-in/cover",
            component: <SignInCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-in/illustration",
            component: <SignInIllustration />,
          },
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
      {
        name: "Sign Up",
        key: "sign-up",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/sign-up",
            component: <SignUpBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/sign-up/cover",
            component: <SignUpCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/sign-up/illustration",
            component: <SignUpIllustration />,
          },
        ],
      },
      {
        name: "Reset Password",
        key: "reset-password",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/reset-password/basic",
            component: <ResetBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/reset-password/cover",
            component: <ResetCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/reset-password/illustration",
            component: <ResetIllustration />,
          },
        ],
      },
      {
        name: "Lock",
        key: "lock",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/lock/basic",
            component: <LockBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/lock/cover",
            component: <LockCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/lock/illustration",
            component: <LockIllustration />,
          },
        ],
      },
      {
        name: "2-Step Verification",
        key: "2-step-verification",
        collapse: [
          {
            name: "Basic",
            key: "basic",
            route: "/authentication/verification/basic",
            component: <VerificationBasic />,
          },
          {
            name: "Cover",
            key: "cover",
            route: "/authentication/verification/cover",
            component: <VerificationCover />,
          },
          {
            name: "Illustration",
            key: "illustration",
            route: "/authentication/verification/illustration",
            component: <VerificationIllustration />,
          },
        ],
      },
      {
        name: "Error",
        key: "error",
        collapse: [
          {
            name: "Error 404",
            key: "error-404",
            route: "/authentication/error/404",
            component: <Error404 />,
          },
          {
            name: "Error 500",
            key: "error-500",
            route: "/authentication/error/500",
            component: <Error500 />,
          },
        ],
      },
    ],
  },
  { type: "divider", key: "divider-1" },
  { type: "title", title: "Docs", key: "title-docs" },
  {
    type: "collapse",
    name: "Basic",
    key: "basic",
    icon: <ArgonBox component="i" color="inherit" fontSize="14px" className="ni ni-spaceship" />,
    collapse: [
      {
        name: "Getting Started",
        key: "getting-started",
        collapse: [
          {
            name: "Overview",
            key: "overview",
            href: "https://www.creative-tim.com/learning-lab/react/overview/argon-dashboard/",
          },
          {
            name: "License",
            key: "license",
            href: "https://www.creative-tim.com/learning-lab/react/license/argon-dashboard/",
          },
          {
            name: "Quick Start",
            key: "quick-start",
            href: "https://www.creative-tim.com/learning-lab/react/quick-start/argon-dashboard/",
          },
          {
            name: "Build Tools",
            key: "build-tools",
            href: "https://www.creative-tim.com/learning-lab/react/build-tools/argon-dashboard/",
          },
        ],
      },
      {
        name: "Foundation",
        key: "foundation",
        collapse: [
          {
            name: "Colors",
            key: "colors",
            href: "https://www.creative-tim.com/learning-lab/react/colors/argon-dashboard/",
          },
          {
            name: "Grid",
            key: "grid",
            href: "https://www.creative-tim.com/learning-lab/react/grid/argon-dashboard/",
          },
          {
            name: "Typography",
            key: "base-typography",
            href: "https://www.creative-tim.com/learning-lab/react/base-typography/argon-dashboard/",
          },
          {
            name: "Borders",
            key: "borders",
            href: "https://www.creative-tim.com/learning-lab/react/borders/argon-dashboard/",
          },
          {
            name: "Box Shadows",
            key: "box-shadows",
            href: "https://www.creative-tim.com/learning-lab/react/box-shadows/argon-dashboard/",
          },
          {
            name: "Functions",
            key: "functions",
            href: "https://www.creative-tim.com/learning-lab/react/functions/argon-dashboard/",
          },
          {
            name: "Routing System",
            key: "routing-system",
            href: "https://www.creative-tim.com/learning-lab/react/routing-system/argon-dashboard/",
          },
        ],
      },
    ],
  },
  {
    type: "collapse",
    name: "Components",
    key: "components",
    icon: <ArgonBox component="i" color="inherit" fontSize="14px" className="ni ni-app" />,
    collapse: [
      {
        name: "Alerts",
        key: "alerts",
        href: "https://www.creative-tim.com/learning-lab/react/alerts/argon-dashboard/",
      },
      {
        name: "Avatar",
        key: "avatar",
        href: "https://www.creative-tim.com/learning-lab/react/avatar/argon-dashboard/",
      },
      {
        name: "Badge",
        key: "badge",
        href: "https://www.creative-tim.com/learning-lab/react/badge/argon-dashboard/",
      },
      {
        name: "Badge Dot",
        key: "badge-dot",
        href: "https://www.creative-tim.com/learning-lab/react/badge-dot/argon-dashboard/",
      },
      {
        name: "Box",
        key: "box",
        href: "https://www.creative-tim.com/learning-lab/react/box/argon-dashboard/",
      },
      {
        name: "Buttons",
        key: "buttons",
        href: "https://www.creative-tim.com/learning-lab/react/buttons/argon-dashboard/",
      },
      {
        name: "Date Picker",
        key: "date-picker",
        href: "https://www.creative-tim.com/learning-lab/react/datepicker/argon-dashboard/",
      },
      {
        name: "Dropzone",
        key: "dropzone",
        href: "https://www.creative-tim.com/learning-lab/react/dropzone/argon-dashboard/",
      },
      {
        name: "Editor",
        key: "editor",
        href: "https://www.creative-tim.com/learning-lab/react/quill/argon-dashboard/",
      },
      {
        name: "Input",
        key: "input",
        href: "https://www.creative-tim.com/learning-lab/react/input/argon-dashboard/",
      },
      {
        name: "Pagination",
        key: "pagination",
        href: "https://www.creative-tim.com/learning-lab/react/pagination/argon-dashboard/",
      },
      {
        name: "Progress",
        key: "progress",
        href: "https://www.creative-tim.com/learning-lab/react/progress/argon-dashboard/",
      },
      {
        name: "Select",
        key: "select",
        href: "https://www.creative-tim.com/learning-lab/react/select/argon-dashboard/",
      },
      {
        name: "Snackbar",
        key: "snackbar",
        href: "https://www.creative-tim.com/learning-lab/react/snackbar/argon-dashboard/",
      },
      {
        name: "Social Button",
        key: "social-button",
        href: "https://www.creative-tim.com/learning-lab/react/social-buttons/argon-dashboard/",
      },
      {
        name: "Tag Input",
        key: "tag-input",
        href: "https://www.creative-tim.com/learning-lab/react/tag-input/argon-dashboard/",
      },
      {
        name: "Typography",
        key: "typography",
        href: "https://www.creative-tim.com/learning-lab/react/typography/argon-dashboard/",
      },
    ],
  },
  {
    type: "collapse",
    name: "Change Log",
    key: "changelog",
    href: "https://github.com/creativetimofficial/ct-argon-dashboard-pro-material-ui/blob/main/CHANGELOG.md",
    icon: <ArgonBox component="i" color="inherit" fontSize="14px" className="ni ni-align-left-2" />,
    noCollapse: true,
  },
];

export default routes;
