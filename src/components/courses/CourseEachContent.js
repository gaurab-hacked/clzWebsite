import React from 'react'
import { Link } from 'react-router-dom'
import "./CourseEachContent.css"

const CourseEachContent = () => {
    return (
        <div id='CoueseEachContent' className=''>
            <div id="SubjectContent">
                <div id="BBM" className="cards col">
                    <div className="cardLeftSec">
                    </div>
                    <div className="cardRightSec">
                        <h3>BBM</h3>
                        <p>Bachelor of Business Management (BBM) is a four year, eight semester program. The program is offered at Thames International College by the School of Business and Technology in affiliation with the Faculty of Management, Tribhuvan University.</p>
                        <Link to="/PreRegistation">
                            <button>Take A Course</button>
                        </Link>
                    </div>
                </div>
                <div id='BBS' className="cards">
                    <div className="cardLeftSec">
                    </div>
                    <div className="cardRightSec">
                        <h3>BBS</h3>
                        <p>BBS Course is the four years undergraduate program conducted by Tribhuvan University under the faculty of Management (FOM). The objective of the BBS Course is to develop students into competitive management for all sectors of the organization or business activity.</p>
                        <Link to="/PreRegistation">
                            <button>Take A Course</button>
                        </Link>
                    </div>
                </div>

                <div id='MBS' className="cards">
                    <div className="cardLeftSec">
                    </div>

                    <div className="cardRightSec">
                        <h3>MBS</h3>
                        <p>The Master of Business Studies (MBS) deals with areas of accounting, finance, marketing, and general management. Similar to the MBA, it equips students for high-level managerial roles in organizations. MBA tends to be a more practical-oriented and comprises of studies at a more administrable level.
                        </p>
                        <Link to="/PreRegistation">
                            <button>Take A Course</button>
                        </Link>
                    </div>
                </div>

                <div id='BSW' className="cards">
                    <div className="cardLeftSec">
                    </div>
                    <div className="cardRightSec">
                        <h3>BSW</h3>
                        <p>BA in Social Work is a fully-fledged program under the Faculties of Humanities and Social Sciences of Tribhuvan University. It is a 4 years program to enter the field of professional Social Worker. ... Both English and Nepali mediums can be used while appearing for the TU Board Examination.</p>
                        <Link to="/PreRegistation">
                            <button>Take A Course</button>
                        </Link>
                    </div>
                </div>
                <div id='BCA' className="cards col">
                    <div className="cardLeftSec">
                    </div>
                    <div className="cardRightSec">
                        <h3>BCA</h3>
                        <p>
                            The program of study for Bachelor of Computer Application (BCA) is over a period of eight semesters (four academic years). The academic year begins in the September and February of each year. The medium of instruction and examination in the Bachelor of Arts in Computer Application (BCA) program is English.
                        </p>
                        <Link to="/PreRegistation">
                            <button>Take A Course</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CourseEachContent
