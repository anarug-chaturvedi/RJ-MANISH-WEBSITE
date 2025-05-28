// "use client";

// import { useState } from "react";
// import up from "@/public/asset/up.png";
// import down from "@/public/asset/down.png";
// import Image from "next/image";
// import localFont from "next/font/local";
// import { Public_Sans } from "next/font/google";

// const publicaSans = localFont({
//   src: "../../public/fonts/PublicaSans.otf",
// });
// const caros = localFont({
//   src: "../../public/fonts/Caros.otf",
// });

// const faqs = [
//   { question: "What happens after I register?" },
//   { question: "Can I get a refund if my child decides not to participate?" },
//   { question: "How will I know if my payment is secure?" },
//   { question: "Are there any special offers for multiple contest entries?" },
// ];

// const description =
//   "Unfortunately, we do not offer refunds once the registration process is completed. However, if you face any issues, feel free to reach out to us, and we’ll try our best to assist you.";

// export default function Faq({ pricing, success }) {
//   const [openIndex, setOpenIndex] = useState(null);

//   const toggleFAQ = (index) => {
//     setOpenIndex(openIndex === index ? null : index);
//   };

//   return (
//     <div
//       className={`w-full ${
//         !pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
//       }  flex items-center justify-center flex-col text-black`}
//     >
//       <h2
//         className={`${
//           publicaSans.className
//         } text-[24px] lg:text-[57px] lg:text-center  font-semibold mb-6  mt-10 lg:my-[61px] w-[90%] md:w-[80%] leading-[25px] tracking-[-0.41px] ${
//           pricing ? "md:text-[#EEEFFC]" : "md:text-[#1B1D30]"
//         } ${success ? "text-[#1B1D30]" : "text-[#EEEFFC]"} `}
//       >
//         Frequently asked questions <span className="text-[#D73970]">(FAQ)</span>
//       </h2>
//       <div className=" w-full items-center justify-center flex flex-col gap-3 mb-10 md:mb-24">
//         {faqs.map((faq, index) => (
//           <div
//             key={index}
//             className={` ${caros.className} bg-[#CBCDE6] p-4 lg:py-[21px] lg:px-[39px] rounded-lg w-[90%] md:w-[80%]`}
//           >
//             <div className="w-full flex justify-between items-start gap-2 text-sm sm:text-lg font-semibold">
//               <p
//                 onClick={() => toggleFAQ(index)}
//                 className=" text-[13px] lg:text-2xl font-semibold cursor-pointer"
//               >
//                 {faq.question}
//               </p>
//               {openIndex === index ? (
//                 <Image
//                   src={up}
//                   alt="up"
//                   className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
//                   onClick={() => toggleFAQ(index)}
//                 />
//               ) : (
//                 <Image
//                   src={down}
//                   alt="down"
//                   className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
//                   onClick={() => toggleFAQ(index)}
//                 />
//               )}
//               {/* </button> */}
//             </div>
//             {openIndex === index && (
//               <p className="mt-2 font-normal text-xs lg:text-2xl -tracking-[2%] leading-normal ">
//                 {description}
//               </p>
//             )}
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

"use client";

import { useState } from "react";
import up from "@/public/asset/up.png";
import down from "@/public/asset/down.png";
import Image from "next/image";
import localFont from "next/font/local";
import { Public_Sans } from "next/font/google";

const publicaSans = localFont({
  src: "../../public/fonts/PublicaSans.otf",
});
const caros = localFont({
  src: "../../public/fonts/Caros.otf",
});

