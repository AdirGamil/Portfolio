import { TypeAnimation } from 'react-type-animation'

export function AniHero() {
  return (
    <section className="hero-container" id='hero'>
      <div className="hero-txt">
        <h1 className="hero-h1">
          Hi 👋, My name is <span className="fullname">Adir Gamil</span>, I'm a{' '}
          <TypeAnimation
            sequence={[
              'Full Stack Developer', // Types 'Full Stack Developer'
              2000, // Waits 2 seconds
              'Frontend Specialist', // Deletes 'Full Stack Developer' and types 'Frontend Specialist'
              2000, // Waits 2 seconds
              'Backend Engineer', // Deletes 'Frontend Specialist' and types 'Backend Engineer'
              2000, // Waits 2 seconds
              'DevOps Enthusiast', // Deletes 'Backend Engineer' and types 'DevOps Enthusiast'
              2000, // Waits 2 seconds
              'Full Stack Developer', // Returns to 'Full Stack Developer'
              2000, // Waits 2 seconds
            ]}
            wrapper="span"
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="hero-img">
        <img
        className='adir-hero-img'
          src="https://randomuser.me/api/portraits/men/23.jpg"
          alt="Adir profile img"
        />
      </div>

    </section>
  )
}
