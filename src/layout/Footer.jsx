import { Link } from 'react-router-dom';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

import {
  PRODUCTS_SECTION,
  BUSINESS_SECTION,
  EDUCATION_SECTION,
  BUSINESS_USECASE_SECTION,
  EDUCATION_USECASE_SECTION,
} from '../footer-data.js';

const FOOTER_PAGE = [
  {
    link: 'Guides',
    direct: 'guides',
  },
  {
    link: 'Help Center',
    direct: 'help-center',
  },
  {
    link: 'Customer Stories',
    direct: 'customer-stories',
  },
  {
    link: 'About Us',
    direct: 'about-us',
  },
  {
    link: 'Contact Us',
    direct: 'contact-us',
  },
];

export default function Footer() {
  return (
    <>
      <footer className="bg-white w-screen p-12">
        <div className="max-container flex items-center gap-12 justify-between border-b-2 pb-8">
          <div className="flex items-center gap-12">
            <Link to="/">
              <img
                src="/testportal-logo-2.svg"
                alt="Testportal Logo"
                width={240}
                height={120}
              />
            </Link>
            <div className="flex text-lg font-semibold gap-12 text-primary max-w-fit">
              {FOOTER_PAGE.map(page => (
                <Link
                  key={page.link}
                  to={`/${page.direct}`}
                  className="hover-text-shadow"
                >
                  {page.link}
                </Link>
              ))}
            </div>
          </div>
          <div className="flex gap-6">
            <a href="https://linkedin.com/testportal">
              <FaLinkedin size={32} />
            </a>
            <a href="https://facebook.com/testportal">
              <FaFacebook size={32} />
            </a>
          </div>
        </div>
        <div className="max-container grid grid-cols-3 mt-12 gap-x-96 gap-y-96 text-lg mb-12">
          <section>
            <p className=" text-gray-400 mb-4">PRODUCT</p>
            {PRODUCTS_SECTION.map(product => (
              <Link
                key={product.title}
                to={`/${product.direct}`}
                className="hover-text-shadow"
              >
                <ul className="pb-3 text-gray-500 font-medium">
                  <li>{product.title}</li>
                </ul>
              </Link>
            ))}
          </section>
          <section>
            <div className="flex flex-col gap-9">
              <div>
                <p className=" text-gray-400 mb-4">FOR BUSINESS</p>
                {BUSINESS_SECTION.map(business => (
                  <Link
                    key={business.title}
                    to={`/${business.direct}`}
                    className="hover-text-shadow"
                  >
                    <ul className="pb-3 text-gray-500 font-medium">
                      <li>{business.title}</li>
                    </ul>
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-gray-400 mb-4">FOR EDUCATION</p>
                {EDUCATION_SECTION.map(education => (
                  <Link
                    key={education.title}
                    to={`/${education.direct}`}
                    className="hover-text-shadow"
                  >
                    <ul className="pb-3 text-gray-500 font-medium">
                      <li>{education.title}</li>
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          </section>
          <section>
            <div className="flex flex-col gap-9">
              <div>
                <p className="text-gray-400 mb-4">BUSINESS USE CASES</p>
                {BUSINESS_USECASE_SECTION.map(business => (
                  <Link
                    key={business.title}
                    to={`/${business.direct}`}
                    className="hover-text-shadow"
                  >
                    <ul className="pb-3 text-gray-500 font-medium">
                      <li>{business.title}</li>
                    </ul>
                  </Link>
                ))}
              </div>
              <div>
                <p className="text-gray-400 mb-4">EDUCATIONAL USE CASES</p>
                {EDUCATION_USECASE_SECTION.map(education => (
                  <Link
                    key={education.title}
                    to={`/${education.direct}`}
                    className="hover-text-shadow"
                  >
                    <ul className="pb-3 text-gray-500 font-medium">
                      <li>{education.title}</li>
                    </ul>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        </div>
        <div className="max-container flex gap-12">
          <div>
            <p className="text-gray-400 font-semibold">
              Copyright <span className="font-bold">&copy;</span> Testportal
              2023
            </p>
          </div>
          <div className="flex gap-6 items-center">
            <div>
              <a href="/privacy-policy">
                <p className="text-gray-400 font-semibold">Privacy Policy</p>
              </a>
            </div>
            <div>
              <img src="/dot.png" alt="dot" />
            </div>
            <div>
              <a href="/terms-conditions">
                <p className="text-gray-400 font-semibold">
                  Terms and Conditions
                </p>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
