const HeroSection = (props: { title: string; subTitle: string }) => {
  return (
    <section className="bg-blue-500 text-white h-40 flex items-center justify-center flex-col gap-2">
      <h1 className="text-5xl">{props.title}</h1>
      <p className="text-xl">{props.subTitle}</p>
    </section>
  );
};

export default HeroSection;
