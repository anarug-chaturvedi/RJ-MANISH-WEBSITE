import { Outfit, Pacifico } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "RJ Manish Chaubey",
  description:
    "RJ Manish is  helping their students to find and showcase their unique talent.",
  other: {
    // 'theme-color':'#0d1117',
    "theme-color": "#f5f6f9",
    // 'og:url':'https://www.eduexplore.in',
    "og:url": "https://eduexplore.in/",
    "og:image": "https://i.ibb.co/YTcjc624/og.png",
    "twitter:image": "https://i.ibb.co/YTcjc624/og.png",
    "twitter:card": "summary_large_image",
    "og:type": "website",
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${outfit.variable}`}>
        {" "}
        <Toaster />
        {children}
      </body>
    </html>
  );
}

// other: {
//   // 'theme-color':'#0d1117',
//   "theme-color": "#f5f6f9",
//   // 'og:url':'https://www.eduexplore.in',
//   "og:url": "https://eduexplore.in/",
//   "og:image": "https://i.ibb.co/PD7YPG2/Group-1000008179.png",
//   "twitter:image": "https://i.ibb.co/PD7YPG2/Group-1000008179.png",
//   "twitter:card": "summary_large_image",
//   "og:type": "website",
// },

{
  /* <a href="https://ibb.co/LhxpxMSD"><img src="https://i.ibb.co/YTcjc624/og.png" alt="og" border="0"></a> */
}
