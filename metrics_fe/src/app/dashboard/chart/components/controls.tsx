"use client"

import { Select, SelectItem, Button } from "@nextui-org/react";

const Controls = ({ interval, setInterval, batchSize, setBatchSize, loadMoreData, loading, hasNextPage }) => {
  const handleIntervalChange = (e) => {
    setInterval(e.target.value);
  };

  const handleBatchSizeChange = (e) => {
    setBatchSize(+e.target.value);
  };

  return (
    <div id="controls">
      <div id="intervals" className="w-full flex flex-row gap-4">
        <Select size="sm" className="max-w-xs" radius="none" label="Display format" defaultSelectedKeys={[interval]} onChange={handleIntervalChange}>
          <SelectItem key="raw">Raw data (seconds)</SelectItem>
          <SelectItem key="minute">Average (minute)</SelectItem>
          <SelectItem key="hour">Average (hour)</SelectItem>
          <SelectItem key="day">Average (day)</SelectItem>
        </Select>
        <Select size="sm" className="max-w-xs" radius="none" label="Select batch size" defaultSelectedKeys={[batchSize.toString()]} onChange={handleBatchSizeChange}>
          <SelectItem key="1000">1000</SelectItem>
          <SelectItem key="1500">1500</SelectItem>
          <SelectItem key="2000">2000</SelectItem>
          <SelectItem key="2500">2500</SelectItem>
          <SelectItem key="3000">3000</SelectItem>
          <SelectItem key="3500">3500</SelectItem>
          <SelectItem key="4000">4000</SelectItem>
          <SelectItem key="4500">4500</SelectItem>
          <SelectItem key="5000">5000</SelectItem>
          <SelectItem key="10000">10000</SelectItem>
        </Select>
        <Button size="lg" className="max-w-xl" radius="none" onClick={loadMoreData} isLoading={loading} disabled={!hasNextPage}>Load More</Button>
      </div>
    </div>
  );
};

export default Controls;

