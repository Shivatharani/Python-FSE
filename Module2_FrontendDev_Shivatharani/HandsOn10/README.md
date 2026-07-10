# Student Portal - Hands-On 10

## Framework Used

React + Redux Toolkit

---

## API Layer

Axios is used through a centralized API layer.

Files

- api/apiClient.js

- api/courseApi.js

---

## Redux Flow

Component

↓

dispatch(fetchAllCourses())

↓

createAsyncThunk

↓

Axios API

↓

Reducer

↓

Redux Store

↓

Selector

↓

Component

---

## Comparison

### React + Redux Toolkit

• Uses createSlice()

• Uses createAsyncThunk()

• Large ecosystem

• Moderate Boilerplate

---

### Angular + NgRx

• Similar to Redux

• Uses Actions

• Reducers

• Effects

• Selectors

• Higher learning curve

---

### Vue + Pinia

• Very lightweight

• Less boilerplate

• Easy to learn

• Built for Vue

---

## Error Handling

The application uses

ErrorBoundary

to display a fallback UI if any component crashes.

API errors are handled using Axios interceptors.