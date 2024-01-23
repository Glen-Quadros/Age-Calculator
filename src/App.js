import React, { useState } from 'react';

const AgeCalculator = () => {
  const [dob, setDob] = useState('');
  const [age, setAge] = useState({ years: 0, months: 0, days: 0 });

  const calculateAge = () => {
    const dobDate = new Date(dob);
    const currentDate = new Date();

    if (dobDate > currentDate) {
      alert("Please select a date of birth that is not in the future.");
      return;
    }

    let ageInMilliseconds = currentDate - dobDate;

    if (ageInMilliseconds < 0) {
      alert("Invalid date of birth. Please select a valid date.");
      return;
    }

    const years = Math.floor(ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000));
    ageInMilliseconds -= years * (365.25 * 24 * 60 * 60 * 1000);

    const months = Math.floor(ageInMilliseconds / (30.44 * 24 * 60 * 60 * 1000));
    ageInMilliseconds -= months * (30.44 * 24 * 60 * 60 * 1000);

    const days = Math.floor(ageInMilliseconds / (24 * 60 * 60 * 1000));

    setAge({ years, months, days });
  };

  return (
    <div>
      <h1>Age Calculator</h1>
      <label>
        Enter your Date of Birth:
        <input type="date" value={dob} onChange={(e) => setDob(e.target.value)} />
      </label>
      <button onClick={calculateAge}>Calculate Age</button>
      <div>
        <h2>Your Age</h2>
        <p>Years: {age.years}</p>
        <p>Months: {age.months}</p>
        <p>Days: {age.days}</p>
      </div>
    </div>
  );
};

export default AgeCalculator;