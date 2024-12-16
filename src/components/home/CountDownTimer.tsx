"use client";

import React, { useState, useEffect } from "react";
import { CountDown } from "./CountDown";

const CountdownTimer = () => {
  const targetDate = new Date("2025-03-16T00:00:00").getTime();
  const [timeLeft, setTimeLeft] = useState({
    months: 0,
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime();
      const totalSeconds = Math.floor((targetDate - now) / 1000);

      if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        return {
          months: 0,
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        };
      }

      return {
        months: Math.floor(totalSeconds / (30 * 24 * 60 * 60)), // Approximate month duration
        days: Math.floor(totalSeconds / (24 * 60 * 60)) % 30,
        hours: Math.floor(totalSeconds / (60 * 60)) % 24,
        minutes: Math.floor(totalSeconds / 60) % 60,
        seconds: totalSeconds % 60,
      };
    };

    const timerInterval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    // Initial calculation
    setTimeLeft(calculateTimeLeft());

    return () => clearInterval(timerInterval);
  }, [targetDate]);
  const periods = [
    {
      key: "tháng",
      val: timeLeft.months,
    },
    {
      key: "ngày",
      val: timeLeft.days,
    },
    {
      key: "giờ",
      val: timeLeft.hours,
    },
    {
      key: "phút",
      val: timeLeft.minutes,
    },
    {
      key: "giây",
      val: timeLeft.seconds,
    },
  ];

  return (
    <div id="countdown" className="flex">
      {periods.map((period, i) => (
        <CountDown key={i} period={period} />
      ))}
    </div>
  );
};

export default CountdownTimer;
