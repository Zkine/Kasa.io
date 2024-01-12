import "../styles/main.scss";

function Banner({ src, alt, children }) {
  return (
    <section>
      <div className="banner">
        {children}
        <img src={src} alt={alt} className="banner__img" />
      </div>
    </section>
  );
}

export default Banner;
