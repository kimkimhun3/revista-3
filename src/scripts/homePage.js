function handlePageLoad() {
  const imageElements = Array.from(document.querySelectorAll("#homepage"));
  console.log("HELP");
  //console.log("Selectd Post: ", selectedPost);

  imageElements.forEach((element) => {
    try {
      // Fetching data from attributes
      const images = JSON.parse(element.dataset.images);
      const alt = JSON.parse(element.dataset.alt);
      const urls = JSON.parse(element.dataset.urls);
      const width = JSON.parse(element.dataset.width);
      const height = JSON.parse(element.dataset.height);

      // Creating an array of items with image data
      const items = images.large.map((_, index) => ({
        image: {
          large: images.large[index],
          medium: images.medium[index],
          small: images.small[index],
        },
        alt: alt[index],
        url: urls[index],
        width,
        height,
      }));

      // Shuffling the items array (Fisher-Yates algorithm)
      for (let i = items.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [items[i], items[j]] = [items[j], items[i]];
      }

      // Selecting the first post in the shuffled array
      const firstItem = items[0];

      // Grabbing the image and anchor elements
      const imgElement = element.querySelector("img");
      const sourceLarge = element.querySelector("source[data-srcset-large]");
      const sourceMedium = element.querySelector("source[data-srcset-medium]");
      const anchorElement = element.querySelector("a");

      if (imgElement && sourceLarge && sourceMedium && anchorElement) {
        // Assigning sources for images
        sourceLarge.srcset = firstItem.image.large;
        sourceMedium.srcset = firstItem.image.medium;
        imgElement.src = firstItem.image.small;
        imgElement.srcset = firstItem.image.small;

        // Assigning alt text and dimensions
        imgElement.alt = firstItem.alt;
        imgElement.width = firstItem.width.small; // This can be adjusted based on the image size
        imgElement.height = firstItem.height.small;

        // Setting the link's href to the selected post
        anchorElement.href = firstItem.url;
        imgElement.classList.remove("hidden");

        // Adding ARIA label for accessibility
        anchorElement.setAttribute("aria-label", `View ${firstItem.alt}`);
      } else {
        console.warn("Missing elements in the homepage layout.");
      }
    } catch (error) {
      console.error("Error processing homepage data:", error);
    }
  });
}

// Run the function on page load
document.addEventListener("astro:page-load", handlePageLoad);
