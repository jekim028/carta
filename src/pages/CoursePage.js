import React from 'react';
import courses from '../courses';
import CalendarImg from '../images/calendar.svg'
import GradingImg from '../images/grading.svg'
import CircleImg from '../images/circle.svg'
import FulfillImg from '../images/fulfill.svg'
import ClockImg from '../images/clock.svg'
import { useNavigate, useParams } from 'react-router-dom'

export default function CoursePage(props) {
    const { id } = useParams()
    const course = courses.find(course => course.id === id)
    const navigate = useNavigate();
    const routeChange = () => {
        navigate(-1);
    }

    let seasons
    let numSeasons = course.seasons_offered.length
    if (numSeasons === 0) {
        seasons = "Not Offered"
    } else {
        const commaSep = course.seasons_offered.map(season => {
            if (season === "autumn") {
                return "AUT"
            } else if (season === "winter") {
                return "WIN"
            } else if (season === "spring") {
                return "SPR"
            }
            return "SUM"
        }).join(', ')
        seasons = commaSep
    }

    let unitCount
    if (course.min_units === course.max_units) {
        if (course.min_units === 1) {
            unitCount = `${course.min_units} Unit`
        } else {
            unitCount = `${course.min_units} Units`
        }
    } else {
        unitCount = `${course.min_units} - ${course.max_units} Units`
    }

    // let sum_ratings
    // let total_ratings
    // const rating = course.ratings.map(curr => {
    //     sum_ratings += (curr.average_rating * curr.num_ratings)
    //     total_ratings += curr.num_ratings
    // })

    return (
        <div className="coursePage">
            <p onClick={routeChange} className="coursePage--back">Go Back</p>
            <div className="coursePage--banner">
                <span className="coursePage--banner-code">{course.course_codes[0]}</span>
                <h1>{course.title}</h1>
                <div className="course--stats">
                    <span>
                        {course.max_units <= 2 && (
                            <img src={CircleImg} alt="Circle" className="circle-img" />
                        )}
                        {(course.max_units === 3 || course.max_units === 4) && (
                            <>
                                <img src={CircleImg} alt="Circle" className="circle-img" />
                                <img src={CircleImg} alt="Circle" className="circle-img" />
                            </>
                        )}
                        {(course.max_units === 5) && (
                            <>
                                <img src={CircleImg} alt="Circle" className="circle-img" />
                                <img src={CircleImg} alt="Circle" className="circle-img" />
                                <img src={CircleImg} alt="Circle" className="circle-img" />
                            </>
                        )}
                        {unitCount}
                    </span>
                    <span>
                        <img src={CalendarImg} alt="Calendar" className="calendar-img" />
                        {seasons}
                    </span>
                    <span>
                        <img src={GradingImg} alt="Grading" className="grading-img" />
                        {course.grading}
                    </span>
                </div>
            </div>
            <div className="coursePage--content">
                <div className="coursePage--stats">
                    <ul>
                        <li>
                            <h5 className="coursePage--stats-title">Intensity</h5>
                            <span className="coursePage--stats-item">
                                <img src={ClockImg} alt="clock" />
                                <p>{course.average_hours_spent} hours per week</p>
                            </span>
                        </li>

                        {course.general_requirements === undefined && (
                            <li>
                                <span className="coursePage--stats-item">
                                    <img src={FulfillImg} alt="Fulfills" />
                                    <h5 className="coursePage--stats-title">Fulfills</h5>
                                </span>
                                <p>{course.general_requirements}</p>
                            </li>
                        )}
                    </ul>
                </div>
                <div className="coursePage--about">
                    <h2>About this course</h2>
                    <p>{course.description}</p>
                </div>
            </div>
        </div>
    )
}