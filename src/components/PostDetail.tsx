import { Link } from "react-router-dom";

export default function PostDetail() {
  return (
    <>
      <div className="post__detail">
        <div className="post__box">
          <div className="post__title">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur, nisi.
          </div>
          <div className="post__profile-box">
            <div className="post__profile" />
            <div className="post__author-name">Shong</div>
            <div className="post__date">2023.07.08 토요일</div>
          </div>
          <div className="post__utils-box">
            <div className="post__delete">삭제</div>
            <div className="post__edit">
              <Link to="/posts/edit/1">수정</Link>
            </div>
          </div>
          <div className="post__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus tempora nam quidem laudantium unde laboriosam, tempore similique vero doloremque aspernatur voluptatum porro nulla veniam. Debitis ad facilis quae, natus pariatur necessitatibus dolorem enim. Provident, earum vel, incidunt adipisci culpa quae ab, quibusdam impedit error hic cupiditate? Illo, fugit debitis.
          </div>
        </div>
      </div>
    </>
  )
}