import React, { useEffect, useState } from "react";
import { Col, Container, Jumbotron, Row } from "react-bootstrap";
import { getStatistics } from "./services/kompensasjonsService";

interface Stats {
  hittilTildelt: string;
  antallTildelinger: number;
  antallStottedeForetak: number;
  sistOppdatert: string;
}

function App() {
  const [stats, setStats] = useState<Stats>();

  useEffect(() => {
    getStatistics().then((res) => setStats(res));
  }, []);

  return (
    <Container>
      <Jumbotron className="bg-dark my-4">
        <h1>
          {stats?.hittilTildelt && (+stats?.hittilTildelt)?.toLocaleString()}
        </h1>
        <p>norske kroner er hittil tildelt i koronatilskudd. Lommerusk.</p>
      </Jumbotron>
      <Row>
        <Col>
          <Jumbotron className="bg-dark my-4">
            <h1>
              {stats?.antallTildelinger &&
                (+stats?.antallTildelinger)?.toLocaleString()}
            </h1>
            <p>tildelinger er gjort så langt.</p>
          </Jumbotron>
        </Col>
        <Col>
          <Jumbotron className="bg-dark my-4">
            <h1>
              {stats?.antallStottedeForetak &&
                (+stats?.antallStottedeForetak)?.toLocaleString()}
            </h1>
            <p>foretak har fått disse tildelingene.</p>
          </Jumbotron>
        </Col>
      </Row>
      <p>
        Disse tallene ble sist oppdatert{" "}
        {stats?.sistOppdatert &&
          new Date(stats?.sistOppdatert).toLocaleString()}
        .
      </p>
      <p className="text-muted">
        Denne siden er laget av{" "}
        <a href="http://www.nilseng.com" target="__blank">
          Teodor Nilseng Danielsen
        </a>
        .
      </p>
      <p className="text-muted">
        All data er offentlig tilgjengelig via{" "}
        <a
          href="https://data.brreg.no/kompensasjonsordning/innsyn/"
          target="__blank"
        >
          Brønnøysundregistrene
        </a>
        .
      </p>
    </Container>
  );
}

export default App;
