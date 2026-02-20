const Alert = ({ type, text }) => {
  return (
    <div className='fixed top-20 left-0 right-0 z-50 flex justify-center items-center px-4 animate-slide-down'>
      <div
        className={`p-3 ${
          type === "danger" ? "bg-red-800" : "bg-green-600"
        } items-center text-white leading-none rounded-lg flex lg:inline-flex shadow-2xl max-w-md`}
        role='alert'
      >
        <p
          className={`flex rounded-full ${
            type === "danger" ? "bg-red-500" : "bg-green-500"
          } uppercase px-3 py-1 text-xs font-semibold mr-3`}
        >
          {type === "danger" ? "Failed" : "Success"}
        </p>
        <p className='mr-2 text-left font-medium text-white'>{text}</p>
      </div>
    </div>
  );
};

export default Alert;