const faqs = [
  {
    question: "Can anyone become a creator, even if I have no experience?",
    answer:
      "Yes. Anyone can become a creator. You don’t need prior experience—just a willingness to learn, create, and stay consistent. The key is to start with what you know or love and build from there.",
  },
  {
    question: "What platform should I start on as a beginner?",
    answer:
      "Start where your audience already spends time. If you like short videos, go for Instagram Reels or YouTube Shorts. If you enjoy writing, try blogging or LinkedIn. Don’t overthink—just begin and grow from there.",
  },
  {
    question: "How much time will it take to earn from content creation?",
    answer:
      "It depends on consistency, quality, and niche. Some creators start earning in 3–6 months, others take longer. But with smart strategy (like affiliate marketing, digital products, or brand deals), you can speed up the process.",
  },
  {
    question: "Do I need a lot of followers to earn second income?",
    answer:
      "No. You don’t need millions of followers. Even micro-creators (1,000–10,000 followers) can earn well through niche content, loyal audiences, and the right monetization methods.",
  },
  {
    question: "What equipment do I need to start as a creator?",
    answer:
      "Start simple: a good smartphone, basic lighting, and a quiet space. You can upgrade gear later. What matters most is valuable content—not expensive setup.",
  },
  {
    question: "How can I generate a second income if I already have a job?",
    answer:
      "Use your free hours wisely—create content in the evenings or on weekends. Focus on passive income options like digital products, affiliate links, or scheduled content to manage both job and side hustle smoothly.",
  },
  {
    question: "Is it necessary to show my face to become a creator?",
    answer:
      "No. Many successful creators never show their face. You can use voiceovers, animations, screen recordings, or storytelling formats that don’t require being on camera.",
  },
  {
    question: "What are the best ways to monetize as a creator?",
    answer:
      "Top monetization methods include: Affiliate Marketing , Brand Collaborations , YouTube Ad Revenue , Selling Digital Products (eBooks, courses) , Paid Memberships or Subscriptions , Freelance services using your skills",
  },
  {
    question: "What if people judge me or criticize my content?",
    answer:
      "Criticism is part of the journey. Focus on your mission and audience. With time, your work will speak for itself. Remember: You’re doing something most people are too scared to even start.",
  },
  {
    question: "Is content creation a stable income source?",
    answer:
      "It can be, with the right mindset and long-term approach. Many creators eventually turn it into full-time income. Diversifying income streams ensures stability over time.",
  },
];

export default function Faq({ pricing, success }) {
  const [openIndex, setOpenIndex] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div
      className={`w-full ${
        !pricing ? "md:bg-[#EEEFFC]" : "md:bg-[#1B1D30]"
      }  flex items-center justify-center flex-col text-black`}
    >
      <h2
        className={`${
          publicaSans.className
        } text-[24px] lg:text-[57px] lg:text-center  font-semibold mb-6  mt-10 lg:my-[61px] w-[90%] md:w-[80%] leading-[25px] tracking-[-0.41px] ${
          pricing ? "md:text-[#EEEFFC]" : "md:text-[#1B1D30]"
        } ${success ? "text-[#1B1D30]" : "text-[#EEEFFC]"} `}
      >
        Frequently asked questions <span className="text-[#D73970]">(FAQ)</span>
      </h2>
      <div className=" w-full items-center justify-center flex flex-col gap-3 mb-10 md:mb-24">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={` ${caros.className} bg-[#CBCDE6] p-4 lg:py-[21px] lg:px-[39px] rounded-lg w-[90%] md:w-[80%]`}
          >
            <div
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between cursor-pointer items-start gap-2 text-sm sm:text-lg font-semibold"
            >
              <p className=" text-[13px] lg:text-2xl font-semibold">
                {faq.question}
              </p>
              {openIndex.includes(index) ? (
                <Image
                  src={up}
                  alt="up"
                  className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
                  onClick={() => toggleFAQ(index)}
                />
              ) : (
                <Image
                  src={down}
                  alt="down"
                  className=" w-[20px] h-[20px] lg:h-[32px] lg:w-[32px] "
                  onClick={() => toggleFAQ(index)}
                />
              )}
            </div>
            {openIndex.includes(index) && (
              <p className="mt-2 font-normal text-xs lg:text-2xl -tracking-[2%] leading-normal ">
                {faq.answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
