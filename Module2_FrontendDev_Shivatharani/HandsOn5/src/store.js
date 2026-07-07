import { configureStore }

from "@reduxjs/toolkit";

import enrollmentReducer

from "./redux/enrollmentSlice";

const store = configureStore({

    reducer: {

        enrollment:

        enrollmentReducer

    }

});

export default store;