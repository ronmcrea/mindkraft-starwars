import React from 'react'
import '../../../src/components/styles/Home.css'
import { TiSocialFacebook, TiSocialTwitter, TiSocialInstagram, TiSocialLinkedin, TiSocialYoutube } from "react-icons/ti";
import { Image, IconButton } from '@chakra-ui/react'
import Karunya from '../assets/Karunya.webp'
import Mindkraft from '../assets/mindkraft.jpg'

function footer() {
  return (
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
        © 2017-2018. Karunya Institute of Technology and Sciences. All Rights Reserved.
    </div>
  )
}

export default footer