
export function getStrapiURL(path) {
  return `${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"
    }${path}`;
}

// Helper to make GET requests to Strapi
export async function fetchAPI(path) {
  const requestUrl = getStrapiURL(path);
  const response = await fetch(requestUrl);
  const data = await response.json();
  return data;
}

export async function getCategories() {
  const categories = await fetchAPI("/categories");
  return categories;
}

export async function getCarousels() {
  const carousels = await fetchAPI(`/carousels`);
  return carousels;
}

export async function getTestimonials() {
  const testimonials = await fetchAPI(`/testimonials`);
  return testimonials;
}

export async function getArtwork() {
  const artworks = await fetchAPI("/products");
  return artworks;
}

export async function postMessages(postData) {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  };
  const fetchResponse = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}/messages`, settings);
  const data = await fetchResponse.json();
  return data;
}

export async function postEnquiries(postData) {
  const settings = {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(postData)
  };
  const fetchResponse = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_API_URL || "http://localhost:1337"}/enquiries`, settings);
  const data = await fetchResponse.json();
  return data;
}