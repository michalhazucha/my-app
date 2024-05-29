import Image from 'next/image';
import Button from '../Button';
import Tooltip from './Tooltip';

const Hero = () => {
  return (
    <section className="max-container padding-container flex flex-col gap-20 py-10 pb-32 md:gap-28 lg:py-20 xl:flex-row">
      <div className="hero-map"></div>
      <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
        <Image
          src="/camp.svg"
          alt="camp"
          width={50}
          height={50}
          className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
        />
        <h1 className="bold-52 lg:bold-88">Putuk Truno Camp Area</h1>
        <p className="regular-16 mt-6 text-gray-30 xl:max-w-[520px]">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis at
          velit modi, incidunt aperiam aliquam recusandae non nulla debitis hic.
          Vel esse exercitationem tempore quas iste officiis molestiae, quis sit
          itaque recusandae nobis quibusdam? Provident recusandae, dolorem error
          pariatur blanditiis sequi minima natus eveniet harum, maxime similique
          modi quod voluptates.
        </p>
        <div className="my-11 flex flex-wrap gap-5">
          <div className="flex items-center gap-2">
            {Array(5)
              .fill(1)
              .map((_, index) => (
                <Image
                  src="/star.svg"
                  key={index}
                  alt="star"
                  width={24}
                  height={24}
                />
              ))}
          </div>
          <p className="bold-16 lg:bold-20 text-blue-70">
            198k
            <span className="regular-16 lg:regular-20 ml-1">
              Excelent review
            </span>
          </p>
        </div>
        <div className="flex flex-col w-full gap-3 lg:flex-row sm:flex-col">
          <Button type="button" title="Download app" variant="btn_green" />
          <Button
            type="button"
            title="How we work ?"
            variant="btn_white_text"
            icon="/play.svg"
          />
        </div>
      </div>
      <div className="relative flex flex-1 items-start">
        <Tooltip
          location="Aguas Collection"
          distance="173.28"
          elevation="2.040"
        />
      </div>
    </section>
  );
};

export default Hero;
