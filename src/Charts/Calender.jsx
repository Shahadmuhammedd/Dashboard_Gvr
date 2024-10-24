import React from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateCalendar } from "@mui/x-date-pickers/DateCalendar";
import dayjs from "dayjs";

function Calendar() {
  const renderDay = (day, _value, DayComponentProps) => {
    const isSunday = day.day() === 0; // Check if the day is Sunday

    return (
      <div
        style={{
          color: isSunday ? "red" : "inherit",
          borderRadius: "50%",
          padding: "8px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          margin: "2px",
          width: "36px",
          height: "36px",
          backgroundColor: DayComponentProps.selected ? "orange" : "transparent",
        }}
      >
        {/* Apply the DayComponentProps to the day itself */}
        <span {...DayComponentProps} style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
          {day.date()} {/* Render the day number */}
        </span>
      </div>
    );
  };

  return (
    <div className="w-full max-w-[345px] h-[400px] mx-[100px] mt-10 bg-white shadow-2xl rounded-2xl p-6">
      <h1 className="text-blue-800 font-bold text-lg ml-4">Calendar</h1>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DateCalendar
          renderDay={renderDay}
          sx={{
            ".Mui-selected": {
              backgroundColor: "orange",
              color: "#fff",
            },
            ".MuiDayCalendar-weekDayLabel": {
              color: "#6b7280",
            },
            ".MuiPickersDay-root": {
              fontSize: "16px",
            },
            ".MuiPickersDay-today": {
              border: "2px solid orange",
            },
          }}
        />
      </LocalizationProvider>
    </div>
  );
}

export default Calendar;
