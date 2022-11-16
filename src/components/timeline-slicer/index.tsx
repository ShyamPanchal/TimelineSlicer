import { useState } from "react";
import { Container, Content, Header } from "rsuite";
import "./index.css";
import { QuaterView } from "./QuaterView";

import * as React from "react";
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
  const _startDate = new Date();
  _startDate.setFullYear(_startDate.getFullYear() - 3);
  const _endDate = new Date();

  const [startDate, setStartDate] = React.useState<Date>(_startDate);
  const [endDate, setEndDate] = React.useState<Date>(_endDate);
  const calender = getCalender(_startDate, _endDate);

  console.log("Calender", calender);

  const [ui, setUI] = useState<"year" | "quater" | "months" | "days">("year");

  const sliderMax = getSliderMax(calender, ui);

  const enabled = (key: string) => (key === ui ? "primary" : "ghost");

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
          <Button appearance="primary">Apply</Button>
        </ButtonToolbar>
        <br />
        <div
          style={{
            position: "relative",
            width: "70%",
            margin: "auto",
          }}
        >
          <div ref={scrollRef} style={{ overflowX: "auto", zIndex: -1 }}>
            {ui === "year" && (
              <YearView
                calender={calender}
                sliderMax={sliderMax}
                startDate={startDate}
                endDate={endDate}
                updateStartDate={setStartDate}
                updateEndDate={setEndDate}
              />
            )}
            {ui === "quater" && (
              <QuaterView
                calender={calender}
                sliderMax={sliderMax}
                startDate={startDate}
                endDate={endDate}
                updateStartDate={setStartDate}
                updateEndDate={setEndDate}
              />
            )}
            {ui === "months" && (
              <MonthView
                calender={calender}
                sliderMax={sliderMax}
                startDate={startDate}
                endDate={endDate}
                updateStartDate={setStartDate}
                updateEndDate={setEndDate}
              />
            )}
            {ui === "days" && (
              <DayView
                calender={calender}
                sliderMax={sliderMax}
                startDate={startDate}
                endDate={endDate}
                updateStartDate={setStartDate}
                updateEndDate={setEndDate}
              />
            )}
          </div>
        </div>
      </Content>
    </Container>
  );
}

export default TimelineSlicer;
