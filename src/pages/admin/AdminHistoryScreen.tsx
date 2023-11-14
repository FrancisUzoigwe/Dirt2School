const AdminHistoryScreen = () => {
  return (
    <>
      <div className="flex w-full h-auto justify-center items-center">
        <div className="w-[95%] h-full bg-white mt-5 rounded-md justify-between flex items-center">
          <div className="w-[20%]  flex items-center justify-center">ID</div>
          <div className="w-[20%]  flex items-center justify-center">Date</div>
          <div className="w-[30%] flex items-center justify-center">
            Recipient
          </div>
          <div className="w-[30%]  flex items-center justify-center">Email</div>
        </div>
      </div>
    </>
  );
};

export default AdminHistoryScreen;
