import React, {useState, useEffect} from 'react'
import './Work.scss'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import { animate, motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'

const Work = () => {
  const [activeFilter, setActiveFilter] = useState('All')
  const [animateCard, setAnimateCard] = useState({ y: 0, opacity: 1 })
  
  useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data)
      })
    
  }, [])

  const handleWorkFilter = (item) => {

  }

  return (
    <>
      <h2 className='head-text'> My <span>Portfolio</span>
        <div className='app__work-filter'>
          {['Solidity', 'Web App', 'React Js', 'All'].map((item, index) => (
            <div
              key={index}
              onClick={() => handleWorkFilter(item)}
              className={`app__work-filter-item app__flex p-text ${activeFilter === item ? 'item-active' : ''}`}
            >
              
            </div>

          ))}
        </div>

        <motion.div
          animate={animateCard}
          transition={{ duration: 0.5, delayChildren: 0.5}}
          className="app__work-portfolio"
        >

        </motion.div>
      </h2>
    </>
  )
}

export default AppWrap(Work, 'work')