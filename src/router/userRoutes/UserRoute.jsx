import { Navigate, Route, Routes } from "react-router-dom";
import LayoutProvider from "../../component/LayoutProvider/layout-provider";
import Organization from "../../pages/Enterprise/Organization";
import Interaction from "../../pages/Enterprise/Interaction";
import PlanBilling from "../../pages/Enterprise/PlanBilling";
import Team from "../../pages/Enterprise/Team/Team";
import Notification from "../../pages/Enterprise/Notification";
import MediaLibrary from "../../pages/MediaLibrary";
import DeveloperApps from "../../pages/Enterprise/DeveloperApps";
import Webhooks from "../../pages/Enterprise/Webhooks";
import Referrals from "../../pages/Enterprise/Referrals";

function UserRoute() {
  const entRouters = [
    {
      path: "/organization",
      element: <Organization />,
      breadcrumb: { title: "Organization" },
    },
    {
      path: "/interaction",
      element: <Interaction />,
      breadcrumb: { title: "Interaction" },
    },
    {
      path: "/referrals",
      element: <Referrals />,
      breadcrumb: { title: "Referrals" },
    },
    {
      path: "/plan_billing",
      element: <PlanBilling />,
      breadcrumb: { title: "Plan & Billing" },
    },
    {
      path: "/team",
      element: <Team />,
      breadcrumb: { title: "Team" },
    },
    {
      path: "/notification",
      element: <Notification />,
      breadcrumb: { title: "Notification" },
    },
    {
      path: "/media_library",
      element: <MediaLibrary />,
      breadcrumb: { title: "Media Library" },
    },
    {
      path: "/developer_apps",
      element: <DeveloperApps />,
      breadcrumb: { title: "Developer Apps" },
    },
    {
      path: "/webhooks",
      element: <Webhooks />,
      breadcrumb: { title: "Webhooks" },
    },
  ];
  return (
    <Routes>
      <Route path="/home" element={<div>userRoute</div>} />
      {entRouters.map((item) => {
        return (
          <Route
            key={item.path}
            path={`/ent-setting${item.path}`}
            element={
              <LayoutProvider breadcrumb={item.breadcrumb} path={item.path}>
                {item.element}
              </LayoutProvider>
            }
          />
        );
      })}

      <Route
        path="*"
        element={<Navigate to="/ent-setting/organization" replace />}
      />
    </Routes>
  );
}

export default UserRoute;
