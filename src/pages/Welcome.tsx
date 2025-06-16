import React from "react";
import { useNavigate } from "react-router-dom";
import StarryBackground from "@/components/StarryBackground";
import VelaButton from "@/components/VelaButton";

const Welcome: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex flex-col justify-between items-center py-5 px-0 bg-vela-deep-space overflow-hidden">
      <StarryBackground />

      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col justify-between items-center min-h-screen py-5">
        {/* Logo/Brand */}
        <div className="w-20 h-20 flex-shrink-0 flex items-center justify-center">
          <svg
            width="68"
            height="30"
            viewBox="0 0 69 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="fill-vela-dream-blue"
          >
            <path d="M13.6433 11.4988C13.9656 13.5016 14.2285 15.4823 14.4858 17.464C14.6879 19.0205 14.937 20.5711 15.1268 22.1289C15.2304 22.9792 15.3468 23.8257 15.496 24.7405C15.7723 23.9626 15.9097 23.2215 16.0977 22.4949C16.8046 19.7626 17.5594 17.0441 18.3859 14.3453C19.098 12.0198 19.8129 9.69461 20.6886 7.42501C21.4093 5.55731 22.3147 3.78698 23.7465 2.34472C24.2157 1.87211 24.7603 1.53551 25.4763 1.5906C26.0648 1.63589 26.5565 2.03235 26.7024 2.61761C26.8293 3.1268 26.638 3.47516 26.0931 3.83689C25.258 4.39134 24.7135 5.20235 24.2124 6.04548C23.5644 7.1356 23.1051 8.3116 22.6609 9.49296C21.3416 13.0012 20.3158 16.6036 19.2854 20.2022C18.5806 22.6636 17.9584 25.1491 17.327 27.6309C17.1569 28.2993 17.0068 28.9688 16.7457 29.6101C16.4506 30.3345 15.9143 30.787 15.2806 30.7638C14.4983 30.7352 13.895 30.3786 13.6072 29.6337C13.2406 28.6851 13.0138 27.6961 12.8667 26.6882C12.7207 25.6877 12.5458 24.6915 12.4009 23.6909C12.2632 22.7398 12.1723 21.7814 12.0174 20.8333C11.7308 19.0797 11.5706 17.3094 11.2753 15.5558C11.1078 14.5615 11.0439 13.5453 10.8849 12.5457C10.6341 10.9683 10.4069 9.38467 9.84729 7.8748C9.69745 7.47056 9.52606 7.07812 9.29155 6.7162C8.75377 5.88625 7.99704 5.64525 7.06622 5.98382C6.12968 6.32447 5.47672 7.01521 4.90386 7.77643C4.12143 8.81612 3.62818 10.0066 3.24926 11.2458C3.1771 11.4818 3.09909 11.7167 3.00933 11.9464C2.78936 12.5094 2.39271 12.7845 1.92668 12.7093C1.33255 12.6133 0.929813 12.1572 0.90793 11.5529C0.870893 10.5302 1.1414 9.57448 1.5235 8.63806C2.0166 7.42962 2.67651 6.32568 3.63656 5.43825C4.94559 4.22825 6.44544 3.37031 8.27183 3.25638C9.47691 3.18121 10.4851 3.63237 11.2813 4.53997C12.2942 5.6945 12.7177 7.11534 13.0668 8.56398C13.2981 9.52374 13.4963 10.4913 13.6433 11.4988ZM20.32 9.08695C18.4124 14.4873 16.944 20.0172 15.5314 25.5657C15.3436 25.5118 15.3726 25.4063 15.3589 25.3227C15.1024 23.7603 14.9276 22.1869 14.7214 20.6176C14.5053 18.9727 14.2598 17.3316 14.0384 15.6873C13.7287 13.387 13.4404 11.0829 12.9259 8.81645C12.6048 7.40173 12.1999 6.01463 11.2757 4.85076C10.7165 4.14652 10.0212 3.65561 9.10715 3.50655C8.09263 3.34112 7.13714 3.54837 6.22405 3.96004C3.59443 5.14562 2.05204 7.23749 1.29728 9.96449C1.14779 10.5046 1.07949 11.0611 1.12539 11.6247C1.15991 12.0486 1.49957 12.4168 1.93877 12.5152C2.25398 12.5858 2.59738 12.3747 2.78948 11.9651C2.88265 11.7665 2.9465 11.5526 3.00849 11.3411C3.40674 9.98269 3.93421 8.67797 4.8075 7.55467C5.45769 6.71834 6.20596 5.97144 7.29637 5.70386C8.14421 5.49579 8.84691 5.73507 9.36127 6.43713C9.68687 6.88153 9.91258 7.38189 10.0905 7.90017C10.8635 10.1513 11.0831 12.5114 11.4282 14.8447C11.6955 16.652 11.8984 18.4687 12.1476 20.2787C12.4197 22.2558 12.6972 24.2324 13.0012 26.2047C13.1851 27.3974 13.38 28.5936 13.8861 29.7065C14.153 30.2933 14.6649 30.5569 15.2654 30.5664C15.8499 30.5757 16.2625 30.2251 16.4947 29.6914C16.7127 29.1901 16.8859 28.6726 17.0135 28.1396C17.7188 25.1952 18.4796 22.2651 19.3221 19.357C19.861 17.4965 20.415 15.64 20.9911 13.7907C21.7612 11.3183 22.5412 8.84591 23.7184 6.52786C24.3107 5.3614 25.0093 4.2649 26.1527 3.53423C26.4782 3.32625 26.6282 3.01373 26.5013 2.62432C26.3572 2.18196 26.0574 1.88827 25.5916 1.81051C25.1038 1.72906 24.67 1.86975 24.2775 2.17356C23.3828 2.86623 22.7748 3.7903 22.2056 4.74101C21.3991 6.08816 20.8378 7.54544 20.32 9.08695Z" />
          </svg>
        </div>

        {/* Hero Image Placeholder */}
        <div className="w-full max-w-[314px] h-[237px] flex-shrink-0 bg-gradient-to-br from-vela-constellation-50/20 to-vela-constellation-200/10 rounded-lg shadow-[0px_0px_44px_0px_rgba(255,255,255,0.27)] mb-8" />

        {/* Content Section */}
        <div className="flex-1 flex flex-col justify-end items-center text-center px-4 space-y-6">
          {/* Subtitle */}
          <div className="w-full text-vela-starlight-white text-center font-satoshi text-subtitle font-normal italic">
            "Navigate from Within"
          </div>

          {/* Main Title */}
          <div className="w-full text-vela-starlight-white text-center font-canela text-title-hero font-light">
            Welcome to Vela
          </div>

          {/* Description */}
          <div className="w-full text-vela-starlight-white text-center font-satoshi text-subtitle font-normal space-y-2">
            <div>
              the only meditation app built specifically for you. Personalized
              meditations built from your joy, identity, and dreams.
            </div>
            <div>Guided by AI, grounded in neuroscience.</div>
            <div className="font-bold">
              Set sail to manifest your dream life, with Vela.
            </div>
          </div>

          {/* CTA Section */}
          <div className="w-full flex flex-col items-center space-y-3 pt-4">
            {/* Get Started Button */}
            <div className="w-full px-4">
              <VelaButton
                onClick={() => navigate("/sign-up")}
                className="w-full"
                size="lg"
              >
                Get Started
              </VelaButton>
            </div>

            {/* Sign In Text */}
            <div className="text-center font-satoshi text-subtitle">
              <span className="text-vela-constellation-50">
                Already have an account?
              </span>
              <span className="text-vela-starlight-white"> Sign In</span>
            </div>
          </div>

          {/* Terms Text */}
          <div className="w-full max-w-[358px] text-center font-satoshi text-terms leading-[21px] pt-2">
            <span className="text-vela-darker-variant">
              By continuing, you agree to our{" "}
            </span>
            <span className="text-vela-starlight-white">Terms of Service</span>
            <span className="text-vela-darker-variant"> and </span>
            <span className="text-vela-starlight-white">Privacy Policy.</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
