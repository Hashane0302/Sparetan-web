import Image from "next/image";

export default function CtaBanner3() {
  return (
    <>
      <section className="p-0">
        <div className="cta-banner mx-auto maxw1600 pt120 pt60-lg pb90 pb60-lg position-relative overflow-hidden mx20-lg">
          <div className="container">
            <div className="row align-items-center">
              <div
                className="col-md-6 col-xl-5 pl30-md pl15-xs wow fadeInRight"
                data-wow-delay="500ms"
              >
                <div className="mb30">
                  <div className="main-title">
                    <h2 className="title">
                      A whole world of freelance
                      <br className="d-none d-lg-block" />
                      talent at your fingertips
                    </h2>
                    <p>
                      Discover the cream of freelancers from all over the world
                      who bring in novelty, skill, and imagination. Sparetan
                      connects you with professionals ready to bring your
                      projects into life, whatever the industry or scale.
                    </p>
                  </div>
                </div>
                <div className="why-chose-list">
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-badge" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Proof of quality</h4>
                      <p className="text mb-0 fz15">
                        Browse portfolios, client reviews, and verified
                        identities. Work confidently,knowing you're hiring top
                        talent.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-money" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">No cost until you hire</h4>
                      <p className="text mb-0 fz15">
                        Browse portfolios, client reviews, and verified
                        identities. Work confidently,knowing you're hiring top
                        talent.
                      </p>
                    </div>
                  </div>
                  <div className="list-one d-flex align-items-start mb30">
                    <span className="list-icon flex-shrink-0 flaticon-security" />
                    <div className="list-content flex-grow-1 ml20">
                      <h4 className="mb-1">Safe and secure</h4>
                      <p className="text mb-0 fz15">
                        Your data and payments are always secure. Your peace of
                        mind is our top priority, with support around the clock.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-md-6 col-xl-6 offset-xl-1 wow fadeInLeft"
                data-wow-delay="500ms"
              >
                <div className="about-img">
                  <Image
                    height={705}
                    width={691}
                    className="w100 h-100"
                    src="/images/about/aboutus-2.png"
                    alt="about 6"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
