"use client";

import { Codesandbox, Cpu } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { cn } from "../../../lib/utils";

const Lookback = ({
  images = Array(5).fill(
    "https://scontent.fhan4-6.fna.fbcdn.net/v/t39.30808-6/481090142_1052800946655481_9009005542754165241_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeFsxV7y-EkJ0fN2Z4XDhZVV-Ty8Iy27BQX5PLwjLbsFBYhrOfRlZGXubWjJQy-OwVBCITcI2OigDJCQdhCnrevY&_nc_ohc=nd2zcfrQn-kQ7kNvgFNxakm&_nc_oc=Adk6niSSD-o_pbqJhye3sf8BNGXor7E7SyjMzoyleePEkivANUGYHTTNyKLoBpMXY_8&_nc_zt=23&_nc_ht=scontent.fhan4-6.fna&_nc_gid=IHNZERw4ID3GH6Nv1Zvidw&oh=00_AYFFuPAlcUSnLsIxBPgm8dV8KhGpwtctKYTcSIQnaeMo_g&oe=67E1E21D"
  ),
  className,
}: {
  images?: string[];
  className?: string;
}) => {
  const gridRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    container: gridRef, // remove this if your container is not fixed height
    offset: ["start start", "end start"], // remove this if your container is not fixed height
  });

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200]);

  const third = Math.ceil(images.length / 3);

  const firstPart = images.slice(0, third);
  const secondPart = images.slice(third, 2 * third);
  const thirdPart = images.slice(2 * third);

  const overTheYears = [
    {
      year: "Robocus 2023",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur at quidem a mollitia veniam vel vitae quis. Qui debitis nulla, dolorum quam voluptatem adipisci mollitia cum quod esse eum.",
    },
    {
      year: "Robocus 2024",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto, pariatur at quidem a mollitia veniam vel vitae quis. Qui debitis nulla, dolorum quam voluptatem adipisci mollitia cum quod esse eum.",
    },
  ];

  return (
    <>
      <h3 className="text-[#d8d8d8]" id="lookback">
        HÀNH TRÌNH ROBOCUS
      </h3>
      <div className="grid gap-4 lg:grid-cols-5">
        
        <div className="left-text lg:col-span-2">
          <h1 className="gradient-text w-full text-5xl font-medium max-w-[38rem] text-balance">
            CÙNG NHÌN LẠI HÀNH TRÌNH PHÁT TRIỂN ROBOCUS
          </h1>

          {overTheYears.map((item, index) => (
            <div className="flex flex-col gap-8 mt-10" key={index}>
              <div className="flex items-start">
                <Cpu
                  className="w-8 h-auto mx-10 grow-0 shrink-0"
                  color="#a6efff"
                />
                <div className="h-auto">
                  <h3 className="text-3xl font-medium">{item.year}</h3>
                  <p className="font-light mt-6">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="right-img lg:col-span-3">
          <div
            // No scrollbar here
            className={cn(
              "h-[40rem] items-start overflow-y-auto w-full no-scrollbar",
              className
            )}
            ref={gridRef}
          >
            <div
              className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 items-start  max-w-5xl mx-auto gap-10 py-40 px-10"
              ref={gridRef}
            >
              <div className="grid gap-10">
                {firstPart.map((el, idx) => (
                  <motion.div
                    style={{ y: translateFirst }} // Apply the translateY motion value here
                    key={"grid-1" + idx}
                  >
                    <img
                      src={el}
                      className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
                      height="400"
                      width="400"
                      alt="thumbnail"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-10">
                {secondPart.map((el, idx) => (
                  <motion.div
                    style={{ y: translateSecond }}
                    key={"grid-2" + idx}
                  >
                    <img
                      src={el}
                      className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
                      height="400"
                      width="400"
                      alt="thumbnail"
                    />
                  </motion.div>
                ))}
              </div>
              <div className="grid gap-10">
                {thirdPart.map((el, idx) => (
                  <motion.div
                    style={{ y: translateThird }}
                    key={"grid-3" + idx}
                  >
                    <img
                      src={el}
                      className="h-80 w-full object-cover rounded-lg gap-10 !m-0 !p-0"
                      height="400"
                      width="400"
                      alt="thumbnail"
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Lookback;
