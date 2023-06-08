import { useEffect, useState } from "react";
import "./App.css";
import Shoutout from "./models/Shoutout";
import { getAllShoutouts } from "./services/ShoutoutApiService";
import ShoutoutList from "./components/ShoutoutList";

function App() {
  const [allShoutouts, setAllShoutouts] = useState<Shoutout[]>([]);

  useEffect(() => {
    getAllShoutouts().then((res) => console.log(res));
  }, []);
  return (
    <div className="App">
      <ShoutoutList />
    </div>
  );
}

export default App;
