import React, {useEffect, useRef, useState} from 'react'
import styled from 'styled-components'
import clamp from 'lodash-es/clamp'
import {gsap} from 'gsap'

import { Section, Container} from 'components'

import {useContent, useMaxHeight, usePrevious} from 'hooks'
import {breakpoints} from 'helpers/breakpoints'

import Titles from './Titles'
import Progress from './Progress'
import TasksGroup from './TasksGroup'

import {colors} from 'data'


const Launch = styled.div`
  display: inline-block;
  padding: 8px 16px;
  margin: 10px auto 30px auto;
  background: rgba(0,0,0,0.15);
  border-radius: 5px;
  font-size: 14px;
  letter-spacing: 0.05em;
`

const TasksWrapper = styled.div`
  position: relative;
  width: 100%;
  margin: 30px auto 0 auto;
  height: ${props => props.height + 'px'};

  @media ${breakpoints.md}{
    width: 70%;
    margin: 70px auto 0 auto;
  }
`

export default React.memo(function RoadMap() {
  const content = useContent('roadmap')

  const tasksRef = useRef()
  const canUserChange = useRef(true)

  const [currentSection, setCurrentSection] = useState(0)
  const prevSection = usePrevious(currentSection)
  const direction = currentSection - prevSection
  const amountSections = content.sections.length

  const heightTasks = useMaxHeight(tasksRef)

  const taskGroupsNodes = content.sections.map((el, i) => {
    return (
      <TasksGroup
        key={i}
        index={i}
        currentIndex={currentSection}
        data={el.tasks}
        isActive={i===currentSection}
        direction={direction}
      />
    )
  })


  const changeSection = (v) => {
    if(canUserChange.current){
      canUserChange.current = false

      let dest = clamp(currentSection + v, 0, amountSections - 1)
      setCurrentSection(dest)

      // "Debounce"
      gsap.delayedCall(0.5,  () => canUserChange.current = true)
    }
  }

  return (
    <Section id='roadmap'>
      <Container>
        <div style={{ textAlign: 'center' }}>
          <div className='f-h3'>{content.title}</div>
          <Launch>🚀 &nbsp; Launching in Q4 2021 &nbsp; 🚀</Launch>
        </div>

        <Titles
          sections={content.sections}
          currentSection={currentSection}
          onClick={changeSection}
          direction={direction}
        />

        <Progress data={content.sections[currentSection]} />

        <TasksWrapper
          ref={tasksRef}
          height={heightTasks}
        >
          {taskGroupsNodes}
        </TasksWrapper>

      </Container>
    </Section>
  )
})
