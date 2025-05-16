import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
import NoticeBoard from './Components/NoticeBoard';
import NoticeBoard1 from './Components/NoticeBoard1';
import OurShiningStars from './Components/OurShiningStars';
import EventsActivities from './Components/EventsActivities';
import SchoolHistory from './Components/SchoolHistory';
import Staff from './Components/Staff';
import Footer from './Components/Footer';
import StaffComponent from './Components/StaffComponent'
import NoticeManagement from './Components/Admin/NoticeManagement'
import SliderManagement from './Components/Admin/SliderManagement';
import ShiningStarsAdmin from './Components/Admin/ShiningStarsAdmin';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <NoticeBoard/> */}
       <NoticeBoard1/>
      <ImageSlider />
      <OurShiningStars />
    <StaffComponent/>
      {/* <EventsActivities /> */}
      <SchoolHistory />
      {/* <Staff /> */}
      <Footer/>
      <NoticeManagement />
      <SliderManagement />
      <ShiningStarsAdmin/>
    </div>
  );
}

export default App;
