import {
  faFacebook,
  faGithub,
  faLinkedin,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mt-auto p-5 flex items-center justify-center">
      <div className="flex flex-col items-center justify-center">
        <div className="flex items-center gap-2">
          <Link href="/" legacyBehavior>
            <FontAwesomeIcon
              icon={faEnvelope}
              className="text-gray-600 hover:text-sky-600"
            />
          </Link>
          <Link href="/" legacyBehavior>
            <FontAwesomeIcon
              icon={faGithub}
              className="text-gray-600 hover:text-sky-600"
            />
          </Link>
          <Link href="/" legacyBehavior>
            <FontAwesomeIcon
              icon={faFacebook}
              className="text-gray-600 hover:text-sky-600"
            />
          </Link>
          <Link href="/" legacyBehavior>
            <FontAwesomeIcon
              icon={faYoutube}
              className="text-gray-600 hover:text-sky-600"
            />
          </Link>
          <Link href="/" legacyBehavior>
            <FontAwesomeIcon
              icon={faLinkedin}
              className="text-gray-600 hover:text-sky-600"
            />
          </Link>
          <Link href="/" legacyBehavior>
            <FontAwesomeIcon
              icon={faTwitter}
              className="text-gray-600 hover:text-sky-600"
            />
          </Link>
        </div>
        <div>
          Copyright &copy; 2023 -{" "}
          <Link href="/" className="text-sky-600 font-bold">
            Viper Code
          </Link>
        </div>
      </div>
    </footer>
  );
}
