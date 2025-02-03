export default function Breadcumb3({ path }) {
  return (
    <>
      <section className="breadcumb-section mt-10">
        <div className="container">
          <div className="row mt100">
            <div className="col-lg-12">
              <div className="breadcumb-style1">
                <div className="breadcumb-list">
                  {path?.map((item, i) => (
                    <a key={i}>{item}</a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
