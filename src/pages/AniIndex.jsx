import { AniHero } from '../cmps/AniHero'
import { AniProjects } from '../cmps/AniProjects'
import { AniTech } from '../cmps/AniTech'

export function AniIndex() {
  return (
    <section>
      <AniHero />
      <AniTech />
      <AniProjects />
    </section>
  )
}
