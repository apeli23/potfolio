import { useState } from 'react';
import './works.scss';

export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: '1',
      icon: './assets/mobile.png',
      title: 'Web developement',
      desc: 'Developing websites for business operations ',
      img: 'https://res.cloudinary.com/dogjmmett/image/upload/v1661837361/ui_ao5593.png',
      link: 'https://nextjsecommerceproject.vercel.app/'
    },
    {
      id: '2',
      icon: './assets/writing.png',
      title: 'Technical Writing',
      desc: 'Writing technical articles in software developement topics',
      img: 'https://res.cloudinary.com/dogjmmett/image/upload/v1662973765/techwrite_h3zi8l.jpg',
      link: ''
    },
    {
      id: '3',
      icon: 'https://res.cloudinary.com/dogjmmett/image/upload/v1662984894/icon_h7brju.webp',
      title: 'Gaming services',
      desc: 'Co-founder Game Knights Arcade for gaming services at Nairobi, Kenya.',
      img: 'https://res.cloudinary.com/dogjmmett/image/upload/v1662969402/Screenshot_2022-09-12_at_10.56.28_k3l2eg.png',
      link: 'https://emmanugalleries.pixieset.com/gameknightsfootagesday1/'
    },
  ];

  const handleClick = (way) => {
    way === 'left'
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <a href={d.link} className="link">
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                   
                </div>
              </div>
              <div className="right">
                <img
                height="450"
                width='450'
                  src={d.img}
                  alt=""
                />
              </div>
            </div>
          </div>
          </a>
        ))}
      </div>
      <img
        src="assets/arrow.png"
        className="arrow left"
        alt=""
        onClick={() => handleClick('left')}
      />
      <img
        src="assets/arrow.png"
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
    </div>
  );
}
