import { CarouselData } from "../../composables/interfaces/carousel-data";

export default defineEventHandler<CarouselData[]>(() => [
  {
    productName: "HARRY POTTER MAGIC AWAKENED",
    productImage: "https://www.magicawakened.com/images/share.jpg",
    productCode: "HPM01",
  },
  {
    productName: "ASSASSIN'S CREED MIRAGE",
    productImage:
      "https://staticctf.ubisoft.com/J3yJr34U2pZ2Ieem48Dwy9uqj5PNUQTn/4jk9umchC6RomrmUMzJj4k/ae72f547328f84428d4b98a663bceec6/acm-page-meta-960x540.jpg",
    productCode: "ACM01",
  },
]);
