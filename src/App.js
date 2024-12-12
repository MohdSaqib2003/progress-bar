import React, { useEffect, useState } from "react";
import ProgressBar from "./components/progressBar";

const App = () => {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setValue((prev) => {
        if (prev !== 100) {
          return prev + 1;
        }
        clearInterval(id); // It clears once reached 100
        return prev;
      });
    }, 30);

    return () => clearInterval(id); // It clears, if component unmount before reaching 100
  }, []);

  return (
    <div>
      <h1>Progress Bar</h1>
      <ProgressBar value={value} />
    </div>
  );
};

export default App;
