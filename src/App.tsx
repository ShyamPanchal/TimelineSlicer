import { Container, CustomProvider } from "rsuite";
import "rsuite/dist/rsuite.min.css";
import TimelineSlicer from "./components/timeline-slicer";

function App() {
  return (
    <div style={{ textAlign: "center" }}>
      <CustomProvider theme="light">
        <Container>
          <TimelineSlicer />
        </Container>
      </CustomProvider>
    </div>
  );
}

export default App;
