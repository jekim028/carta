import React from 'react'
import CalendarImg from '../images/calendar.svg'
import GradingImg from '../images/grading.svg'
import CircleImg from '../images/circle.svg'
import { useNavigate } from 'react-router-dom'

export default function Course(props) {
    let seasons
    let numSeasons = props.course.seasons_offered.length
    if (numSeasons === 0) {
        seasons = "Not Offered"
    } else {
        const commaSep = props.course.seasons_offered.map(season => {
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
    if (props.course.min_units === props.course.max_units) {
        if (props.course.min_units === 1) {
            unitCount = `${props.course.min_units} Unit`
        } else {
            unitCount = `${props.course.min_units} Units`
        }
    } else {
        unitCount = `${props.course.min_units} - ${props.course.max_units} Units`
    }

    const navigate = useNavigate();
    const routeChange = () => {
        navigate(`/${props.course.id}`);
    }

    return (
        <div className="course" onClick={routeChange}>
            <h2>{props.course.course_codes[0]}: {props.course.title}</h2>
            <div className="course--stats">
                <span>
                    {props.course.max_units <= 2 && (
                        <img src={CircleImg} alt="Circle" className="circle-img" />
                    )}
                    {(props.course.max_units === 3 || props.course.max_units === 4) && (
                        <>
                            <img src={CircleImg} alt="Circle" className="circle-img" />
                            <img src={CircleImg} alt="Circle" className="circle-img" />
                        </>
                    )}
                    {(props.course.max_units === 5) && (
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
                    {props.course.grading}
                </span>
            </div>
            <p>{props.course.description}</p>
        </div>
    )
}