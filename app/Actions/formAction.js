// "use server";
// import { Resend } from "resend";
// import nodemailer from "nodemailer";

// const useResend = false;

// export async function handleFormSubmit(prev, formdata) {
//   "use server";

//   // case 1 when we used resend for that above we have to make it true but yet it is false
//   //ismein thodi galti ye hai ki abhi kuch cheezein second way mein implement ki hai
//   //means agar mail nahi send hoga phir bhi message show hoga wo chize niche manage kari hui hai
//   if (useResend) {

//     const resend = new Resend(process.env.RESEND_API);

//     try {
//       resend.emails.send({
//         from: process.env.fromEmail,
//         to: process.env.SendtoEmail,
//         subject: "MY TALENT ",
//         html: `<h1>Request for Demo Session</h1>
//       <p>Hello MY TALENT Admin ,</p>
//       <p>You have received a new query regarding the Demo Session. Here are the details:</p>

//           <div class="question">
//           <p class="user-info">User Name: ${formdata.get("name")}</p>
//           <p class="user-info">User Designation: ${formdata.get("designation")}</p>
//           <p class="user-info">User Phone Number: ${formdata.get("phone")}</p>
//           <p class="user-info">User School Name: ${formdata.get("schoolName")}</p>
//           <p class="user-info">User Email Id: ${formdata.get("email")}</p>
//           <p><strong>Query:  ${formdata.get("description")}</strong></p>
//          ${prev}

//         <p>Best regards,<br> The Course Support Team</p>`,
//       });

//       console.log("FORM DATA IS ", formdata);

//       return {
//         message: "Email sent successfully",
//       };
//     } catch (error) {
//       console.log("FORM DATA IS ", formdata);
//       // console.log("prev DATA IS ", prev);

//       console.error("Error sending emails", error);

//       return {
//         message: "Failed to send email",
//         error: error.message,
//       };
//     }
//   }
//   // case 2 when we use smtp server with nodemailer yet it is true or working
//   else{
//     try {

//       let data = {};
//       for(const[key,value] of formdata) {
//         data[key] = value;
//       }
//       const transporter = nodemailer.createTransport({
//         pool: true,
//         host: "smtp.resend.com",
//         port: 465,
//         secure: true,
//         auth: {
//           user: "resend",
//           pass:process.env.RESEND_API,

//         },
//       });
//       await transporter.verify();
//       const smtp = await Promise.resolve(transporter);
//       let mailConfig = {
//         from: process.env.fromEmail,
//         html: `<h1 style={{ color: "#61dafb" }}>Request for Demo Session</h1>
//         <p>Hello MY TALENT Admin ,</p>
//         <p>You have received a new request regarding the Demo Session. Here are the details:</p>

//             <div class="question">
//             <p class="user-info">User Name: ${data.name}</p>
//             <p class="user-info">User Email: ${data.email}</p>
//              <p class="user-info">User Designation: ${data.designation}</p>
//           <p class="user-info">User Phone Number: ${data.phone}</p>
//           <p class="user-info">User School Name: ${data.schoolName}</p>
//             <p><strong>Query:  ${data.description}</strong></p
//           <p>Best regards,<br> The Course Support Team</p>

//           `,

//       //   html:` <head>
//       //   <meta content="text/html; charset=UTF-8" http-equiv="Content-Type" />
//       // </head>
//       // <div style="display:none;overflow:hidden;line-height:1px;opacity:0;max-height:0;max-width:0">The sales intelligence platform that helps you uncover qualified leads.<div> ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏﻿ ‌​‍‎‏
//       // </div>
//       // </div>

//       // <body style="background-color:#ffffff;font-family:-apple-system,BlinkMacSystemFont,&quot;Segoe UI&quot;,Roboto,Oxygen-Sans,Ubuntu,Cantarell,&quot;Helvetica Neue&quot;,sans-serif">
//       //   <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="max-width:37.5em;margin:0 auto;padding:20px 0 48px">
//       //     <tbody>
//       //       <tr style="width:100%">
//       //         <td><img alt="Koala" height="50" src="https://react-email-demo-7s5r0trkn-resend.vercel.app/static/koala-logo.png" style="display:block;outline:none;border:none;text-decoration:none;margin:0 auto" width="170" />
//       //           <p style="font-size:16px;line-height:26px;margin:16px 0">Hi <!-- -->Alan<!-- -->,</p>
//       //           <p style="font-size:16px;line-height:26px;margin:16px 0">Welcome to Koala, the sales intelligence platform that helps you uncover qualified leads and close deals faster.</p>
//       //           <table align="center" width="100%" border="0" cellPadding="0" cellSpacing="0" role="presentation" style="text-align:center">
//       //             <tbody>
//       //               <tr>
//       //                 <td><a href="https://getkoala.com" style="background-color:#5F51E8;border-radius:3px;color:#fff;font-size:16px;text-decoration:none;text-align:center;display:inline-block;padding:12px 12px 12px 12px;line-height:100%;max-width:100%" target="_blank"><span><!--[if mso]><i style="letter-spacing: 12px;mso-font-width:-100%;mso-text-raise:18" hidden>&nbsp;</i><![endif]--></span><span style="max-width:100%;display:inline-block;line-height:120%;mso-padding-alt:0px;mso-text-raise:9px">Get started</span><span><!--[if mso]><i style="letter-spacing: 12px;mso-font-width:-100%" hidden>&nbsp;</i><![endif]--></span></a></td>
//       //               </tr>
//       //             </tbody>
//       //           </table>
//       //           <p style="font-size:16px;line-height:26px;margin:16px 0">Best,<br />The Koala team</p>
//       //           <hr style="width:100%;border:none;border-top:1px solid #eaeaea;border-color:#cccccc;margin:20px 0" />
//       //           <p style="font-size:12px;line-height:24px;margin:16px 0;color:#8898aa">470 Noor Ave STE B #1148, South San Francisco, CA 94080</p>
//       //         </td>
//       //       </tr>
//       //     </tbody>
//       //   </table>
//       // </body>`,

//         subject: `Query Form`,
//         // to: process.env.SendtoEmail,
//         to: 'contact@eduexplore.in',
//       };
//       await smtp.sendMail(mailConfig);
//       console.log("email sent using smtp")
//        console.log("from email : ",process.env.fromEmail);
//        console.log("sent to  email : ",process.env.SendtoEmail);
//       return {
//         status:true,
//         message: "Your query has been submitted. Our team will reach out to you soon.",
//       };
//     } catch (error) {
//       console.log("error in smtp is :",error.message)

//       // by using this console we can see that typeof and value of env tokens
//       // console.log(process.env.SendtoEmail)
//       // console.log(typeof process.env.SendtoEmail);
//       // console.log(process.env.fromEmail)
//       // console.log(typeof process.env.fromEmail);
//       // console.log(typeof fromEmail);

//       return {
//         status:false,
//         message: "Failed to send email",
//         error: error.message,
//       };
//     }

//   }
// }

// app/somepage/actions.js
"use server";

import { sendEmail } from "@/utlis/email";

export async function handleFormSubmit(prev, formData) {
  const data = {};
  for (const [key, value] of formData) {
    data[key] = value;
  }

  return await sendEmail(data, "enquiry", prev);
}
