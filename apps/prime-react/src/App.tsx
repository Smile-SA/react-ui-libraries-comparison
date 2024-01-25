import { useEffect, useRef, useState } from "react";
import DatePicker from "./DatePicker";
import Table from "./Table";
import Toast from "./Toast";

export default function App() {
  const [count, setCount] = useState(0);
  const start = useRef(0);

  function handleStart() {
    if (count === 0) {
      start.current = Date.now();
      setCount(count + 1);
    } else {
      start.current = 0;
      setCount(0);
    }
  }

  useEffect(() => {
    if (count > 0 && Date.now() - start.current < 1000) {
      setCount(count + 1);
    }
  }, [count]);

  return (
    <>
      <DatePicker />
      <Table />
      <Toast />
      <div>
        <button onClick={handleStart} type="button">
          {count}
        </button>
      </div>
    </>
  );
}
