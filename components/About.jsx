import { aboutData, qualificationData, skillData } from "@/utils/utilsAbout";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "./ui/tabs";
import Image from "next/image";
import DevImg from "./DevImg";
import { Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };
  //   console.log("getData:", getData(qualificationData, "experience"));

  return (
    <section className="xl:h-[860px] pb-12 xl:py-24">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-8 text-center section-title xl:mb-16">
          About me
        </h2>
        <div className="flex flex-col xl:flex-row">
          {/* image */}
          <div className="relative flex-1 hidden xl:flex">
            <DevImg
              containerStyle={
                "bg-about_shape_light dark:bg-about_shape_dark w-[505px] h-[505px] bg-no-repeat relative"
              }
              imgSrc={"/assets/about/developer.png"}
            />
          </div>
          {/* tabs */}
          <div className="flex-1">
            <Tabs defaultValue="personal">
              <TabsList className="w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none">
                <TabsTrigger value="personal">Personal Info</TabsTrigger>
                <TabsTrigger value="qualification">Qualification</TabsTrigger>
                <TabsTrigger value="skills">Skills</TabsTrigger>
              </TabsList>
              {/*content  */}
              <div className="mt-12 text-lg xl:mt-8">
                {/* personal */}
                <TabsContent
                  // className="w-[162px] sm:mx-auto xl:w-auto"
                  value="personal"
                >
                  <div className="text-center xl:text-left">
                    <h3 className="mb-4 h3">
                      Unmatched Service Quality for over 10 Years
                    </h3>
                    <p className="max-w-xl mx-auto subtitle xl:mx-0">
                      I specialize in crafting intuitive website with
                      cutting-edge technology, delivering dynamic and engaging
                      user experience
                    </p>
                    {/* icons */}
                    <div className="grid gap-4 mb-12 xl:grid-cols-2">
                      {aboutData.map((item, index) => {
                        return (
                          <div key={index}>
                            <div className="flex items-center mx-auto gap-x-4 xl:mx-0">
                              {item.icon}
                            </div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>

                    <div className="flex flex-col gap-y-2">
                      <div className="text-primary">Language Skill</div>
                      <div className="border-b border-border" />
                      <div>English, Hindi</div>
                    </div>
                  </div>
                </TabsContent>

                {/* qualification */}

                <TabsContent
                  // className="w-[162px] xl:w-auto"
                  value="qualification"
                >
                  <div>
                    <h3 className="mb-8 text-current h3 xl:text-left">
                      My Awesome Journey
                    </h3>

                    {/* eduction and EX */}
                    <div className="grid md:grid-cols-2 gap-y-8">
                      {/* EX */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <Briefcase />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "experience").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "experience").data.map(
                            (item, index) => {
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2" />
                                  {/* <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div> */}
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {item.company}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {item.role}
                                    </div>
                                    <div className="text-base font-medium">
                                      {item.years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* Education */}
                      <div className="flex flex-col gap-y-6">
                        <div className="flex gap-x-4 items-center text-[22px] text-primary">
                          <GraduationCap />
                          <h4 className="font-medium capitalize">
                            {getData(qualificationData, "education").title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className="flex flex-col gap-y-8">
                          {getData(qualificationData, "education").data.map(
                            (item, index) => {
                              return (
                                <div key={index} className="flex gap-x-8 group">
                                  <div className="h-[84px] w-[1px] bg-border relative ml-2" />
                                  {/* <div className="w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500"></div> */}
                                  <div>
                                    <div className="mb-2 text-xl font-semibold leading-none">
                                      {item.university}
                                    </div>
                                    <div className="mb-4 text-lg leading-none text-muted-foreground">
                                      {item.qualification}
                                    </div>
                                    <div className="text-base font-medium">
                                      {item.years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="skills">
                  <div className="text-center xl:text-left">
                    <h3 className="mb-8 h3">Tools I use EveryDay</h3>

                    <div className="mb-16">
                      <h4 className="mb-2 text-xl font-semibold">Skills</h4>
                      <div className="mb-4 border-b border-border" />

                      {/* list */}
                      <div>
                        {getData(skillData, "skills").data.map(
                          (item, index) => {
                            return (
                              <div
                                key={index}
                                className="w-2/4 mx-auto text-center xl:text-left xl:mx-0"
                              >
                                <div className="font-medium">{item.name}</div>
                              </div>
                            );
                          }
                        )}
                      </div>
                    </div>
                  </div>

                  {/* tools */}
                  <div>
                    <h4 className="mb-2 text-xl font-semibold xl:text-left">
                      Tools
                    </h4>
                    <div className="mb-4 border-b border-border" />

                    {/* TOOL list */}
                    <div className="flex justify-center gap-x-8 xl:justify-start">
                      {getData(skillData, "tools").data.map((item, index) => {
                        return (
                          <div className="" key={index}>
                            <Image
                              src={item.imgPath}
                              width={48}
                              height={48}
                              alt="image"
                              priority
                            />
                          </div>
                        );
                      })}
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

export default About;
