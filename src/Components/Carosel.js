import { useState, useEffect } from "react";
const Carosel = () => {
  const [atciveItem, setActiveItem] = useState(0);
  const ListOfImages = [
    {
      id: "List 1",
      title: "Parrot",
      image:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Bed/1.png",
    },
    {
      id: "List 2",
      title: "Flower",
      image:
        "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/1.png",
    },
    {
      id: "List 3",
      title: "Leaf",
      image:
        "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/1.png",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      handleNextButton();
    }, 5000);
  });
  const handlePrevButton = () => {
    if (atciveItem == 0) {
      setActiveItem(ListOfImages.length - 1);
    } else {
      setActiveItem((atciveItem) => atciveItem - 1);
    }
  };
  const handleNextButton = () => {
    if (atciveItem == ListOfImages.length - 1) {
      setActiveItem(0);
    } else {
      setActiveItem((atciveItem) => atciveItem + 1);
    }
  };
  return (
    <div className="list Of Items">
      <div className="carosel">
        <div>
          <img
            className="Carosel_Image"
            src={ListOfImages[atciveItem].image}
            alt={ListOfImages[atciveItem].title}
            width={"200px"}
            height={"100px"}
          />
          <p>{ListOfImages[atciveItem].id}</p>
        </div>
        <button
          type="button"
          onClick={handlePrevButton}
          style={{ marginRight: "10px" }}
        >
          Prev
        </button>
        <button type="button" onClick={handleNextButton}>
          Next
        </button>
      </div>
    </div>
  );
};
export default Carosel;
