import {

    createSlice,

    createAsyncThunk

} from "@reduxjs/toolkit";

import {

    getAllCourses

} from "../api/courseApi";

// Async Thunk
export const fetchAllCourses = createAsyncThunk(

    "courses/fetchAll",

    async (_, { rejectWithValue }) => {

        try {

            const data = await getAllCourses();

            return data;

        }

        catch (error) {

            return rejectWithValue(error.message);

        }

    }

);

const courseSlice = createSlice({

    name: "courses",

    initialState: {

        courses: [],

        loading: false,

        error: ""

    },

    reducers: {},

    extraReducers: (builder) => {

        builder

            .addCase(

                fetchAllCourses.pending,

                (state) => {

                    state.loading = true;

                    state.error = "";

                }

            )

            .addCase(

                fetchAllCourses.fulfilled,

                (state, action) => {

                    state.loading = false;

                    state.courses = action.payload;

                }

            )

            .addCase(

                fetchAllCourses.rejected,

                (state, action) => {

                    state.loading = false;

                    state.error =

                        action.payload ||

                        "Unable to load courses.";

                }

            );

    }

});

// Selectors
export const selectCourses =

    (state) => state.courses.courses;

export const selectLoading =

    (state) => state.courses.loading;

export const selectError =

    (state) => state.courses.error;

export default courseSlice.reducer;