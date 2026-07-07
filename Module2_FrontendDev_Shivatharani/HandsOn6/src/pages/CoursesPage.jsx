import { useState } from "react";

import coursesData from "../data/courses.js";

import CourseCard from "../components/CourseCard";

function CoursesPage() {

    const [courses] = useState(coursesData);

    const [searchTerm, setSearchTerm] = useState("");

    const filteredCourses = courses.filter(course =>

        course.name

            .toLowerCase()

            .includes(searchTerm.toLowerCase())

    );

    return (

        <main className="container">

            <h2 className="page-title">

                Available Courses

            </h2>

            <div className="search-section">

                <input

                    type="text"

                    placeholder="Search Courses..."

                    value={searchTerm}

                    onChange={(e)=>

                        setSearchTerm(e.target.value)

                    }

                />

            </div>

            <section className="course-grid">

                {

                    filteredCourses.map(course=>

                        <CourseCard

                            key={course.id}

                            {...course}

                        />

                    )

                }

            </section>

        </main>

    );

}

export default CoursesPage;