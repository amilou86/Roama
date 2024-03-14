import React from 'react';
import Home from "./components/Home/Home"

export default function App() {
  // // useEffect to trigger translation on component mount
  // useEffect(() => {
  //   translateText();
  //   // empty array ensures the useEffect runs once only on component mount
  //   }, []);

  return (
    <>
      <Home />
    </>
  );
}
