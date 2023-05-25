import React, { FunctionComponent, useEffect, useState } from "react";
import axios from "axios";
import { configuration } from "../configuration";
import AquaClient from "../graphql/aquaClient";
import { Streamer, StreamerBonus } from "../models/streamer";
import BonusStripe from "../components/BonusStripe/BonusStripe";
import VideoDiscalimer from "../components/VideoDisclaimer/VideoDisclaimer";
import FullPageLoader from "../components/FullPageLoader";
import lowerCase from "lodash/lowerCase";
import Wrapper from "../../../components/Layouts/Wrapper";
import Container from "../../../components/Layouts/Container";

interface Props {
  streamerData: Streamer;
}

const index: FunctionComponent<Props> = ({ streamerData }) => {
  return (
    <Wrapper>
      <Container>
        <div className="top-bar">
          <img className="logo" src="/icons/app_icon.png" />
        </div>
        <div>
          <p style={{ margin: "3rem", marginTop: "4rem" }}>
            Nel 2015 Paolo e Mimmo hanno creato IL COBRA per condividere con una
            community crescente la loro passione principale: il calcio e lo
            sport in generale. Poi è arrivato Anso...
          </p>

          <div style={{ display: "flex" }}>
            <img style={{ margin: "auto auto" }} src="/cobra_team.jpg" />
          </div>
          <a
            style={{
              margin: "2rem",
              textAlign: "center",
              display: "block",
            }}
            href="https://www.instagram.com/ilcobratipster/"
          >
            Segui IL COBRA su instagram cliccando qui!
          </a>
        </div>
      </Container>
    </Wrapper>
  );
};

export async function getServerSideProps({ query }) {
  return {
    props: {},
  };
}

export default index;
