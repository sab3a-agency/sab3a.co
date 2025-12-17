"use client";

export default function ImgesSection({ images }) {
  // Check if images are loading (e.g., the images array is empty or null)
  const isLoading = !images || images.length === 0;

  return (
    <section className="ImgesSection mt-80">
      <div className="wrapperImg d-flex flex-column justify-content-center">
        {isLoading ? (
          // Display skeleton loaders if images are loading
          <>
            {[...Array(3)].map((_, index) => (
              <div key={index} className="imgWrapper">
                <div
                  className="skeleton-loader image"
                  style={{ height: 400, marginBottom: "20px" }}
                ></div>
              </div>
            ))}
          </>
        ) : (
          // Display images once they are loaded
          images.map((imgSrc, index) => (
            <div key={imgSrc + "_" + index} className="imgWrapper">
              <img
                loading="lazy"
                src={imgSrc}
                alt="adv_img"
                className="advimg"
                onError={(e) => {
                  e.currentTarget.src = "../img/LoagingState.png";
                  e.currentTarget.style.objectFit = "contain";
                }}
              />
            </div>
          ))
        )}
      </div>
    </section>
  );
}
