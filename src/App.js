import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { MyNav } from './Task/MyNavbar/MyNav';
import { Hello } from '../src/Task/Hello/Hello';
import { CongradsCard } from './Task/Congrats_Card/CongradsCard';
import { SuperOver } from './Task/Super_Over/SuperOver';
import { SocialButtons } from './Task/Social_Buttons/SocialButtons';
import { Notification } from './Task/Notification/Notification';
import { LoginDesign } from './Task/Login_Design/LoginDesign';
import { LearnTech } from './Task/Learn_Tech/LearnTech';
import { CounterHook } from './Task/Counter/CounterHook';
import { Fake } from './Task/Fake_Data/Fake';
import { Details } from './Task/Fake_Data/Details';
import { CounterFruits } from './Task/Counter_Fruits/CounterFruits';
import { FeedBack } from './Task/Feed_Back/FeedBack';
import { Thanks } from './Task/Feed_Back/Thanks';
// import Rating from 'react-rating';
// import { RatingApp } from './Task/Rating_Task/RatingTask';
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={[<MyNav />, <Hello />]} />
          <Route path='/CongratsCard' element={[<MyNav />, <CongradsCard />]} />
          <Route path='/SuperOver' element={[<MyNav />, <SuperOver />]} />
          <Route path='/SocialButtons' element={[<MyNav />, <SocialButtons />]} />
          <Route path='/Notification' element={[<MyNav />, <Notification />]} />
          <Route path='/LoginDesign' element={[<MyNav />, <LoginDesign />]} />
          <Route path='/LearnTech' element={[<MyNav />, <LearnTech />]} />
          <Route path='/CounterHook' element={[<MyNav />, <CounterHook />]}></Route>
          <Route path='/Fake' element={[<MyNav />, <Fake />]} />
          <Route path='/Fake2/:id' element={[<MyNav />, <Details />]} />
          <Route path='/CounterFruits' element={[<MyNav />, <CounterFruits />]} />
          <Route path='/FeedBack' element={[<MyNav />, <FeedBack />]}></Route>
          <Route path='/FeedBack/Thanks' element={[<MyNav />, <Thanks />]}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
