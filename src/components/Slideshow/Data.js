import { v4 as uuidv4 } from "uuid";
import img1 from './Imgs/img1.jpeg';
import img2 from './Imgs/img2.jpeg';
import img3 from './Imgs/img3.jpeg';
import img4 from './Imgs/img4.jpeg';
import img5 from './Imgs/img5.jpeg';
import img6 from './Imgs/img6.jpeg';
import img7 from './Imgs/img7.jpeg';
import img8 from './Imgs/img8.jpeg';
import img9 from './Imgs/img9.jpeg';

const Data = [
  {
    id: uuidv4(),
    image: `${img1}`,
    title: "Rome, Italy",
    link: "https://en.wikipedia.org/wiki/Rome",
    price: "1800$"
  },
  {
    id: uuidv4(),
    image: `${img2}`,
    title: "Neuschwanstein Castle, Germany",
    link: "https://en.wikipedia.org/wiki/Neuschwanstein_Castle",
    price: "1200$"
  },
  {
    id: uuidv4(),
    image: `${img3}`,
    title: "Cairo, Egypt",
    subTitle: "Cairo",
    link: "https://en.wikipedia.org/wiki/Cairo",
    price: "700$"
  },
  {
    id: uuidv4(),
    image: `${img4}`,
    title: "Bali, Indonesia",
    link: "link: https://en.wikipedia.org/wiki/Bali",
    price: "1500$"
  },
  {
    id: uuidv4(),
    image: `${img5}`,
    title: "Dubai, United Arab Emirates",
    link: "https://google.com",
    price: "3000$"
  },
  {
    id: uuidv4(),
    image: `${img6}`,
    title: "Tromso, Norway",
    link: "https://youtube.com",
    price: "1000$"
  },
  {
    id: uuidv4(),
    image: `${img7}`,
    title: "Paris, France",
    link: "https://en.wikipedia.org/wiki/Paris",
    price: "1300$"
  },
  {
    id: uuidv4(),
    image: `${img9}`,
    title: "Amsterdam, Netherlands",
    link: "https://en.wikipedia.org/wiki/Troms%C3%B8",
    price: "2000$"
  },
  {
    id: uuidv4(),
    image: `${img8}`,
    title: "Athens, Greece",
    link: "https://en.wikipedia.org/wiki/Athens",
    price: "1000$"
  },
];

export default Data;
