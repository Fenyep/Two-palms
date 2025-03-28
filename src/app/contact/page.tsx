export default function Contact() {
  return (
    <div className="flex flex-col-reverse lg:flex-row md:min-h-screen w-screen bg-white">
      <div className="left-section w-full overflow-y-hidden lg:w-1/2 h-auto md:h-screen grid grid-cols-2 px-6 md:px-0 gap-4 sm:gap-x-11 gap-y-8 mt-9 md:mt-0">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-72 w-full md:h-full bg-blue-300"></div>
        ))}
      </div>
      <div className="right-section lg:w-1/2 mt-32 md:mt-0 md:h-screen flex md:items-center md:justify-center px-6">
        <section className="flex flex-col items-start max-w-md font-medium text-black">
          <div className="">
            <header className="self-stretch">
              <h1 className="text-[32px] md:text-4xl leading-[57px] tracking-[-0.36px] font-semibold">
                Get in touch
              </h1>
            </header>

            <div className="mt-[52px] max-w-full">
              <ContactSection
                title="Start a project"
                content="partnerships@twopalmsproductions.com"
              />

              <ContactSection
                title="Give us a call"
                content="+55 21 983 249 076"
                className="mt-[42px]"
              />
            </div>
            <ContactSection
              title="Visit Us"
              content="Av. Nossa Senhora de Copacabana 912/1201 22060-002 Copacabana"
              className="mt-[46px] md:mt-[52px]"
            />
          </div>

          <SocialLinks className="mt-[145px] md:mt-20" />
        </section>
      </div>
    </div>
  );
}

interface ContactSectionProps {
  title: string;
  content: string;
  className?: string;
}

function ContactSection({
  title,
  content,
  className = "",
}: ContactSectionProps) {
  return (
    <div className={`text-[21px] md:text-[18px] leading-5 ${className}`}>
      <h2 className="uppercase font-medium">{title}</h2>
      <div
        className={`pb-0 mt-2.5 md:mt-2 text-[16px] md:text-xl leading-[27px] tracking-[-0.19px] font-medium`}>
        {content}
      </div>
    </div>
  );
}

interface SocialLinksProps {
  className?: string;
}

function SocialLinks({ className = "" }: SocialLinksProps) {
  const socialPlatforms = ["Facebook", "Instagram", "LinkedIn"];

  return (
    <nav
      className={`flex gap-4 sm:gap-8 justify-between items-center text-xl leading-none max-w-[326px] ${className}`}>
      {socialPlatforms.map((platform) => (
        <a
          key={platform}
          href={`#${platform.toLowerCase()}`}
          className="self-stretch my-auto hover:underline md:text-[22px] font-medium"
          aria-label={`Visit our ${platform} page`}>
          {platform}
        </a>
      ))}
    </nav>
  );
}
