export const businessContact = {
  email: "info@omcreativos.com",
  phoneDisplay: "+54 3487 477269",
  whatsappNumber: "543487477269",
};

export function buildWhatsAppUrl(message) {
  return `https://wa.me/${businessContact.whatsappNumber}?text=${encodeURIComponent(message)}`;
}

export function buildEmailUrl(subject, body = "") {
  const query = new URLSearchParams({ subject });

  if (body) {
    query.set("body", body);
  }

  return `mailto:${businessContact.email}?${query.toString()}`;
}
