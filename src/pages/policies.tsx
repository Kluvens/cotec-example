import React from 'react';

const Policies: React.FC = () => {
  return (
    <div>
      <div className="mt-2xl">
        <div className="relative mb-l">
          <div className="max-w-[68rem] grid grid-cols-12 mt-2xl">
            <div className="m:col-span-12 col-span-12">
              <div className="flex flex-col relative items-center text-center">
                <h1 className="text-h1 text-balance">Terms &amp; policies</h1>
              </div>
            </div>
          </div>
        </div>
        <div className="text-component mb-v mt-v max-w-container grid grid-cols-12 text-left">
          <div className="col-span-12 m:col-span-8 m:col-start-3 max-w-none prose opacity-100">
            <h5><span>Legal</span></h5>
            <ul>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/terms-of-use/"><span>Terms of use</span></a><span>: Terms that govern use of ChatGPT, DALL·E and OpenAI's other services for individuals</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/privacy-policy/"><span>Privacy policy</span></a><span>: Practices with respect to personal information we collect from or about you.</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/service-terms/"><span>Service terms</span></a><span>: Additional terms that govern your use of specific services.</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/data-processing-addendum/"><span>Data processing addendum</span></a><span>: Ensuring that personal data is handled appropriately and securely.</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/plugin-terms/"><span>Plugin terms</span></a><span>: These terms govern the creation and use of your Plugin in connection with OpenAI Services.</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/service-credit-terms/"><span>Service credit terms</span></a><span>: These terms govern any credits redeemable for our services</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/business-terms/"><span>Business terms</span></a><span>: Terms that govern use of OpenAI's services for businesses, enterprises, or developers</span></p>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
        <div className="text-component mb-v mt-v max-w-container grid grid-cols-12 text-left">
          <div className="col-span-12 m:col-span-8 m:col-start-3 max-w-none prose opacity-100">
            <h5><span>Policies</span></h5>
            <ul>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/usage-policies/"><span>Usage policies</span></a><span>: Ensuring our technology is used for good.</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/enterprise-privacy/"><span>Enterprise privacy</span></a><span>: Usage and retention of data submitted for enterprise users.</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/sharing-publication-policy/"><span>Sharing &amp; publication policy</span></a><span>: On permitted sharing, publication, and research access.</span></p>
              </li>
              <li>
                <p><a className="transition ease-curve-a duration-250 underline-offset-[0.125rem] underline decoration-gray-40 dark:decoration-gray-60 hover:decoration-copy-primary" href="/policies/coordinated-vulnerability-disclosure-policy/"><span>Coordinated vulnerability disclosure policy</span></a><span>: Definition of good faith in the context of finding and reporting vulnerabilities.</span></p>
              </li>
            </ul>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policies;
