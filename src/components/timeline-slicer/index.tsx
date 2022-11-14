import { createRef, useState } from "react";
import { Calendar, Container, Content, Header } from "rsuite";
import "./index.css";
import { QuaterView } from "./QuaterView";

import { Button, ButtonGroup, ButtonToolbar } from "rsuite";
import { DayView } from "./DayView";
import { MonthView } from "./MonthView";
import { Calender, getCalender, useHorizontalScroll } from "./utils";
import { YearView } from "./YearView";

const getSliderMax = (
  calender: Calender,
  ui: "year" | "quater" | "months" | "days"
) => {
  switch (ui) {
    case "year": {
      return Object.keys(calender.years).length + 1;
    }
    case "quater": {
      let count = 1;
      Object.values(calender.years).forEach(
        (year) => (count += Object.keys(year.quaters).length)
      );
      return count;
    }
    case "months": {
      let count = 1;
      Object.values(calender.years).forEach((year) => {
        Object.values(year.quaters).forEach(
          (quater) => (count += Object.keys(quater.months).length)
        );
      });
      return count;
    }
    case "days": {
      let count = 1;
      Object.values(calender.years).forEach((year) => {
        Object.values(year.quaters).forEach((quater) => {
          Object.values(quater.months).forEach(
            (month) => (count += Object.keys(month.days).length)
          );
        });
      });
      return count;
    }
    default:
      return 1;
  }
};

function TimelineSlicer() {
  const startDate = new Date(2022, 10, 11);
  const endDate = new Date(2024, 0, 1);
  const calender = getCalender(startDate, endDate);

  console.log("Calender", calender);

  const [ui, setUI] = useState<"year" | "quater" | "months" | "days">("year");

  const sliderMax = getSliderMax(calender, ui);

  const enabled = (key: string) => (key === ui ? "primary" : "default");

  const scrollRef = useHorizontalScroll();

  return (
    <Container style={{ padding: "20px" }}>
      <Header>
        <h3>Timeline slicer</h3>
      </Header>
      <br />
      <Content>
        <ButtonToolbar>
          <ButtonGroup>
            <Button appearance={enabled("year")} onClick={() => setUI("year")}>
              Year
            </Button>
            <Button
              appearance={enabled("quater")}
              onClick={() => setUI("quater")}
            >
              Quater
            </Button>
            <Button
              appearance={enabled("months")}
              onClick={() => setUI("months")}
            >
              Months
            </Button>
            <Button appearance={enabled("days")} onClick={() => setUI("days")}>
              Days
            </Button>
          </ButtonGroup>
        </ButtonToolbar>
        <br />
        <div style={{ position: "relative" }}>
          <div ref={scrollRef} style={{ overflowX: "auto", zIndex: -1 }}>
            {ui === "year" && (
              <YearView calender={calender} sliderMax={sliderMax} />
            )}
            {ui === "quater" && (
              <QuaterView calender={calender} sliderMax={sliderMax} />
            )}
            {ui === "months" && (
              <MonthView calender={calender} sliderMax={sliderMax} />
            )}
            {ui === "days" && (
              <DayView calender={calender} sliderMax={sliderMax} />
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default TimelineSlicer;
