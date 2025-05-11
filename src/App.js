import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import ImageSlider from './Components/ImageSlider';
import NoticeBoard from './Components/NoticeBoard';
import NoticeBoard1 from './Components/NoticeBoard1';

function App() {
  return (
    <div className="App">
      <Navbar />
      {/* <NoticeBoard/> */}
       <NoticeBoard1/>
      <ImageSlider/>
    </div>
  );
}

export default App;
