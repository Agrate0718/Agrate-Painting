export default function Test() {
  console.log("test page");
  const server = process.env.REACT_APP_SERVER_URL;
  console.log(server);

  return (
    <div>
      <p>Test Page</p>
    </div>
  );
}
