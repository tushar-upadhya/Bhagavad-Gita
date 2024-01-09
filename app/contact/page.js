import { MailIcon, HomeIcon, PhoneCall } from "lucide-react";

const Contact = () => {
  return (
    <section>
      <div className="container mx-auto">
        {/* text & illustration */}
        <div className="grid xl:grid-cols-2 pt-12 xl:h-[480px] mb-6 xl:mb-24">
          {/* text */}
          <div className="flex flex-col justify-center">
            <div className="flex items-center mb-4 text-lg gap-x-4 text-primary">
              <span className="w-[30px] h-[2px] bg-primary"></span>
              <div>Say hello</div>
            </div>
            <h1 className="max-w-md mb-8 h1">Let's Work Together</h1>
            <p className="subtitle min-w-[400px]">lorem10</p>
          </div>
          {/* illustration  */}
          <div className="hidden w-full bg-top bg-no-repeat bg-contain xl:flex bg-contact_illustration_light dark:bg-contact_illustration_dark" />
        </div>
        {/* info */}
        <div className="flex mb-24 xl:grid-cols-2 xl:mb-32">
          {/* info text */}
          <div className="flex flex-col mb-12 gap-y-4 xl:gap-y-14 xl:mb-24">
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>tusharupadhyay690@gmail.com</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>tusharupadhyay690@gmail.com</div>
            </div>
            {/* mail */}
            <div className="flex items-center gap-x-8">
              <MailIcon className="text-primary" size={18} />
              <div>tusharupadhyay690@gmail.com</div>
            </div>
          </div>

          <form>form</form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
