// import React from 'react'
import Shell from '../common_component/Shell/page';

// const layout = () => {
//   return (
//     <>
//         <Shell>{children}</Shell>
//     </>
//   )
// }

// export default layout


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  

  return (
    <html lang="en">
      <body >
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}