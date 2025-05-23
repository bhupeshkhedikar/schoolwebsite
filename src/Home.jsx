// Pages/Home.js
import React from "react";
import NoticeBoard1 from "./Components/NoticeBoard1";
import ImageSlider from "./Components/ImageSlider";
import OurShiningStars from "./Components/OurShiningStars";
import StaffComponent from "./Components/StaffComponent";
import SchoolHistory from "./Components/SchoolHistory";
import ImportantDaysMarathi from "./Components/ImportantDaysMarathi";
import ArogyaAniKalyan from "./Components/ArogyaAniKalyan";
import ShikshanikComics from "./Components/ShikshanikComics";

const Home = () => {
  return (
    <>
      <NoticeBoard1 />
      <ImageSlider />
      <OurShiningStars />
          <ImportantDaysMarathi />
          <ShikshanikComics/>
          <ArogyaAniKalyan/>
      <StaffComponent />
      <SchoolHistory />
    </>
  );
};

export default Home;
