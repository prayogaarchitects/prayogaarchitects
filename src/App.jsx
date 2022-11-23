import { useState, useEffect } from "react";
import { Navigation } from "./components/navigation";
import { Header } from "./components/header";
import { Features } from "./components/features";
import { About } from "./components/about";
import { Gallery } from "./components/gallery";
import { Contact } from "./components/contact";
import { ImagesView } from "./components/ImagesView";
import JsonData from "./data/data.json";
import SmoothScroll from "smooth-scroll";
import "./App.scss";
import { Route, Routes } from "react-router-dom";

export const scroll = new SmoothScroll('a[href*="#"]', {
  speed: 1000,
  speedAsDuration: true,
});

const App = () => {
  const [landingPageData, setLandingPageData] = useState({});

  useEffect(() => {
    setLandingPageData(JsonData);
  }, []);

  return (
    <div>
      <Navigation />
      <Routes>
        <Route exact path="/" element={<Header data={landingPageData.Header}/>}></Route>
        <Route path="about" element={<About data={landingPageData.About} />}></Route>
        <Route path="ourservices" element={<Features data={landingPageData.Features}/>}></Route>
        <Route path="gallery" element={<Gallery data={landingPageData.Gallery}/>}></Route>
        <Route path="contact" element={<Contact data={landingPageData.Contact}/>}></Route>
        <Route path="gallery/:id" element={<ImagesView data={landingPageData.Gallery}/>} />
      </Routes>
    {/*         
      <Header data={landingPageData.Header} />
      <About data={landingPageData.About} />
      <Features data={landingPageData.Features} />
      <Gallery data={landingPageData.Gallery}/>
      <Contact data={landingPageData.Contact} /> */}
    </div>
  );
};

export default App;
