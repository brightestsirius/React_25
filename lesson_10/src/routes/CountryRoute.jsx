import React from "react";

import CountryInfo from "./../components/CountryInfo/CountryInfo";
import NavigationBtn from "./../components/NavigationBtn/NavigationBtn";

export default function CountryRoute() {
  return (
    <>
      <h3>Country Route</h3>
      <CountryInfo />
      <NavigationBtn title={"Back to Countries Page"} route={"/countries"} />
    </>
  );
}
