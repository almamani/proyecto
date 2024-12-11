import { IProduct } from "@/interfaces/IProduct";

const productsMock: IProduct[] = [
  {
    id: 1,
    name: "MOCK iPhone 11",
    price: 699,
    description:
      "Experience power and elegance with the iPhone 11: capture stunning moments with its dual-camera system, enjoy exceptional performance, and immerse yourself in a brilliant Liquid Retina display. Discover a world of possibilities in the palm of your hand!",
    image: "https://m.media-amazon.com/images/I/51U5mDU1IzL.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    id: 2,
    name: "MOCK MacBook Air",
    price: 999,
    description:
      "Embrace efficiency and sophistication with the MacBook Air: lightweight design meets powerful performance, stunning Retina display brings your work to life, and all-day battery life keeps you productive wherever you go. Elevate your computing experience with the MacBook Air.",
    image:
      "https://locotoo.com/web/image/lot.line.image/734131/image/1920x1920/",
    categoryId: 2,
    stock: 10,
  },
  {
    id: 3,
    name: "MOCK iPad Pro",
    price: 799,
    description:
      "Unleash your creativity and productivity with the iPad Pro: powerful performance, stunning Liquid Retina display, and all-day battery life make the iPad Pro the perfect tool for work and play. Transform your ideas into reality with the iPad Pro.",
    image:
      "https://img.pccomponentes.com/articles/1063/10635741/1469-apple-ipad-pro-2022-129-wifi-256gb-plata.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    id: 4,
    name: "MOCK Apple Watch Series 6",
    price: 399,
    description:
      "Stay connected and healthy with the Apple Watch Series 6: track your workouts, monitor your health, and stay in touch with the people and information you care about most. Experience the future of health and wellness with the Apple Watch Series 6.",
    image:
      "https://ar.oneclickstore.com/wp-content/uploads/2021/01/M00M3LE-A_1.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    id: 5,
    name: "MOCK AirPods Pro",
    price: 249,
    description:
      "Immerse yourself in sound with the AirPods Pro: active noise cancellation, transparency mode, and customizable fit make the AirPods Pro the perfect companion for music, calls, and everything in between. Elevate your audio experience with the AirPods Pro.",
    image:
      "https://www.dastore.pe/cdn/shop/products/RINGKE_ACC_LCAS_APP_MC_Main_1_700x700.jpg?v=1644559015",
    categoryId: 5,
    stock: 10,
  },
  {
    id: 6,
    name: "MOCK HomePod mini",
    price: 99,
    description:
      "Elevate your home audio experience with the HomePod mini: immersive sound, intelligent assistant, and smart home hub make the HomePod mini the perfect addition to your home. Enjoy a world of music, news, and more with the HomePod mini.",
    image: "https://static.cmra.nu/thumb_400/167/1674834384_311.jpg",
    categoryId: 6,
    stock: 10,
  },
];

export default productsMock;
