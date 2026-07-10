import Header from "./components/Header";
import CoursesPage from "./pages/CoursesPage";
import ErrorBoundary from "./components/ErrorBoundary";

import "./App.css";

function App() {

  return (

    <ErrorBoundary>

      <Header />

      <CoursesPage />

    </ErrorBoundary>

  );

}

export default App;