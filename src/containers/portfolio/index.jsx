import React from "react";
import PageHeaderContent from "../../components/pageHeaderContent";
import { BsInfoCircleFill } from "react-icons/bs";
import ImageOne from "../../images/image1.jpg";
import ImageTwo from "../../images/image2.jpg";
import ImageThree from "../../images/image3.jpg";
import ImageFour from "../../images/image4.jpg";
import ImageFourth from "../../images/Capture.JPG";
import Image12 from "../../images/Capture1.JPG";
import Image14 from "../../images/Capture14.JPG";
import Image13 from "../../images/Capture13.JPG";
import ImageFive from "../../images/image5.jpg";
import "./styles.scss";
import { useState } from "react";

const portfolioData = [
  {
    id: 2,
    name: "Online System Reservations ",
    image: ImageOne,
    link: "https://github.com/Albulenalala/drTech",
  },
  {
    id: 3,
    name: "Winery Website",
    link: "https://github.com/Albulenalala/winery",
    image: ImageTwo,
  },
  {
    id: 3,
    name: "My WebPortfolio",
    image: ImageFive,
    link: "/",
  },
  {
    id: 3,
    name: "Traveling WP Site",
    image: Image12,
    link: "/",
  },
  {
    id: 2,
    name: "Hostel Sytem Managment",
    image: ImageThree,
    link: "https://github.com/Albulenalala",
  },
  {
    id: 2,
    name: "WP Medical Website",
    image: Image13,
    link: "https://github.com/Albulenalala",
  },
  {
    id: 2,
    name: "Progress Bar",
    image: ImageFour,
    link: "https://github.com/Albulenalala/timer",
  },
  {
    id: 2,
    name: "Calculator",
    image: ImageFourth,
    link: "https://github.com/Albulenalala/calculator",
  },
  {
    id: 2,
    name: "Working on something new",
    image: Image14,
    link: "https://github.com/Albulenalala/calculator",
  },

  

];

const filterData = [
  {
    filterId: 1,
    label: "All",
  },
  {
    filterId: 2,
    label: "Developement",
  },
  {
    filterId: 3,
    label: "Design",
  },
];

const Portfolio = () => {
  const [filteredvalue, setFilteredValue] = useState(1);
  const [hoveredValue, setHoveredValue] = useState(null);

  function handleFilter(currentId) {
    setFilteredValue(currentId);
  }

  function handleHover(index) {
    setHoveredValue(index);
  }

  console.log("====================================");
  console.log(hoveredValue);
  console.log("====================================");

  const filteredItems =
    filteredvalue === 1
      ? portfolioData
      : portfolioData.filter((item) => item.id === filteredvalue);

  console.log(filteredItems);

  return (
    <section id="portfolio" className="portfolio">
      <PageHeaderContent
        headerText="My Portfolio"
        icon={<BsInfoCircleFill size={40} />}
      />
      <div className="portfolio__content">
        <ul className="portfolio__content__filter">
          {filterData.map((item) => (
            <li
              className={item.filterId === filteredvalue ? "active" : ""}
              onClick={() => handleFilter(item.filterId)}
              key={item.filterId}
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="portfolio__content__cards">
          {filteredItems.map((item, index) => (
            <div
              className="portfolio__content__cards__item"
              key={`cardItem${item.name.trim()}`}
              onMouseEnter={() => handleHover(index)}
              onMouseLeave={() => handleHover(null)}
            >
              <div className="portfolio__content__cards__item__img-wrapper">
                <a>
                  <img alt="dummy data" src={item.image} />
                </a>
              </div>
              <div className="overlay">
                {index === hoveredValue && (
                  <div>
                    <p>{item.name}</p>
                    <button>Visit</button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Portfolio;
