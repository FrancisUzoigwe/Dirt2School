const Balance = () => {
  return (
    <div className="h-[200px] my-1 rounded-lg border">
      <div>Balance</div>
    </div>
  );
};

const Bags = () => {
  return  <div className="h-[200px] my-1 rounded-lg border">
  <div>Bags</div>
</div>;
};

const History = () => {
  return  <div className="h-[200px] my-1 rounded-lg border">
  <div>History</div>
</div>;
};

const HubScreen = () => {
  return (
    <div className="grid grid-cols-3 gap-2 max-sm:grid-cols-2 xl:grid-cols-4 mx-1">
      <Balance />
      <Bags />
      <History />
      <Balance />
      <Bags />
      <History />
      <Balance />
      <Bags />
      <History />
      <Balance />
      <Bags />
      <History />
      <Balance />
      <Bags />
      <History />
    </div>
  );
};

export default HubScreen;
