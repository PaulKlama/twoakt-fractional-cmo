import tellent from "@/assets/tellent.png.asset.json";
import mytraffic from "@/assets/mytraffic.png.asset.json";
import bloomays from "@/assets/bloomays.png.asset.json";

const logos = [
  { name: "Tellent", src: tellent.url },
  { name: "MyTraffic", src: mytraffic.url },
  { name: "Bloomays", src: bloomays.url },
];

const LogoStrip = () => {
  return (
    <section className="border-y border-border/60 bg-background">
      <div className="container mx-auto px-6 py-12 md:py-16">
        <p className="text-center text-xs uppercase tracking-[0.2em] text-muted-foreground mb-8">
          Selected companies I've worked with
        </p>
        <div className="flex flex-wrap items-center justify-center gap-x-14 gap-y-8 md:gap-x-20">
          {logos.map((logo) => (
            <img
              key={logo.name}
              src={logo.src}
              alt={logo.name}
              className="h-7 md:h-8 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity"
              style={{ filter: "brightness(0) saturate(100%)" }}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LogoStrip;
