

function Leaf() {
  return (
    <>
      <img
          src="/leaf-first.png"
          id="leaf"
          alt="Leaf"
          className="absolute top-0 sm:top-[-5%] sm:left-24  w-full pointer-events-none"
        />
        <img
          src="/leaf-rotate.png"
          id="leaf-rotate"
          alt="Leaf"
          className="absolute top-[50%] sm:top-4 sm:left-0 w-full pointer-events-none"
        />
    </>
  )
}

export default Leaf
