import React, { Component, Fragment, useEffect } from "react";
import MetricBox from "../Atoms/MetricBox";
import { footer_calculate, label_calculate, label_color_calculate } from "./Metric.functions";

const filterClicks = list => {
  return list.filter(function(D) {
    return D.click == true;
  });
};

const MetricFirebaseClicks = ({ list, refresh }) => {
  const label_click = refresh;
  const goal = 10;
  const metric = filterClicks(list).length;
  const color = label_color_calculate(metric, goal);
  const title = "Clicks";
  const label = label_calculate(metric, goal);
  const footer = footer_calculate(metric, goal);
  const sub_title = "Total";
  return <MetricBox {...{ metric, title, label, footer, sub_title, color, label_click }} />;
};
export default MetricFirebaseClicks;
