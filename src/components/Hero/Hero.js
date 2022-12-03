import heroImg from '../../photo1.png'
import designerImg from '../../photo2.png'
const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-heading">
        <h1>Modern interior</h1>
        <p>
          A full-Service residential & commercial interior design and staging
          company offering professional organizing & eco-services.
        </p>
        <button className="cta">read more</button>
      </div>
      <img src={heroImg} alt="" />
      <div className="designer">
        <div className="profile">
          <img src={designerImg} alt="" />
          <div className="info">
            <span className="name">Aliza Webber</span>
            <span className="job">Interior Designer</span>
          </div>
        </div>
        <h4>Designed in 2022 by Aliza Webber</h4>
      </div>
    </section>
  )
}

export default Hero
