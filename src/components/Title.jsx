import React from "react";

function Title({ birthdaysCount }) {
  return (
    <div>
      <h1 className="text-3xl font-bold">
        {birthdaysCount} <span>Birthdays</span>
      </h1>
    </div>
  );
}

export default Title;
