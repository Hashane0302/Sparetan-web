import Image from "next/image";
import Link from "next/link";

export default function About5() {
  return (
    <>
      <section className="our-about pb0 pt60-lg">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-md-6 col-xl-6">
              <div
                className="about-img mb30-sm wow fadeInRight"
                data-wow-delay="300ms"
              >
                <Image
                  height={574}
                  width={691}
                  className="w100 h-100"
                  src="/images/about/aboutus-1.png"
                  alt="about"
                />
              </div>
            </div>
            <div className="col-md-6 col-xl-5 offset-xl-1">
              <div
                className="position-relative wow fadeInLeft"
                data-wow-delay="300ms"
              >
                <h2 className="mb25">
                  Join the World's Best Marketplace for Workers{" "}
                  <br className="d-none d-xl-block" />
                </h2>
                <p className="text mb25">
                  Sparetan is that one marketplace where enterprises and
                  freelancers meet for the making of the future of work. This is
                  a highly reputed platform wherein businesses find their best
                  fit while allowing freelancers to get notifications on
                  projects that would further help them develop themselves
                </p>
                <div className="list-style2">
                  <ul className="mb20">
                    <li>
                      <i className="far fa-check" />
                      Connect to freelancers with proven business experience
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Get matched with the perfect talent by a customer success
                      manager
                    </li>
                    <li>
                      <i className="far fa-check" />
                      Unmatched quality of remote, hybrid, and flexible jobs
                    </li>
                  </ul>
                </div>
                <Link
                  href="/freelancer-single"
                  className="ud-btn btn-thm-border"
                >
                  Find Talent
                  <i className="fal fa-arrow-right-long" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
