import { useParams } from "react-router-dom";

import courses from "../data/courses.js";

function CourseDetailPage() {

    const { courseId } = useParams();

    const course = courses.find(

        c => c.id === Number(courseId)

    );

    if (!course) {

        return (

            <main className="container">

                <h2>

                    Course Not Found

                </h2>

            </main>

        );

    }

    return (

        <main className="container">

            <section className="hero">

                <h2>{course.name}</h2>

                <div className="course-detail">

                    <h3>{course.code}</h3>

                    <p>

                        Credits :

                        {course.credits}

                    </p>

                    <p>

                        Grade :

                        {course.grade}

                    </p>

                    <p>

                        This course is part of the Student Portal demo.

                    </p>

                </div>

            </section>

        </main>

    );

}

export default CourseDetailPage;