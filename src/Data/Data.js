import Salad from "../assets/greeksalad.jpg";
import Dessert from "../assets/lemondessert.jpg";
import Bruchetta from "../assets/bruchetta.svg";
import Daniel from "../assets/image-daniel.jpg";
import Jeanette from "../assets/image-jeanette.jpg";
import Jonathan from "../assets/image-jonathan.jpg";
import Kira from "../assets/image-kira.jpg";

export const food = [
  {
    id: 0,
    name: "greek salad",
    price: 12.99,
    image: Salad,
    desc: "The famous greek salad of crispy lettuce, peppers, olives and out Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    id: 1,
    name: "Bruchetta",
    price: 5.99,
    image: Bruchetta,
    desc: "Our Brochette is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    id: 2,
    name: "Lemon Dessert",
    price: 5.0,
    image: Dessert,
    desc: "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
  },
];

export const testimonials = [
  {
    id: 0,
    rating: "⭐⭐⭐⭐⭐",
    image: Daniel,
    name: "daniel",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 1,
    rating: "⭐⭐⭐⭐",
    image: Jeanette,
    name: "jeanette",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 2,
    rating: "⭐⭐⭐⭐⭐",
    image: Jonathan,
    name: "jonathan",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    id: 3,
    rating: "⭐⭐⭐⭐",
    image: Kira,
    name: "kira",
    testimonial:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
];

export const banners = [
  {
    id: 0,
    name: "Table Reservation",
  },
  {
    id: 1,
    name: "About",
  },
  {
    id: 2,
    name: "Menu",
  },
  {
    id: 3,
    name: "Order Online",
  },
  {
    id: 4,
    name: "Login",
  },
];
