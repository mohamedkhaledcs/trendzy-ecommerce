function Message({ type = "info", children }) {
  const base = "px-4 py-2 rounded-lg mb-4 ";
  const styles = {
    info: "bg-blue-100 text-blue-800",
    success: "bg-green-100 text-green-800",
    error: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
  };

  return <div className={base + styles[type]}>{children}</div>;
}

export default Message;
