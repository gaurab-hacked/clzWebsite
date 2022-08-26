import React, { useEffect } from 'react'
import CourcesFrontPage from './CourcesFrontPage'
import CourseEachContent from './CourseEachContent'
import CoursesDiscription from './CoursesDiscription'

const Courses = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "GNC-Cources"
  }, [])
  return (
    <div>
      <CourcesFrontPage/>
      <CoursesDiscription/>
      <CourseEachContent/>
    </div>

  )
}

export default Courses