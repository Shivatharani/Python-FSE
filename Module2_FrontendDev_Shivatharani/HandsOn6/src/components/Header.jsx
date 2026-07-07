import { Link } from "react-router-dom";

import { useSelector }

from "react-redux";

function Header() {

    const enrolledCourses = useSelector(

        state =>

        state.enrollment.enrolledCourses

    );

    return (

        <header className="header">

            <div className="header-container">

                <div>

                    <h1>

                        🎓 Student Portal

                    </h1>

                    <p>

                        React Router + Redux Toolkit

                    </p>

                </div>

                <nav>

                    <ul>

                        <li>

                            <Link to="/">Home</Link>

                        </li>

                        <li>

                            <Link to="/courses">

                                Courses

                            </Link>

                        </li>

                        <li>

                            <Link to="/profile">

                                Profile

                            </Link>

                        </li>

                    </ul>

                </nav>

                <div className="enrolled">

                    Enrolled :

                    {enrolledCourses.length}

                </div>

            </div>

        </header>

    );

}

export default Header;