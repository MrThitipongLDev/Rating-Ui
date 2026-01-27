import Rating from "./components/Rating";
const App = () => {
  return (
    <div>
      <Rating
        heading="asdasd"
        color="red"
        feedbackMessages={["เกลียดสุด", "เกลียด", "เฉยๆ", "ชอบ", "ชอบมากๆ"]}
      />

      <Rating />
    </div>
  );
};

export default App;
<div>Rate Your Experience</div>;
