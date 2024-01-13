import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

function BirthdaysList({ birthdays, setBirthdays }) {
  const [birthDays, setBirthDays] = useState(birthdays);
  //   const birthDays = [birthdays];

  const handleDelete = (id) => {
    setBirthdays((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
    setBirthDays((prev) => {
      return prev.filter((event) => {
        return event.id !== id;
      });
    });
  };
  //   console.log();
  return (
    <div>
      <ul className="flex flex-col gap-3">
        {birthDays.map((birthday) => {
          const { id, name, age, image } = birthday;
          return (
            <li className="flex items-center gap-3 w-[300px]" key={id}>
              <img
                className="w-[50px] h-[50px] object-cover rounded-[50%]"
                src={image}
                alt=""
              />
              <div className="w-full flex items-center justify-between">
                <div className="flex flex-col justify-between">
                  <h2 className="text-xl">{name}</h2>
                  <p className="text-sm">{age} years</p>
                </div>

                <button
                  onClick={() => handleDelete(id)}
                  className="point text-xl hover:opacity-10 transition"
                >
                  <MdDeleteOutline />
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BirthdaysList;
