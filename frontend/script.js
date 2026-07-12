/*
  Tacolicious Sisters script
  This file keeps the future third-party ordering link in one place.
  When the restaurant has an ordering provider, update ORDER_URL below.
*/

// Replace "#" with the real third-party ordering link when it is ready.
const ORDER_URL = "#";

// This message appears only while the ordering link is still a placeholder.
const ORDER_NOT_READY_MESSAGE =
  "Orden en linea pendiente. Online ordering is coming soon.";

// Find every button with data-order-button so all order buttons behave the same way.
const orderButtons = document.querySelectorAll("[data-order-button]");

// Attach one click handler to each order button.
orderButtons.forEach((button) => {
  button.addEventListener("click", () => {
    /*
      If ORDER_URL is still "#", keep the visitor on the page and show a friendly
      message. Once a real URL is added, the button opens it in a new browser tab.
    */
    if (ORDER_URL === "#") {
      window.alert(ORDER_NOT_READY_MESSAGE);
      return;
    }

    // Open third-party ordering in a new tab so this website remains available.
    window.open(ORDER_URL, "_blank", "noopener,noreferrer");
  });
});
