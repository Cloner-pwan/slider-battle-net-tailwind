import logic from "./logic";
import slider from "./slider";
import slides from "./slides";

slider();
slides().then(() => {
  logic();
});
