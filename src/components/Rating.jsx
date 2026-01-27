import { useState } from "react";
import Button from "./Button";
const Rating = ({
  heading = "หัวข้อกี่ดาว",
  color = "gold",
  feedbackMessages = ["แย่มาก", "แย่", "เฉยๆ", "ดี", "ดีเยี่ยม"],
}) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const stars = Array.from({ length: 5 }, (_, i) => i + 1);

  const handleSubmit = () => {
    if (rating > 0) {
      setSubmitted(true);
    }
  };
  const closeModal = () => {
    setSubmitted(false);
    setRating(0);
    setHover(0);
  };
  return (
    <div className="rating-container">
      <h2>{heading}</h2>
      <p>Rating: {hover}</p>

      <div className="stars">
        {stars.map((star, index) => (
          <span
            onMouseEnter={() => setHover(star)}
            onMouseLeave={() => setHover(null)}
            onClick={() => setRating(star)}
            key={star}
            className={star}
            style={{
              color: star <= (hover || rating) ? color : "#ccc",
            }}
          >
            {"\u2605"}
          </span>
        ))}
      </div>
      {rating > 0 && <p className="feedback">{feedbackMessages[rating - 1]}</p>}

      {/* <button
        className="submit-btn"
        onClick={handleSubmit}
        disabled={rating === 0}
      >
        ยืนยัน
      </button> */}

      <Button
        className="submit-btn"
        disabled={rating === 0}
        onClick={handleSubmit}
      />

      {submitted && (
        <div>
          <div className="modal-overlay">
            <div className="modal">
              <h2>ขอบคุณ</h2>
              <p>
                คุณให้ดาวพวกเรา {rating} จาก {rating > 1 ? "s" : ""}
              </p>
              <button className="close-btn" onClick={closeModal}>
                ปิด
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Rating;
