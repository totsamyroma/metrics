"use client";

import CreateMetricComponent from './components/create_metric';

const CreateMetricPage = ({ searchParams }) => {
  const userId = searchParams.user_id; // Assuming userId is passed as a search param

  return (
    <div>
      <h1>Create Metric</h1>
      <CreateMetricComponent userId={userId} />
    </div>
  );
};

export default CreateMetricPage;
