import { mountCatalog } from "../catalog/catalog.js";
import { mountCart } from "../cart/cart.js";

window.onload = () => {
  mountCatalog("catalog");
  mountCart("cart");
};