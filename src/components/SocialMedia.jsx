import React from 'react'
import { BsTwitter, BsLinkedin, BsGithub} from 'react-icons/bs'
const SocialMedia = () => {
  return (
      <div className='app__social'>
          <div>
              <a href='https://twitter.com/VictorEni_'>
                   <BsTwitter />
                </a>
            </div>
             
          <div>
              <a href='https://www.linkedin.com/in/eni-victor-93a361227/'>
                  <BsLinkedin />
              </a>
              
          </div>
          <div>
              <a href='https://github.com/EniV90'>
                 <BsGithub />
              </a>
              
          </div>
      </div>
  )
}

export default SocialMedia