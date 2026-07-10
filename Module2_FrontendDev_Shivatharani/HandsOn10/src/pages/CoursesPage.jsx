import { useEffect, useState } from "react";

import {

    useDispatch,

    useSelector

} from "react-redux";

import {

    fetchAllCourses,

    selectCourses,

    selectLoading,

    selectError

} from "../redux/courseSlice";

function CoursesPage() {

    const dispatch = useDispatch();

    const courses = useSelector(selectCourses);

    const loading = useSelector(selectLoading);

    const error = useSelector(selectError);

    const [search, setSearch] = useState("");

    useEffect(() => {

    const timer = setTimeout(() => {

        dispatch(fetchAllCourses());

    }, 10000);   // 3 seconds delay

    return () => clearTimeout(timer);

}, [dispatch]);

    const courseNames = [

        "Data Structures",

        "Operating Systems",

        "Database Management",

        "Computer Networks",

        "Web Development"

    ];

    const mappedCourses = courses

        .map((course, index) => ({

            ...course,

            title: courseNames[index] || course.title,

            code: `CS10${index + 1}`,

            credits: index % 2 === 0 ? 4 : 3,

            grade: index === 1 ? "A+" : "A"

        }))

        .filter(course =>

            course.title

                .toLowerCase()

                .includes(search.toLowerCase())

        );

    return (

        <>

            <section className="hero">

                <h1>

                    Student Portal API Dashboard

                </h1>

                <p>

                    Axios • Redux Toolkit • Async Thunks

                </p>

            </section>

            <div className="container">

                <div className="search">

                    <input

                        type="text"

                        placeholder="Search Courses..."

                        value={search}

                        onChange={(e) =>

                            setSearch(e.target.value)

                        }

                    />

                </div>

                {

                    error &&

                    <div className="error">

                        <h3>{error}</h3>

                    </div>

                }

                {

                    loading ?

                        <div className="loading">

                            Loading Courses...

                        </div>

                        :

                        <div className="course-grid">

                            {

                                mappedCourses.map(course => (

                                    <div

                                        className="card"

                                        key={course.id}

                                    >

                                        <h3>

                                            {course.title}

                                        </h3>

                                        <p>

                                            <strong>Course Code:</strong>

                                            {" "}

                                            {course.code}

                                        </p>

                                        <p>

                                            <strong>Credits:</strong>

                                            {" "}

                                            {course.credits}

                                        </p>

                                        <p>

                                            <strong>Grade:</strong>

                                            {" "}

                                            {course.grade}

                                        </p>

                                        <button>

                                            Enroll Now

                                        </button>

                                    </div>

                                ))

                            }

                        </div>

                }

            </div>

        </>

    );

}

export default CoursesPage;