import "../Section-Card/SectionCard.scss";
const SectionCard = (props) => {
  return (
    <div>
      <div className="section__cards--card1">
        <h3 className="section__cards--title">{props.title}</h3>
        <time dateTime="12 Feb 2020" className="section__cards--date">{props.time}</time>
        <span className="section__cards--span">{props.span}</span>
        <p className="section__cards--text">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequat sunt nostrud amet.
        </p>
      </div>
    </div>
  );
};

export default SectionCard;
