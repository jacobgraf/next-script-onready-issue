import Script from "next/script";

export default function Home() {
  return (
    <>
      <div id="contact-form"></div>
      <Script
        src="https://www.cognitoforms.com/f/seamless.js"
        data-key="Gz67Fka35Eu5U4y5XthVrg"
        onReady={() => {
          Cognito.mount("216", "#contact-form");
        }}
      />
    </>
  );
}
