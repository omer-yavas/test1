const StepEight = ({ prevHandler, nextHandler }) => {
  return (
    <>
      <div className="text-center">
        <i className="fa-solid fa-6x fa-circle-check text-success"></i>
        <h2 className="my-5" style={{ color: "var(--banabi)" }}>
          Başvurunuz alınmıştır.
        </h2>
        <h2>
          Eğitim Uzmanımız
          <br />
          0532 292 31 93
          <br />
          numaramızdan
          <br />
          sizi arayacak.
        </h2>
      </div>
    </>
  );
};

export default StepEight;
