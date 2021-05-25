import {
  FaLinkedin,
  FaFacebookSquare,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa"
import Link from "@components/Link"
import { PortableText } from "@lib/sanity"

function BioCard(props) {
  const { bio, socials } = props
  const serializers = {
    marks: {
      link: ({ children, mark }) => (
        <Link href={mark.href} isExternal={mark.blank ? true : false}>
          {children}
        </Link>
      ),
    },
  }

  return (
    <div className="card-copy">
      <div className="card-content">
        <div className="content">
          <PortableText blocks={bio} serializers={serializers} />
        </div>
        {socials && (
          <div className="social">
            {socials.linkedin && (
              <Link href={socials.linkedin} isExternal>
                <Icon as={FaLinkedin} size="lg" />
              </Link>
            )}
            {socials.twitter && (
              <Link href={socials.twitter} isExternal>
                <Icon as={FaTwitter} size="lg" />
              </Link>
            )}
            {socials.instagram && (
              <Link href={socials.instagram} isExternal>
                <Icon as={FaInstagram} size="lg" />
              </Link>
            )}
            {socials.facebook && (
              <Link href={socials.facebook} isExternal>
                <Icon as={FaFacebookSquare} size="lg" />
              </Link>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default BioCard
