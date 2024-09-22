import { TypeAnimation } from 'react-type-animation'

export function AniHero() {
  return (
    <section className="hero-container" id="hero">
      <div className="hero-txt">
        <h1 className="hero-h1">
          Hi 👋, My name is <span className="fullname">Adir Gamil</span>, I'm a{' '}
          <TypeAnimation
            sequence={[
              'Full Stack Developer',
              2000,
              'Lifelong Learner',
              2000,
              'Problem Solver',
              2000,
              'Team Player',
              2000,
              'Creative Thinker',
              2000,
              'Technology Enthusiast',
              2000,
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="hero-img">
        <img
          className="adir-hero-img"
          src="https://res.cloudinary.com/dhweqnxgd/image/upload/v1725202397/be3f5016-b6c7-459a-ad3a-ee9d326a8661_y0orml.jpg"
          alt="Adir profile img"
        />
      </div>
    </section>
  )
}
