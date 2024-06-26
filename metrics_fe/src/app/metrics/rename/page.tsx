"use client";

import RenameMetricComponent from "./components/rename_metric";

const RenameMetricPage = ({ searchParams }) => {
  const id = searchParams.id; // Assuming userId is passed as a search param

  return (
    <div className="w-full flex flex-col gap-4">
      <h1>Rename Metric</h1>
      <RenameMetricComponent id={id} />
    </div>
  );
};

export default RenameMetricPage;
