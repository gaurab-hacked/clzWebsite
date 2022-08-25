import React from 'react'
import CourcesFrontPage from './CourcesFrontPage'
import CourseEachContent from './CourseEachContent'
import CoursesDiscription from './CoursesDiscription'

const Courses = () => {
  return (
    <div>
      <CourcesFrontPage/>
      <CoursesDiscription/>
      <CourseEachContent/>
    </div>

  )
}

export default Courses