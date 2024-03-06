import { FC } from "react";
import { Route, Routes } from "react-router-dom";
import AddEvent from "./pages/events/AddEvent/AddEvent";
import MyEvents from "./pages/user/MyAccount/MyEvents/MyEvents";
import MyProfile from "./pages/user/MyAccount/MyProfile/MyProfile";
import Navbar from "./components/Navbar/Navbar";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import SearchEvents from "./pages/events/SearchEvents/SearchEvents";
import SharedEvent from "./pages/events/ShareEvent/SharedEvent";

const AppRoutes: FC = () => (
  <>
    <Navbar />

    <Routes>
      <Route path="*" element={<PageNotFound />} />
      <Route path="/" element={<SearchEvents search={false} />} />
      <Route path="/searchEvents" element={<SearchEvents search />} />
      <Route path="/addEvent" element={<AddEvent />} />
      <Route path="/sharedEvent/:id" element={<SharedEvent />} />
      <Route path="/user/:id/profile" element={<MyProfile />} />
      <Route path="/user/:id/events" element={<MyEvents />} />
    </Routes>
  </>
);

export default AppRoutes;
