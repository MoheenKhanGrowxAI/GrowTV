import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import AuthNavigator from "./Navigator";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Header from "./components/header/Header";
import { Context } from "./Context";

function App() {
  const [context, setContext] = useState(undefined);
  const [showImage, setShowImage] = useState(true);

  useEffect(() => {
    // Hide the image after 3 seconds (adjust the time as needed)
    const timer = setTimeout(() => {
      setShowImage(false);
    }, 2000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <Context.Provider value={[context, setContext]}>
        {showImage ? (
          <LoadingScreen />
        ) : (
          <div className="app">
            <Router>
              <Header />
              <AuthNavigator />
            </Router>
          </div>
        )}
      </Context.Provider>
    </>
  );
}

export default App;
