import React from 'react';
import { Head } from 'vite-react-ssg';
import leadMagImage from '../assets/mag.png';

// You might not need the global declaration anymore if Helmet handles the script context better,
// but it doesn't hurt to keep it for clarity if you intend to reference window.ml elsewhere.
declare global {
  interface Window {
    ml: any;
  }
}

const LeadMagnet: React.FC = () => {
  const mailerLiteAccountID = '1534063'; // Your actual account ID

  return (
    <> {/* Use a Fragment or a parent div if Helmet is the only top-level addition */}
      <Head>
        <script>
          {`
            (function(w,d,e,u,f,l,n){w[f]=w[f]||function(){(w[f].q=w[f].q||[])
            .push(arguments);},l=d.createElement(e),l.async=1,l.src=u,
            n=d.getElementsByTagName(e)[0],n.parentNode.insertBefore(l,n);})
            (window,document,'script','https://assets.mailerlite.com/js/universal.js','ml');
            ml('account', '${mailerLiteAccountID}');
          `}
        </script>
      </Head>
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img
                src={leadMagImage}
                alt="Cold Email Deliverability Guide Cover"
                className="w-full h-auto rounded-lg shadow-xl"
                style={{ maxHeight: '678px', objectFit: 'cover' }}
              />
            </div>
            <div className="lg:w-1/2">
              {/* This is where MailerLite should inject the form */}
              <div className="ml-embedded" data-form="RE8yfX"></div>

              {/* ... your commented out form ... */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LeadMagnet;