import Collapse from "../components/collapse";
import JsnAbout from "../data/dataAbout.json";
import ImgAbout from "../assets/ImgAbout.png";
import Banner from "../components/banner";
import "../styles/main.scss";

function About() {
  return (
    <main>
      <Banner src={ImgAbout} alt="Très belle montagne"></Banner>
      {JsnAbout.map((el) => (
        <section className="conteneuraboutcollapse" key={el.titre.id}>
          <Collapse
            titre={el.titre.fiabilité}
            description={
              <p className="collapse_paragraphe">{el.description.fiabilité}</p>
            }
          />
          <Collapse
            titre={el.titre.respect}
            description={
              <p className="collapse_paragraphe">{el.description.respect}</p>
            }
          />
          <Collapse
            titre={el.titre.service}
            description={
              <p className="collapse_paragraphe">{el.description.service}</p>
            }
          />
          <Collapse
            titre={el.titre.sécurité}
            description={
              <p className="collapse_paragraphe">{el.description.sécurité}</p>
            }
          />
        </section>
      ))}
    </main>
  );
}

export default About;
