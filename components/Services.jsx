import { utilsService } from "@/utils/utilsServices";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";

const Services = () => {
  return (
    <section className="mb-12 xl:mb-36">
      <div className="container mx-auto">
        <h2 className="mx-auto mb-12 text-center section-title xl:mb-24">
          My Services
        </h2>
        <div className="grid justify-center xl:grid-cols-3 gap-y-12 xl:gap-y-24 xl:gap-x-8">
          {utilsService.map((item, index) => {
            return (
              <Card
                key={index}
                className="w-full max-w-[424] h-[300px] flex flex-col pt-16 pb-10 justify-center items-center relative"
              >
                <CardHeader className="text-primary absolute -top-[60px]">
                  <div className="w-[140px] h-[80px] bg-pink-100 dark:bg-background flex justify-center items-center">
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className="text-center">
                  <CardTitle className="mb-4">{item.title}</CardTitle>
                  <CardDescription className="mb-4">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
