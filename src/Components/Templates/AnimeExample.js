import React, { Fragment, useEffect } from "react";
import anime from "animejs/lib/anime.es.js";

const AnimeExampleSquare = () => {
  useEffect(() => {
    anime({
      targets: ".css-transforms-demo .el",
      translateX: 250,
      scale: 2,
      rotate: "1turn"
    });
  }, []);
  return (
    <div class="demo-content css-transforms-demo">
      <div class="square shadow"></div>
      <div class="square el" style=""></div>
    </div>
  );
};
const AnimeExampleGrid = () => {
  useEffect(() => {
    anime({
      targets: ".staggering-grid-demo .el",
      scale: [{ value: 0.1, easing: "easeOutSine", duration: 500 }, { value: 1, easing: "easeInOutQuad", duration: 1200 }],
      delay: anime.stagger(200, { grid: [14, 5], from: "center" })
    });
  }, []);
  return (
    <Fragment>
      <div class="demo-content staggering-grid-demo">
        <div class="grid">
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
          <div class="small square el"></div>
        </div>
      </div>
    </Fragment>
  );
};
const AnimeExampleObject = () => {
  useEffect(() => {
    var logEl = document.querySelector(".battery-log");

    var battery = {
      charged: "0%",
      cycles: 120
    };

    anime({
      targets: battery,
      charged: "100%",
      cycles: 130,
      round: 1,
      easing: "linear",
      update: function() {
        logEl.innerHTML = JSON.stringify(battery);
      }
    });
  }, []);
  return (
    <Fragment>
      <div class="demo-content">
        <pre class="battery-log"></pre>
      </div>
    </Fragment>
  );
};

const AnimeExample = () => {
  return (
    <Fragment>
      <AnimeExampleObject />
      {/* <AnimeExampleSquare />; */}
    </Fragment>
  );
};

export default AnimeExample;
