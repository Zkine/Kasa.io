import Collapse from "../components/collapse";
import ImgAbout from "../assets/ImgAbout.png";
import Banner from "../components/banner";
import "../styles/main.scss";

function About() {
  const titre = {
    fiabilité: "Fiabilité",
    respect: "Respect",
    service: "Service",
    sécurité: "Sécurité",
  };

  const description = {
    fiabilité:
      "Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.",
    respect:
      "La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.",
    service:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N’hésitez pas à nous contacter si vous avez la moindre question.",
    sécurité:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l’hôte qu’au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  };

  return (
    <main>
      <Banner src={ImgAbout} alt="Très belle montagne">
        {/* <div className="conteneurabout__conteneurimg"> */}
        {/* <img
          src={ImgAbout}
          alt="Très belle montagne"
          className="conteneurabout__img"
        /> */}
        {/* </div> */}
      </Banner>
      <section className="conteneuraboutcollapse">
        <Collapse
          titre={titre.fiabilité}
          description={
            <p className="collapse_paragraphe">{description.fiabilité}</p>
          }
        />
        <Collapse
          titre={titre.respect}
          description={
            <p className="collapse_paragraphe">{description.respect}</p>
          }
        />
        <Collapse
          titre={titre.service}
          description={
            <p className="collapse_paragraphe">{description.service}</p>
          }
        />
        <Collapse
          titre={titre.sécurité}
          description={
            <p className="collapse_paragraphe">{description.sécurité}</p>
          }
        />
      </section>
    </main>
  );
}

export default About;
