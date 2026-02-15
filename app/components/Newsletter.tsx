"use client";

import { useEffect, useRef, useState } from "react";

export default function Newsletter() {
  const initialized = useRef(false);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialized.current) return;
    initialized.current = true;

    // Load MailerLite webforms script
    const webformsScript = document.createElement("script");
    webformsScript.src =
      "https://groot.mailerlite.com/js/w/webforms.min.js?v176e10baa5e7ed80d35ae235be3d5024";
    webformsScript.type = "text/javascript";
    document.body.appendChild(webformsScript);

    // Takel fetch
    fetch(
      "https://assets.mailerlite.com/jsonp/1767575/forms/166613379240166933/takel"
    );

    // Define success callback
    (window as Record<string, unknown>).ml_webform_success_31583812 =
      function () {
        setSubmitted(true);
      };

    return () => {
      document.body.removeChild(webformsScript);
    };
  }, []);

  return (
    <div className="mx-auto w-full max-w-md text-center">
      {!submitted ? (
        <div>
          <h4 className="mb-2 text-3xl font-semibold text-white">
            Start Your Points Journey Today
          </h4>
          <h3 className="mb-8 text-lg text-white/80">
            Enter your email address for more updates
          </h3>

          <form
            className="ml-block-form"
            action="https://assets.mailerlite.com/jsonp/1767575/forms/166613379240166933/subscribe"
            data-code=""
            method="post"
            target="_blank"
          >
            <div className="mb-4">
              <input
                aria-label="email"
                aria-required="true"
                type="email"
                className="ml-validate-email ml-validate-required w-full rounded-lg border border-white/30 bg-white px-4 py-3 text-sm text-gray-800 placeholder-gray-400 outline-none focus:ring-2 focus:ring-accent"
                data-inputmask=""
                name="fields[email]"
                placeholder="Email"
                autoComplete="email"
              />
            </div>

            <input type="hidden" name="ml-submit" value="1" />
            <input type="hidden" name="anticsrf" value="true" />

            <button
              type="submit"
              className="w-full rounded-lg bg-accent px-6 py-3 text-sm font-bold text-[#15548f] transition-colors hover:bg-white"
            >
              Unlock Travel Tips
            </button>
          </form>
        </div>
      ) : (
        <div>
          <h4 className="mb-2 text-3xl font-semibold text-white">
            Thank you!
          </h4>
          <p className="text-lg text-white/80">
            You have successfully joined our subscriber list.
          </p>
        </div>
      )}
    </div>
  );
}
