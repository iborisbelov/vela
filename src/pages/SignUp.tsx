import React from "react";
import { useNavigate } from "react-router-dom";

const SignUp: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="relative min-h-screen flex flex-col bg-vela-deep-space overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fb80a04890b9742d5aba8e99736911cbf)",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col min-h-screen">
        {/* Header section */}
        <div className="flex flex-col items-stretch">
          {/* Title section */}
          <div className="flex flex-col items-center self-stretch px-4 pt-5 pb-3">
            <h1 className="self-stretch text-vela-starlight-white text-center font-canela text-title-hero font-light">
              Continue to sign up
            </h1>
          </div>

          {/* Subtitle section */}
          <div className="flex flex-col items-center self-stretch px-4 pt-1 pb-3">
            <p className="self-stretch text-vela-starlight-white text-center font-satoshi text-subtitle font-normal">
              If you already have an account, we'll log you in.
            </p>
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
              <button className="flex h-10 min-w-[84px] max-w-[480px] px-4 justify-center items-center self-stretch rounded-[20px] text-vela-starlight-white font-satoshi font-bold text-subtitle transition-all hover:bg-vela-starlight-white hover:bg-opacity-10">
                <div className="flex flex-col items-center">
                  <div className="truncate self-stretch text-center">
                    Continue with Email
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom section with terms and back button */}
        <div className="flex-1 flex flex-col justify-end pb-5">
          {/* Terms and conditions */}
          <div className="w-full max-w-[358px] mx-auto px-4 text-center font-satoshi text-terms leading-[21px]">
            <span className="text-vela-darker-variant">
              By continuing, you agree to our{" "}
            </span>
            <span className="text-vela-starlight-white">Terms of Service</span>
            <span className="text-vela-darker-variant"> and </span>
            <span className="text-vela-starlight-white">Privacy Policy.</span>
          </div>

          {/* Logo and back button */}
          <div className="relative w-20 h-20 mx-auto mt-7">
            {/* Vela Logo */}
            <svg
              className="w-[68px] h-[30px] absolute left-[6px] top-[25px] fill-vela-dream-blue"
              width="69"
              height="31"
              viewBox="0 0 69 31"
            >
              <path
                d="M13.6433 11.4988C13.9656 13.5016 14.2285 15.4823 14.4858 17.464C14.6879 19.0205 14.937 20.5711 15.1268 22.1289C15.2304 22.9792 15.3468 23.8257 15.496 24.7405C15.7723 23.9626 15.9097 23.2215 16.0977 22.4949C16.8046 19.7626 17.5594 17.0441 18.3859 14.3453C19.098 12.0198 19.8129 9.69461 20.6886 7.42501C21.4093 5.55731 22.3147 3.78698 23.7465 2.34472C24.2157 1.87211 24.7603 1.53551 25.4763 1.5906C26.0648 1.63589 26.5565 2.03235 26.7024 2.61761C26.8293 3.1268 26.638 3.47516 26.0931 3.83689C25.258 4.39134 24.7135 5.20235 24.2124 6.04548C23.5644 7.1356 23.1051 8.3116 22.6609 9.49296C21.3416 13.0012 20.3158 16.6036 19.2854 20.2022C18.5806 22.6636 17.9584 25.1491 17.327 27.6309C17.1569 28.2993 17.0068 28.9688 16.7457 29.6101C16.4506 30.3345 15.9143 30.787 15.2806 30.7638C14.4983 30.7352 13.895 30.3786 13.6072 29.6337C13.2406 28.6851 13.0138 27.6961 12.8667 26.6882C12.7207 25.6877 12.5458 24.6915 12.4009 23.6909C12.2632 22.7398 12.1723 21.7814 12.0174 20.8333C11.7308 19.0797 11.5706 17.3094 11.2753 15.5558C11.1078 14.5615 11.0439 13.5453 10.8849 12.5457C10.6341 10.9683 10.4069 9.38467 9.84729 7.8748C9.69745 7.47056 9.52606 7.07812 9.29155 6.7162C8.75377 5.88625 7.99704 5.64525 7.06622 5.98382C6.12968 6.32447 5.47672 7.01521 4.90386 7.77643C4.12143 8.81612 3.62818 10.0066 3.24926 11.2458C3.1771 11.4818 3.09909 11.7167 3.00933 11.9464C2.78936 12.5094 2.39271 12.7845 1.92668 12.7093C1.33255 12.6133 0.929813 12.1572 0.90793 11.5529C0.870893 10.5302 1.1414 9.57448 1.5235 8.63806C2.0166 7.42962 2.67651 6.32568 3.63656 5.43825C4.94559 4.22825 6.44544 3.37031 8.27183 3.25638C9.47691 3.18121 10.4851 3.63237 11.2813 4.53997C12.2942 5.6945 12.7177 7.11534 13.0668 8.56398C13.2981 9.52374 13.4963 10.4913 13.6433 11.4988ZM20.32 9.08695C18.4124 14.4873 16.944 20.0172 15.5314 25.5657C15.3436 25.5118 15.3726 25.4063 15.3589 25.3227C15.1024 23.7603 14.9276 22.1869 14.7214 20.6176C14.5053 18.9727 14.2598 17.3316 14.0384 15.6873C13.7287 13.387 13.4404 11.0829 12.9259 8.81645C12.6048 7.40173 12.1999 6.01463 11.2757 4.85076C10.7165 4.14652 10.0212 3.65561 9.10715 3.50655C8.09263 3.34112 7.13714 3.54837 6.22405 3.96004C3.59443 5.14562 2.05204 7.23749 1.29728 9.96449C1.14779 10.5046 1.07949 11.0611 1.12539 11.6247C1.15991 12.0486 1.49957 12.4168 1.93877 12.5152C2.25398 12.5858 2.59738 12.3747 2.78948 11.9651C2.88265 11.7665 2.9465 11.5526 3.00849 11.3411C3.40674 9.98269 3.93421 8.67797 4.8075 7.55467C5.45769 6.71834 6.20596 5.97144 7.29637 5.70386C8.14421 5.49579 8.84691 5.73507 9.36127 6.43713C9.68687 6.88153 9.91258 7.38189 10.0905 7.90017C10.8635 10.1513 11.0831 12.5114 11.4282 14.8447C11.6955 16.652 11.8984 18.4687 12.1476 20.2787C12.4197 22.2558 12.6972 24.2324 13.0012 26.2047C13.1851 27.3974 13.38 28.5936 13.8861 29.7065C14.153 30.2933 14.6649 30.5569 15.2654 30.5664C15.8499 30.5757 16.2625 30.2251 16.4947 29.6914C16.7127 29.1901 16.8859 28.6726 17.0135 28.1396C17.7188 25.1952 18.4796 22.2651 19.3221 19.357C19.861 17.4965 20.415 15.64 20.9911 13.7907C21.7612 11.3183 22.5412 8.84591 23.7184 6.52786C24.3107 5.3614 25.0093 4.2649 26.1527 3.53423C26.4782 3.32625 26.6282 3.01373 26.5013 2.62432C26.3572 2.18196 26.0574 1.88827 25.5916 1.81051C25.1038 1.72906 24.67 1.86975 24.2775 2.17356C23.3828 2.86623 22.7748 3.7903 22.2056 4.74101C21.3991 6.08816 20.8378 7.54544 20.32 9.08695Z"
                fill="#C9DFF4"
              />
            </svg>

            {/* Back Arrow */}
            <button
              onClick={() => navigate("/")}
              className="absolute left-0 top-[26px] w-6 h-6 transition-all hover:opacity-80"
            >
              <svg
                className="w-[18px] h-4 fill-vela-starlight-white"
                width="18"
                height="16"
                viewBox="0 0 18 16"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18 8C18 8.41421 17.6642 8.75 17.25 8.75H2.56031L8.03063 14.2194C8.32368 14.5124 8.32368 14.9876 8.03063 15.2806C7.73757 15.5737 7.26243 15.5737 6.96937 15.2806L0.219375 8.53063C0.0785422 8.38995 -0.000590086 8.19906 -0.000590086 8C-0.000590086 7.80094 0.0785422 7.61005 0.219375 7.46937L6.96937 0.719375C7.26243 0.426319 7.73757 0.426319 8.03063 0.719375C8.32368 1.01243 8.32368 1.48757 8.03063 1.78062L2.56031 7.25H17.25C17.6642 7.25 18 7.58579 18 8Z"
                  fill="#F2EFEA"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
