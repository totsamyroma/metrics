"use client";

import MetricFetcher from "./components/metric_fetcher";

const ChartPage = ({ searchParams }) => {
  const id = searchParams.id;

  return (
    <div>
      <MetricFetcher id={id} />
    </div>
  );
};

export default ChartPage;
