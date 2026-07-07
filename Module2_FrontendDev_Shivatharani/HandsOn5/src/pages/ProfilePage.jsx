import { useSelector, useDispatch } from "react-redux";
import { unenroll } from "../redux/enrollmentSlice";

function ProfilePage() {

    const enrolledCourses = useSelector(

        state => state.enrollment.enrolledCourses

    );

    const dispatch = useDispatch();

    function handleRemove(id) {

        dispatch(

            unenroll(id)

        );

    }

    return (

        <main className="container">

            <section className="hero">

                <h2>

                    My Enrolled Courses

                </h2>

                {

                    enrolledCourses.length === 0 ?

                    (

                        <p>

                            No enrolled courses yet.

                        </p>

                    )

                    :

                    (

                        <section className="course-grid">

                            {

                                enrolledCourses.map(course => (

                                    <div

                                        key={course.id}

                                        className="course-card"

                                    >

                                        <h3>

                                            {course.name}

                                        </h3>

                                        <p>

                                            <strong>Course Code :</strong>

                                            {course.code}

                                        </p>

                                        <p>

                                            <strong>Credits :</strong>

                                            {course.credits}

                                        </p>

                                        <p>

                                            <strong>Grade :</strong>

                                            {course.grade}

                                        </p>

                                        <button

                                            className="remove-btn"

                                            onClick={() =>

                                                handleRemove(course.id)

                                            }

                                        >

                                            Remove

                                        </button>

                                    </div>

                                ))

                            }

                        </section>

                    )

                }

            </section>

        </main>

    );

}

export default ProfilePage;