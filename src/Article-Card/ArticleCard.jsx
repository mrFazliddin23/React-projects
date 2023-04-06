import "./ArticleCard.scss";
const ArticleCard = (props) => {
  return (
    <div>
           <div className="article__cards--card1">
                <img className="article__cards--img" src={props.img} alt="designing"/>
                <div className="article__cards--body">
                  <h1 className="article__cards--card1--title">{props.title}</h1>
                  <span className="article__cards--card1--year">{props.span}</span>
                  <span className="article__cards--card1--spn">{props.span2}</span>
                  <p className="article__cards--card1--text">
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor
                    do amet sint. Velit officia consequat duis enim velit
                    mollit. Exercitation veniam consequat sunt nostrud amet.
                  </p>
                </div>
              </div>
    </div>
  )
}

export default ArticleCard