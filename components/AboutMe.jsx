import DevImg from "./DevImg";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { infoData, skillData, KrishnaNames } from "@/utils/utilsAbout";

const AboutMe = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className="xl:h-[860px] sm:mt-[18rem] md:mt-[10rem] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}

          <div className="relative flex-1 hidden xl:flex">
            <DevImg
              containerStyles="bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              imgSrc="/about/about.png"
            />
          </div>
          {/* tabs */}
          <div className="flex-1 ">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] ">
                <TabsTrigger className="w-[162px] xl:w-auto" value="personal">
                  Personal Info
                </TabsTrigger>
                <TabsTrigger className="w-[162px] xl:w-auto" value="skills">
                  Skills
                </TabsTrigger>
                <TabsTrigger
                  className="w-[162px] xl:w-auto"
                  value="KrishnaNames"
                >
                  Krishna Names
                </TabsTrigger>
              </TabsList>

              {/* tabs content */}

              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}

                <TabsContent value="personal">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4 h3">
                      Vasudeva Krishna / Devaki’s ke lal
                    </h3>
                    <p className="max-w-xl mx-auto subtitle xl:mx-0">
                      I specialize Compassion, Tenderness, and Love
                    </p>
                    {/* icons */}
                    <div className="grid gap-4 mb-12 xl:grid-cols-2">
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className="flex items-center mx-auto gap-x-4 xl:mx-0"
                            key={index}
                          >
                            <div className="text-primary">{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </TabsContent>

                {/* skills */}

                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skill list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            const { name, des } = item;
                            return (
                              <div
                                className="mx-auto text-center w-2/8 xl:text-left xl:mx-0"
                                key={index}
                              >
                                <div className="font-medium text-primary">
                                  {name} :
                                </div>
                                <div className="font-medium">{des}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>
                </TabsContent>

                {/* Krishna Names */}

                <TabsContent value="KrishnaNames">
                  <div className="text-center xl:text-left">
                    {/* skills */}
                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Krishna </h4>
                      <div className="mb-4 border-b border-border"></div>
                      {/* skill list */}
                      <div>
                        {KrishnaNames.map((item, index) => {
                          const { name, des } = item;
                          return (
                            <div
                              className="mx-auto text-center w-2/8 xl:text-left xl:mx-0"
                              key={index}
                            >
                              <div className="font-medium text-primary">
                                {name} :
                              </div>
                              <div className="font-medium">{des}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
