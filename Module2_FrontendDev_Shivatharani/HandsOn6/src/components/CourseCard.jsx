import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { enroll } from "../redux/enrollmentSlice";

function CourseCard({
    id,
    name,
    code,
    credits,
    grade
}) {

    const navigate = useNavigate();

    const dispatch = useDispatch();

    function handleEnroll() {

        dispatch(
            enroll({
                id,
                name,
                code,
                credits,
                grade
            })
        );

        navigate("/profile");

    }

    function viewDetails() {

        navigate(`/courses/${id}`);

    }

    return (

        <div className="course-card">

            <h3>{name}</h3>

            <p>

                <strong>Course Code :</strong> {code}

            </p>

            <p>

                <strong>Credits :</strong> {credits}

            </p>

            <p>

                <strong>Grade :</strong> {grade}

            </p>

            <button
                className="enroll-btn"
                onClick={handleEnroll}
            >
                Enroll
            </button>

            <button
                className="enroll-btn"
                style={{
                    marginTop: "10px",
                    background: "#43a047"
                }}
                onClick={viewDetails}
            >
                View Details
            </button>

        </div>

    );

}

export default CourseCard;