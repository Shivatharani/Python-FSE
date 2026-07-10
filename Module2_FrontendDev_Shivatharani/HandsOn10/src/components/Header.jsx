function Header(){

    return(

        <header

        style={{

            background:"#0d47a1",

            color:"white",

            padding:"20px"

        }}

        >

            <div

            className="container"

            style={{

                display:"flex",

                justifyContent:"space-between",

                alignItems:"center"

            }}

            >

                <h2>

                    🎓 Student Portal

                </h2>

                <h4>

                    Hands-On 10

                </h4>

            </div>

        </header>

    );

}

export default Header;