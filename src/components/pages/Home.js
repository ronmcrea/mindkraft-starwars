import React from 'react'
import {Link } from 'react-router-dom'
import {Navbar} from '../../../src/components/pages/Navbar';
import "../../../src/fonts/Starjedi.ttf"
import "../../../src/fonts/Starjout.ttf"
import Video from '../../../src/components/assets/Background.mp4'
import Boat from '../../../src/components/assets/boat-competition.jpg'
import Circuit from '../../../src/components/assets/circuit.jpg'
import Electric from '../../../src/components/assets/electric.jpg'
import Workshop from '../../../src/components/assets/workshop.jpg'
import Competition from '../../../src/components/assets/competition.jpg'
import Pcb from '../../../src/components/assets/pcb.jpg'
import '../../../src/components/styles/Home.css'
import Card from './Card'
import Carousel from './Carousel'
import Karunya from '../assets/Karunya.webp'
import Mindkraft from '../assets/mindkraft.jpg'
import { Image, IconButton } from '@chakra-ui/react'
import { v4 as uuidv4 } from "uuid";
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";

export const Home = () => {

  var countDownDate = new Date("Mar 25, 2023 9:00:00").getTime();

  const [timer, setTimer] = React.useState('');

  React.useEffect(() => {
    var x = setInterval(() => {
  
      // Get today's date and time
      var now = new Date().getTime();   
        
      // Find the distance between now and the count down date
      var distance = countDownDate - now;
        
      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
      setTimer(days + "d " + hours + "h " + minutes + "m " + seconds + "s ")
      console.log(timer);
    }, 1000);
  
    return () => clearInterval(x);
   }, []);

  let cards = [
    {
      key: uuidv4(),
      content: (
        <Card imagen={Boat} title="SoLAR / ELECTRiC BoAT CoMPETiTioN" />
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Circuit} title='CiRCUiT DEBUGGiNG CoMPETiTioN'/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Electric} title="ELECTRiC FUN CARNiVAL"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Workshop} title="Workshop on Electric Vehicle design"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Competition} title="Project Competition"/>
      )
    },
    {
      key: uuidv4(),
      content: (
        <Card imagen={Pcb} title="Workshop on PCB design"/>
      )
    }
  ];

  return (
    <>
    {/* <Navbar/> */}
    <div className='home' id='home'>
    <div id='background-video'>
      <video  src={Video} autoPlay loop muted/>
    </div>
    <div id="mouse-scroll">
  <div className="mouse">
    <div className="mouse-in"></div>
  </div>
  <div>
      <span className="down-arrow-1"></span>
      <span className="down-arrow-2"></span>
      <span className="down-arrow-3"></span>
   </div>
</div>
    </div>
    <div className='countdown' id='countdown'>
      <p className='fadein-text'>CoUNTDoWN<br/>{timer}</p>
    </div>
    <div className='home-events' id='event'>
    <h2 style={{fontFamily : 'starjedi-outline', letterSpacing: '5px'}}>Events</h2>
    <div className='grid-cards'>
      <Carousel
        cards={cards}
        height="50vh"
        width="100%"
        margin="0"
        offset={100}
        showArrows={false}
      />
    </div>
    </div>
    <div className='home-join'>
      <h2>Join in on the action</h2>
      <Link to='/register' className="button fire"><div><p>Register</p></div></Link>
    </div>
    <div className='home-contacts' id='contact'>
      <div className='flex'>
      <div className='flex-container'>
    <Image
          src={Karunya}
          alt='Green double couch with wooden legs'
          borderRadius='sm'
          maxWidth='100%'
          mt='10'
        />
        </div>
        <div className='flex-container'>
        <Image
          src={Mindkraft}
          alt='Green double couch with wooden legs'
          maxWidth='100%'
        />
        <div className='icons'>
<a href='https://www.facebook.com/karunyauniversity/' target='_blank'>
        <IconButton
  variant='outline'
  aria-label='Send email'
  icon as={TiSocialFacebook} 
  boxSize={30}
/>
</a>
<a href='https://twitter.com/karunyauniv?lang=en' target='_blank'>
<IconButton
  variant='outline'
  aria-label='Send email'
  icon as={TiSocialTwitter}
  boxSize={30}
/>
</a>
<a href='https://www.instagram.com/karunyauniv/?hl=en' target='_blank'>
<IconButton
  variant='outline'
  aria-label='Send email'
  icon as={TiSocialInstagram}
  boxSize={30}
/>
</a>
<a href='https://in.linkedin.com/school/karunya/' target='_blank'>
<IconButton
  variant='outline'
  aria-label='Send email'
  icon as={TiSocialLinkedin}
  boxSize={30}
/>
</a>
<a href='https://www.youtube.com/channel/UClYk9v8y9aDub5BseFmq1Xg' target='_blank'> 
<IconButton
  variant='outline'
  aria-label='Send email'
  icon as={TiSocialYoutube}
  boxSize={30}
/>
</a>
        </div>
        </div>
        </div>
       <p className='copyrights'> © 2022-2023. Karunya Institute of Technology and Sciences. All Rights Reserved.</p>
    </div>
    </>
    
  )
}
