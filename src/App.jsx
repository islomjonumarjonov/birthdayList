import { useState } from "react";
import Birthdays from "./data";
import BirthdaysList from "./components/BirthdaysList";
import Title from "./components/Title";
console.log(Birthdays);

function App() {
  const [birthdays, setBirthdays] = useState(Birthdays);
  const handleClick = () => {
    if (birthdays) {
      setBirthdays("");
    } else {
      setBirthdays(Birthdays);
    }
  };
  console.log(birthdays);
  return (
    <div className="flex w-full h-[100vh] flex-col items-center justify-center bg-slate-800">
      <div className="py-10 px-20 bg-teal-100 flex flex-col gap-5 rounded">
        <Title birthdaysCount={birthdays.length} />
        {birthdays && (
          <BirthdaysList setBirthdays={setBirthdays} birthdays={birthdays} />
        )}
        <button
          onClick={() => handleClick()}
          className="btn btn-primary border-white hover:btn-outline"
        >
          {birthdays ? "Clear All" : "Reset"}
        </button>
      </div>
    </div>
  );
}

export default App;
