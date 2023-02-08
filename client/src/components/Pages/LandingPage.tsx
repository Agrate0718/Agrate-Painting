export default function LandingPage() {
  console.log(process.env.REACT_APP_SERVER_URL);
  return (
    <div>
      <p>Landing Page</p>
      <img src="https://aaaimagebucket.s3.us-east-1.amazonaws.com/2020/04/Emerging-Butterfly-Giclee-745x1024.jpg"></img>
    </div>
  );
}
