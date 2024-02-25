import localFont from "next/font/local";

const GTWalsheimPro = localFont({
    src: [
      {
        path: "../../public/fonts/GT-Walsheim-Pro/GTWalsheimPro-Medium.woff",
        weight: "500",
        style: "normal",
      },
    ],
    variable: '--font-gt-walshiem-pro'
  });
  
  const inter = localFont({
    src: [
      {
        path: "../../public/fonts/Inter/Inter-Regular.woff",
        weight: "400",
        style: "normal",
      },
    ],
    variable: '--font-inter'
  });

  export {GTWalsheimPro,inter}