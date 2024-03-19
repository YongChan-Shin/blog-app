import { useState } from "react";
import { Link } from "react-router-dom";

interface PostListProps {
  hasNavigation?: boolean
}

type TabType = "all" | "my";

export default function PostList({ hasNavigation = true }: PostListProps) {
  const [activeTab, setActiveTab] = useState<TabType>("all");
  return (
    <>
      {hasNavigation && (
        <div className="post__navigation">
          <div role="presentation" onClick={() => setActiveTab("all")} className={activeTab === 'all' ? 'post__navigation--active' : ''}>전체</div>
          <div role="presentation" onClick={() => setActiveTab("my")} className={activeTab === 'my' ? 'post__navigation--active' : ''}>나의 글</div>
        </div>
      )}
      <div className="post__list">
        {
          [...Array(10)].map((e, index) => {
            return (
              <div key={index} className="post__box">
                <Link to={`/posts/${index}`}>
                  <div className="post__profile-box">
                    <div className="post__profile" />
                    <div className="post__author-name">Shong</div>
                    <div className="post__date">2023.07.08 토요일</div>
                  </div>
                  <div className="post__title">게시글</div>
                  <div className="post__text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum accusamus tempora nam quidem laudantium unde laboriosam, tempore similique vero doloremque aspernatur voluptatum porro nulla veniam. Debitis ad facilis quae, natus pariatur necessitatibus dolorem enim. Provident, earum vel, incidunt adipisci culpa quae ab, quibusdam impedit error hic cupiditate? Illo, fugit debitis.
                  </div>
                  <div className="post__utils-box">
                    <div className="post__delete">삭제</div>
                    <div className="post__edit">수정</div>
                  </div>
                </Link>
            </div>
            )
          })
        }
      </div>
    </>
  );
}