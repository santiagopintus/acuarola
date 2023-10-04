/* MP API */
const MP_EP_PROD = "http://localhost:4000";
const MP_EP_DEV = "http://localhost:4000";
const MP_EP =
  process.env.NEXT_PUBLIC_STAGE === "production" ? MP_EP_PROD : MP_EP_DEV;
const createPreferenceEP = `${MP_EP}/create-preference`;
const feedbackEP = `${MP_EP}/feedback`;

/* PRODUCTS API */
const PRODUCTS_EP_PROD = "http://localhost:8000";
const PRODUCTS_EP_DEV = "http://localhost:8000";
const PRODUCTS_EP =
  process.env.NEXT_PUBLIC_STAGE === "production"
    ? PRODUCTS_EP_PROD
    : PRODUCTS_EP_DEV;
const productsURL = `${PRODUCTS_EP}/products`;

export { createPreferenceEP, feedbackEP, productsURL };
