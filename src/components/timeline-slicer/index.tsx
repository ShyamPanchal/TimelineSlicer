import { useState } from "react";
import { Container, Content, Header } from "rsuite";
import "./index.css";
import { QuaterView } from "./QuaterView";

import { Button, ButtonGroup, ButtonToolbar } from "rsuite";
import { DayView } from "./DayView";
import { MonthView } from "./MonthView";
import { getCalender, useHorizontalScroll } from "./utils";
import { YearView } from "./YearView";

function TimelineSlicer() {
  const startDate = new Date(2022, 10, 11);
  const endDate = new Date(2030, 0, 1);
  const calender = getCalender(startDate, endDate);

  console.log("Calender", calender);

  const [ui, setUI] = useState<"year" | "quater" | "months" | "days">("year");

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
        <div ref={scrollRef} style={{ overflowX: "auto" }}>
          {ui === "year" && <YearView calender={calender} />}
          {ui === "quater" && <QuaterView calender={calender} />}
          {ui === "months" && <MonthView calender={calender} />}
          {ui === "days" && <DayView calender={calender} />}
        </div>
      </Content>
    </Container>
  );
}

export default TimelineSlicer;
