import { useState, useEffect } from "react";
const Carosel = () => {
  const [atciveItem, setActiveItem] = useState(0);
  const ListOfImages = [
    {
      id: "List 1",
      title: "Parrot",
      image: "https://images.app.goo.gl/DLfwXFRBE9BBfRCV9",
    },
    {
      id: "List 2",
      title: "Flower",
      image: "https://images.app.goo.gl/c9v38CXHtCiyjRBZ7",
    },
    {
      id: "List 3",
      title: "Leaf",
      image: "https://images.app.goo.gl/Dsm3apzffPttXFMT8",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      handleNextButton();
    }, 3000);
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
