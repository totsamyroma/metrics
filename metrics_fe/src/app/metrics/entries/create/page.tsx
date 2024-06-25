"use client";

import CreateMetricEntryComponent from './components/create_metric_entry';

const CreateMetricEntryPage = ({ searchParams }) => {
  const metricId = searchParams.metric_id; // Assuming userId is passed as a search param
  const valueType = searchParams.value_type;

  return (
    <div>
      <h1>Create Metric Entry</h1>
      <CreateMetricEntryComponent metricId={metricId} valueType={valueType}/>
    </div>
  );
};

export default CreateMetricEntryPage;

