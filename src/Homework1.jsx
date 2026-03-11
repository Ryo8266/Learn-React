import { useState } from 'react'

function Homework1() {
  //Bài 1
  const [isLiked, setIsLiked] = useState(false)
  const [likeCount, setLikeCount] = useState(100)

  const handleLike = () => {
    if (!isLiked) {
      setIsLiked(true)
      setLikeCount(likeCount + 1)
    }
    else {
      setIsLiked(false)
      setLikeCount(likeCount - 1)
    }
  }

  //Bài 2
  //Cách 1
  const [activeTab, setActiveTab] = useState(0);
  const tabsData = [
    { id: 0, title: 'Mô tả', content: 'Đây là nội dung Mô tả' },
    { id: 1, title: 'Đánh giá', content: 'Đây là nội dung Đánh giá' },
    { id: 2, title: 'Bảo hành', content: 'Đây là nội dung Bảo hành' }
  ];

  //Cách 2
  const [currentTab, setCurrentTab] = useState(1);
  const handleClickTab = (tab) => {
    setCurrentTab(tab)
  }

  //Bài 3
  //Cách 1
  const [rating, setRating] = useState(0)
  const stars = [1, 2, 3, 4, 5]
  const [hover, setHover] = useState(0)

  //Cách 2
  const [currentStar, setCurrentStar] = useState(0);
  const handleClickStar = (starNumber) => {
    setCurrentStar(starNumber)
  }

  return (
    <>
      {/* Bai 1 */}
      <div>
        <p>Số lượng lượt thích: {likeCount}</p>
        <button
          onClick={handleLike}
          style={{
            backgroundColor: isLiked ? 'blue' : 'white',
            color: isLiked ? 'white' : 'black'
          }}>Thích</button>
      </div>

      {/* Bai 2 */}
      {/* Cach 1 */}
      <div>
        <div>
          {tabsData.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(index)}
              style={{
                backgroundColor: activeTab === index ? 'black' : 'white',
                color: activeTab === index ? 'pink' : 'black'
              }}
            >
              {tab.title}
            </button>
          ))}
        </div>

        <div>
          <p>{tabsData[activeTab].content}</p>
        </div>
      </div>

      {/* Cách 2 */}
      <div>
        <button onClick={() => handleClickTab(1)} style={{ color: currentTab == 1 ? 'red' : 'black' }}>Mô tả</button>
        <button onClick={() => handleClickTab(2)} style={{ color: currentTab == 2 ? 'red' : 'black' }}>Đánh giá</button>
        <button onClick={() => handleClickTab(3)} style={{ color: currentTab == 3 ? 'red' : 'black' }}>Bảo hành</button>
      </div>

      <div>
        {currentTab === 1 && "Đây là nội dung Mô tả"}
        {currentTab === 2 && "Đây là nội dung Đánh giá"}
        {currentTab === 3 && "Đây là nội dung Đánh giá"}
      </div>

      {/* Bai 3 */}
      {/* Cách 1 */}
      <div>
        <div onMouseLeave={() => setHover(0)}>
          {stars.map((star) => (
            <i
              key={star}
              className="fa-solid fa-star"
              onClick={() => setRating(star)}
              onMouseEnter={() => setHover(star)}
              style={{
                cursor: 'pointer',
                color: star <= (hover || rating) ? '#ffd700' : '#e4e5e9',
                transition: 'color 0.2s ease-in-out'
              }}
            ></i>
          ))}</div>
      </div >

      {/* Cách 2 */}
      <div>
        <span onClick={() => handleClickStar(1)} style={{ color: currentStar >= 1 ? "yellow" : currentStar === 0 ? "black" : "gray" }}><i className="fa-solid fa-star"></i></span>
        <span onClick={() => handleClickStar(2)} style={{ color: currentStar >= 2 ? "yellow" : currentStar === 0 ? "black" : "gray" }}><i className="fa-solid fa-star"></i></span>
        <span onClick={() => handleClickStar(3)} style={{ color: currentStar >= 3 ? "yellow" : currentStar === 0 ? "black" : "gray" }}><i className="fa-solid fa-star"></i></span>
        <span onClick={() => handleClickStar(4)} style={{ color: currentStar >= 4 ? "yellow" : currentStar === 0 ? "black" : "gray" }}><i className="fa-solid fa-star"></i></span>
        <span onClick={() => handleClickStar(5)} style={{ color: currentStar >= 5 ? "yellow" : currentStar === 0 ? "black" : "gray" }}><i className="fa-solid fa-star"></i></span>
      </div>
    </>
  )
}

export default Homework1
