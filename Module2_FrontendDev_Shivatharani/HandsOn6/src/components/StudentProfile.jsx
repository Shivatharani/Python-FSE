import { useState } from "react";

function StudentProfile() {

    const [student, setStudent] = useState({

        name: "",

        email: "",

        semester: ""

    });

    const handleChange = (e) => {

        const { name, value } = e.target;

        setStudent({

            ...student,

            [name]: value

        });

    };

    return (

        <section className="profile-section">

            <h2>Student Profile</h2>

            <div className="profile-form">

                <input

                    type="text"

                    name="name"

                    placeholder="Student Name"

                    value={student.name}

                    onChange={handleChange}

                />

                <input

                    type="email"

                    name="email"

                    placeholder="Email"

                    value={student.email}

                    onChange={handleChange}

                />

                <input

                    type="text"

                    name="semester"

                    placeholder="Semester"

                    value={student.semester}

                    onChange={handleChange}

                />

            </div>

            <div className="profile-preview">

                <h3>Profile Preview</h3>

                <p><strong>Name :</strong> {student.name}</p>

                <p><strong>Email :</strong> {student.email}</p>

                <p><strong>Semester :</strong> {student.semester}</p>

            </div>

        </section>

    );

}

export default StudentProfile;