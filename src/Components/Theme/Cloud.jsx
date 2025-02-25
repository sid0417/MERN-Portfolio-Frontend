import '../../index.css'

function Cloud() {
  return (
    <>
      <div id="clouds" className="relative">
        <img
          src="/cloud.png"
          alt="Cloud 1"
          className="absolute w-[25%] h-auto left-[80%] top-[5%] animate-cloud-1"
        />
        <img
          src="/cloud.png"
          alt="Cloud 2"
          className="absolute w-[18%] h-auto left-[40%] top-[5%] animate-cloud-2"
        />
        <img
          src="/cloud.png"
          alt="Cloud 2"
          className="absolute w-[18%] h-auto left-[50%] top-[5%] animate-cloud-2"
        />
        <img
          src="/cloud.png"
          alt="Cloud 3"
          className="absolute w-[25%] h-auto left-[5%] top-[5%] animate-cloud-3"
        />
      </div>
    </>
  );
}

export default Cloud;
