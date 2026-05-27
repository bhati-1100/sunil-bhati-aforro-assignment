import { useState, useCallback } from "react";
import CustomButton from "../components/atom/Button";

const UsersPage = () => {
  const [count, setCount] = useState(0);

  console.log("App rendered");

  const handleIncrement = useCallback(() => {
    setCount((prev) => prev + 1);
    console.log("Increment button clicked");
  }, []);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <CustomButton onClick={handleIncrement} label="Increment" />
    </div>
  );
};

export default UsersPage;
