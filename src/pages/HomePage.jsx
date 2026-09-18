import { Link } from 'react-router-dom'
import heroImg from '../assets/hero.png'
import lifestyleImg from '../assets/lifestyle.png'
import healthImg from '../assets/health.png'
import relaxationImg from '../assets/relaxation.png'
import swearlImg from '../assets/swearl.png'
import grayImg from '../assets/gray.png'
import lifestyleIcon from '../assets/lifestyle_icon.png'
import healthIcon from '../assets/health_icon.png'
import relaxationIcon from '../assets/relaxation_icon.png'
import './HomePage.css'

export default function HomePage() {
  const scrollToLifestyle = () => {
    document.getElementById('lifestyle')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="home hero">
      {/* Hero — matches homepage.html */}
      <div className="home-hero-wrap">
        <div className="container home-hero-container">
          <div className="circle" aria-hidden="true" />
          <div className="content mb-5">
            <div className="header title my-5">A safe space for your mind and soul</div>
            <button
              type="button"
              className="more_button my-5 mx-auto start"
              onClick={scrollToLifestyle}
            >
              start here
            </button>
            <div className="image-container py-5 my-5">
              <img src={heroImg} alt="Relaxation Image" width="90%" />
            </div>
          </div>
        </div>
      </div>

      {/* Lifestyle section */}
      <div className="container-fluid relative index5 py-5 px-0 mx-0 first" id="lifestyle">
        <div className="circle_2" aria-hidden="true" />
        <img className="swearl" src={swearlImg} alt="" width="90%" aria-hidden="true" />

        <div className="container relative index-2">
          <div className="row g-5 py-4 align-items-center">
            <div className="col-12 col-md-6 ps-3">
              <img className="category-images" src={lifestyleImg} alt="Lifestyle" width="100%" />
            </div>
            <div className="col-12 col-md-6 ps-3 px-lg-5">
              <div
                className="icon-category lifestyle_icon"
                style={{ backgroundImage: `url(${lifestyleIcon})` }}
              />
              <div className="title pt-3">Lifestyle</div>
              <div className="basic_text my-5">
                Welcome to our Lifestyle section, where we explore the intricate
                connection between the way we live and our mental well-being. Here,
                you&apos;ll find valuable insights, practical tips, and inspiring
                stories to help you cultivate a balanced and fulfilling life.
              </div>
            </div>
            <div className="col-12 mx-auto my-5">
              <Link to="/lifestyle" className="moreButton">
                More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Health section */}
      <div className="container-fluid relative index5 py-5 px-0 mx-0 second">
        <div className="circle_3" aria-hidden="true" />
        <img className="gray" src={grayImg} alt="" width="90%" aria-hidden="true" />

        <div className="container">
          <div className="row g-5 py-4 align-items-center">
            <div className="col-12 col-md-6 ps-3 px-lg-5">
              <div
                className="icon-category health_icon"
                style={{ backgroundImage: `url(${healthIcon})` }}
              />
              <div className="title pt-3">Health</div>
              <div className="basic_text my-5">
                Discover valuable insights, practical tips, and inspiring stories
                to help you achieve optimal health. From nutrition and exercise to
                sleep and preventive care, we provide the tools and knowledge you
                need to maintain a healthy body and mind.
              </div>
            </div>
            <div className="col-12 col-md-6 ps-3">
              <img className="category-images" src={healthImg} alt="Health" width="100%" />
            </div>
            <div className="col-12 mx-auto my-5">
              <Link to="/health" className="moreButton">
                More
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Relaxation section */}
      <div className="container-fluid relative index5 py-5 px-0 mx-0 third">
        <div className="container">
          <div className="row g-5 py-4 align-items-center">
            <div className="col-12 col-md-6 ps-3">
              <img
                className="category-images"
                src={relaxationImg}
                alt="Relaxation"
                width="100%"
              />
            </div>
            <div className="col-12 col-md-6 ps-3 px-lg-5">
              <div
                className="icon-category relaxation_icon"
                style={{ backgroundImage: `url(${relaxationIcon})` }}
              />
              <div className="title pt-3">Relaxation</div>
              <div className="basic_text my-5">
                Discover new ways to unwind and calm your mind. Engage in
                insightful conversations that guide you toward finding what truly
                brings peace and balance to your everyday life.
              </div>
            </div>
            <div className="col-12 mx-auto my-5">
              <Link to="/relaxation" className="moreButton">
                More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
