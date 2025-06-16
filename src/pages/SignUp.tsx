import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col bg-vela-deep-space overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fe2b1054892dc42b29c13bce357ce3603)",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col justify-between items-center min-h-screen pb-5">
        {/* Logo at top */}
        <img
          loading="lazy"
          alt="Vela logo"
          src="https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2"
          className="aspect-square object-cover object-center w-auto mt-5 min-h-5 min-w-5 overflow-hidden max-w-[91px]"
        />

        {/* Main content section */}
        <div className="flex flex-col">
          {/* Title section */}
          <div className="self-stretch text-vela-starlight-white text-center font-canela text-title-hero font-light px-4 pt-5 pb-3">
            Continue to sign up
          </div>

          {/* Subtitle section */}
          <div className="self-stretch text-vela-starlight-white text-center font-satoshi text-subtitle font-normal px-4 pt-1 pb-3">
            If you already have an account, we'll log you in.
          </div>

          {/* Buttons section */}
          <div className="flex justify-center items-start self-stretch">
            <div className="flex max-w-[480px] px-4 py-3 flex-col items-start gap-3 flex-1">
              {/* Apple button */}
              <button className="flex h-12 min-w-[84px] max-w-[480px] px-5 justify-center items-center self-stretch rounded-vela bg-vela-darker-variant text-vela-starlight-white font-satoshi font-bold text-subtitle transition-all hover:bg-opacity-90 relative">
                <div className="flex flex-col items-center">
                  <div className="truncate self-stretch text-center">
                    Continue with Apple
                  </div>
                </div>
                <svg
                  className="w-6 h-8 absolute right-5 top-2"
                  width="24"
                  height="32"
                  viewBox="0 0 24 32"
                  fill="none"
                >
                  <path
                    d="M19.9188 16.7938C19.9062 14.5 20.9438 12.7687 23.0438 11.4937C21.8688 9.8125 20.0938 8.8875 17.75 8.70625C15.5312 8.53125 13.1062 10 12.2188 10C11.2812 10 9.13125 8.76875 7.44375 8.76875C3.95625 8.825 0.25 11.55 0.25 17.0938C0.25 18.7313 0.55 20.4229 1.15 22.1688C1.95 24.4625 4.8375 30.0875 7.85 29.9937C9.425 29.9562 10.5375 28.875 12.5875 28.875C14.575 28.875 15.6062 29.9937 17.3625 29.9937C20.4 29.95 23.0125 24.8375 23.775 22.5375C19.7 20.6187 19.9188 16.9125 19.9188 16.7938ZM16.3813 6.53125C18.0875 4.50625 17.9312 2.6625 17.8813 2C16.375 2.0875 14.6312 3.025 13.6375 4.18125C12.5437 5.41875 11.9 6.95 12.0375 8.675C13.6688 8.8 15.1562 7.9625 16.3813 6.53125Z"
                    fill="#C9DFF4"
                  />
                </svg>
              </button>

              {/* Google button */}
              <button className="flex h-12 min-w-[84px] max-w-[480px] px-5 justify-center items-center self-stretch rounded-vela bg-vela-darker-variant text-vela-starlight-white font-satoshi font-bold text-subtitle transition-all hover:bg-opacity-90 relative">
                <div className="flex flex-col items-center">
                  <div className="truncate self-stretch text-center">
                    Continue with Google
                  </div>
                </div>
                <svg
                  className="w-8 h-8 absolute right-4 top-2"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M29.0741 13.3886H28.0001V13.3333H16.0001V18.6666H23.5354C22.4361 21.7713 19.4821 24 16.0001 24C11.5821 24 8.00008 20.418 8.00008 16C8.00008 11.582 11.5821 7.99996 16.0001 7.99996C18.0394 7.99996 19.8947 8.76929 21.3074 10.026L25.0787 6.25463C22.6974 4.03529 19.5121 2.66663 16.0001 2.66663C8.63675 2.66663 2.66675 8.63663 2.66675 16C2.66675 23.3633 8.63675 29.3333 16.0001 29.3333C23.3634 29.3333 29.3334 23.3633 29.3334 16C29.3334 15.106 29.2414 14.2333 29.0741 13.3886Z"
                    fill="#C9DFF4"
                  />
                  <path
                    d="M4.2041 9.79396L8.58477 13.0066C9.7701 10.072 12.6408 7.99996 16.0001 7.99996C18.0394 7.99996 19.8948 8.76929 21.3074 10.026L25.0788 6.25463C22.6974 4.03529 19.5121 2.66663 16.0001 2.66663C10.8788 2.66663 6.43743 5.55796 4.2041 9.79396Z"
                    fill="#C9DFF4"
                  />
                  <path
                    d="M15.9999 29.3333C19.4439 29.3333 22.5732 28.0153 24.9392 25.872L20.8125 22.38C19.4739 23.394 17.8099 24 15.9999 24C12.5319 24 9.58722 21.7886 8.47788 18.7026L4.12988 22.0526C6.33655 26.3706 10.8179 29.3333 15.9999 29.3333Z"
                    fill="#C9DFF4"
                  />
                  <path
                    d="M29.074 13.3887H28V13.3334H16V18.6667H23.5353C23.0073 20.158 22.048 21.444 20.8107 22.3807C20.8113 22.38 20.812 22.38 20.8127 22.3794L24.9393 25.8714C24.6473 26.1367 29.3333 22.6667 29.3333 16C29.3333 15.106 29.2413 14.2334 29.074 13.3887Z"
                    fill="#C9DFF4"
                  />
                </svg>
              </button>

              {/* Facebook button */}
              <button className="flex h-12 min-w-[84px] max-w-[480px] px-5 justify-center items-center self-stretch rounded-vela bg-vela-darker-variant text-vela-starlight-white font-satoshi font-bold text-subtitle transition-all hover:bg-opacity-90 relative">
                <div className="flex flex-col items-center">
                  <div className="truncate self-stretch text-center">
                    Continue with Facebook
                  </div>
                </div>
                <svg
                  className="w-8 h-8 absolute right-4 top-2"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <g clipPath="url(#clip0_90_619)">
                    <path
                      d="M22.6667 4.66662C22.6667 4.4898 22.5964 4.32024 22.4714 4.19521C22.3464 4.07019 22.1768 3.99995 22 3.99995H18.6667C16.9882 3.91634 15.3448 4.50047 14.0956 5.62472C12.8465 6.74897 12.093 8.32194 12 9.99995V13.5999H8.66667C8.48986 13.5999 8.32029 13.6702 8.19526 13.7952C8.07024 13.9202 8 14.0898 8 14.2666V17.7333C8 17.9101 8.07024 18.0797 8.19526 18.2047C8.32029 18.3297 8.48986 18.3999 8.66667 18.3999H12V27.3333C12 27.5101 12.0702 27.6797 12.1953 27.8047C12.3203 27.9297 12.4899 27.9999 12.6667 27.9999H16.6667C16.8435 27.9999 17.013 27.9297 17.1381 27.8047C17.2631 27.6797 17.3333 27.5101 17.3333 27.3333V18.3999H20.8267C20.9749 18.4021 21.1197 18.3547 21.238 18.2654C21.3563 18.176 21.4415 18.0498 21.48 17.9066L22.44 14.4399C22.4665 14.3414 22.4701 14.2382 22.4504 14.1381C22.4308 14.038 22.3884 13.9437 22.3266 13.8626C22.2647 13.7814 22.1851 13.7156 22.0938 13.67C22.0025 13.6245 21.902 13.6005 21.8 13.5999H17.3333V9.99995C17.3665 9.66992 17.5215 9.3641 17.768 9.14221C18.0146 8.92032 18.335 8.79829 18.6667 8.79995H22C22.1768 8.79995 22.3464 8.72971 22.4714 8.60469C22.5964 8.47966 22.6667 8.31009 22.6667 8.13328V4.66662Z"
                      fill="#C9DFF4"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_90_619">
                      <rect width="32" height="32" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
              </button>

              {/* Email button */}
              <button
                onClick={() => navigate("/create-account")}
                className="flex h-10 min-w-[84px] max-w-[480px] px-4 justify-center items-center self-stretch rounded-[20px] text-vela-starlight-white font-satoshi font-bold text-subtitle transition-all hover:bg-vela-starlight-white hover:bg-opacity-10"
              >
                <div className="flex flex-col items-center">
                  <div className="truncate self-stretch text-center">
                    Continue with Email
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Terms and conditions */}
        <div className="w-auto max-w-[358px] mx-auto px-4 text-center font-satoshi text-terms leading-[21px]">
          <span className="text-vela-darker-variant">
            By continuing, you agree to our{" "}
          </span>
          <span className="text-vela-starlight-white">Terms of Service</span>
          <span className="text-vela-darker-variant"> and </span>
          <span className="text-vela-starlight-white">Privacy Policy.</span>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
