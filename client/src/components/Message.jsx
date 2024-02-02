/* eslint-disable react/prop-types */
const Message = ({ children, color }) => {
  return (
    <p
      className={
        color === "red"
          ? "text-[0.7rem] text-red-600 font-extralight"
          : color === "green"
          ? "text-[0.7rem] text-green-500 font-extralight"
          : ""
      }
    >
      {children}
    </p>
  );
};

export default Message;
