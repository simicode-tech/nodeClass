const SingleImage = ({ href, imgSrc }) => {
  return (
    <>
      <a href={href} className="flex w-full items-center justify-center">
        <img src={imgSrc} alt="brand" className="w-full h-10" />
      </a>
    </>
  );
};

export default SingleImage;
