import React, {useState, useEffect} from 'react'
import './Skills.scss'
import { animate, motion } from 'framer-motion'
import { AppWrap } from '../../wrapper'
import { urlFor, client } from '../../client'
import ReactTooltip from 'react-tooltip'

const Skills = () => {

   useEffect(() => {
    const query = '*[_type == "works"]'

    client.fetch(query)
      .then((data) => {
        setWorks(data);
        setFilterWork(data)
      })
    
  }, [])
  return (
    <>
      <h2 className='head-text'>Skills</h2>

      <div className='app__skills-container'>
        <motion.div className='app__skills-list'>
          {skills.map}
        </motion.div>

      </div>
    </>
  )
}

export default Skills