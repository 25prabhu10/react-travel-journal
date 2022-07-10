import { nanoid } from "nanoid";
import { GiEarthAsiaOceania } from "react-icons/gi";
import "./App.css";
import { Item } from "./components/Item";

function App() {
  const items = [
    {
      id: nanoid(5),
      imgSrc: "https://source.unsplash.com/WLxQvbMyfas",
      place: "Mount Fuji",
      country: "Japan",
      dates: "12 Jan, 2021 - 24 Jan, 2021",
      desc: "Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.",
      link: "https://www.google.com/maps/place/Mount+Fuji,+Kitayama,+Fujinomiya,+Shizuoka+418-0112,+Japan/data=!4m2!3m1!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!5m1!1e4?sa=X&ved=2ahUKEwjg9dCU8dD4AhUIRmwGHZW4DvcQ8gF6BQiRARAB",
    },
    {
      id: nanoid(5),
      imgSrc: "https://source.unsplash.com/JmuyB_LibRo",
      place: "Sydney Opera House",
      country: "Australia",
      dates: "27 May, 2021 - 8 Jun, 2021",
      desc: "The Sydney Opera House is a multi-venue performing arts centre in Sydney. Located on the banks of the Sydney Harbour, it is often regarded as one of the 20th century's most famous and distinctive buildings",
      link: "https://www.google.com/maps/place/Sydney+Opera+House/@-33.8567844,151.2152967,15z/data=!4m2!3m1!1s0x0:0x3133f8d75a1ac251?sa=X&ved=2ahUKEwjbsvql8dD4AhWzZWwGHWDHB-sQ_BJ6BAh9EAU",
    },
    {
      id: nanoid(5),
      imgSrc: "https://source.unsplash.com/3PeSjpLVtLg",
      place: "Geirangerfjord",
      country: "Norway",
      dates: "01 Oct, 2021 - 18 Nov, 2021",
      desc: "The Geiranger Fjord is a fjord in the Sunnmøre region of Møre og Romsdal county, Norway. It is located entirely in the Stranda Municipality.",
      link: "https://www.google.com/maps/place/Geirangerfjord,+Stranda+Municipality,+Norway/data=!4m2!3m1!1s0x46169d427b268c51:0xb8c99540dcc397fe?sa=X&ved=2ahUKEwiemPSr8dD4AhXUTGwGHQCbCHYQ8gF6BAh6EAE",
    },
  ];

  return (
    <div className="app">
      <header>
        <GiEarthAsiaOceania /> my travel journal
      </header>
      <div className="journal">
        {items.map((item) => (
          <Item
            imgSrc={item.imgSrc}
            country={item.country}
            dates={item.dates}
            desc={item.desc}
            place={item.place}
            key={item.id}
            link={item.link}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
