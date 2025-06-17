import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreateAccount: React.FC = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);

    // Navigate to trial works page on successful registration
    navigate("/how-trial-works");
  };

  return (
    <div
      className="relative min-h-screen flex flex-col bg-vela-deep-space overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage:
          "url(https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fe2b1054892dc42b29c13bce357ce3603)",
      }}
    >
      {/* Content container */}
      <div className="relative z-10 w-full max-w-sm mx-auto flex flex-col justify-between items-center min-h-screen">
        {/* Back arrow - top left */}
        <button
          onClick={() => navigate("/sign-up")}
          className="absolute left-4 top-6 w-6 h-6 transition-all hover:opacity-80 z-20"
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

        {/* Logo at top */}
        <img
          loading="lazy"
          alt="Vela logo"
          src="https://cdn.builder.io/api/v1/image/assets%2Fb3f92eb613934d858f85eaa13a3f8306%2Fd09c0df2054c4a9bb9600a09bffd6dd2"
          className="aspect-square object-cover object-center w-auto mt-5 min-h-5 min-w-5 overflow-hidden max-w-[91px]"
        />

        {/* Main form container */}
        <div className="flex flex-col justify-center items-center flex-1 self-stretch">
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-stretch self-stretch"
          >
            {/* Title */}
            <div className="flex flex-col items-center self-stretch px-4 pt-5 pb-3">
              <h1 className="self-stretch text-vela-starlight-white text-center font-heading text-title-hero font-light">
                Create an account
              </h1>
            </div>

            {/* First Name Field */}
            <div className="flex max-w-[480px] px-4 py-3 items-end content-end gap-4 self-stretch flex-wrap">
              <div className="flex min-w-[160px] flex-col items-start flex-1">
                <div className="flex pb-2 flex-col items-start self-stretch">
                  <label className="self-stretch text-vela-starlight-white font-satoshi text-subtitle font-normal">
                    First name
                  </label>
                </div>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  className="flex h-12 px-4 items-center self-stretch rounded-xl border border-[#3D4554] bg-vela-dream-blue/10 backdrop-blur-sm text-vela-starlight-white font-satoshi placeholder:text-vela-starlight-white/60 focus:outline-none focus:ring-2 focus:ring-vela-dream-blue/50"
                  placeholder=""
                />
              </div>
            </div>

            {/* Last Name Field */}
            <div className="flex max-w-[480px] px-4 py-3 items-end content-end gap-4 self-stretch flex-wrap">
              <div className="flex min-w-[160px] flex-col items-start flex-1">
                <div className="flex pb-2 flex-col items-start self-stretch">
                  <label className="self-stretch text-vela-starlight-white font-satoshi text-subtitle font-normal">
                    Last name
                  </label>
                </div>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  className="flex h-12 px-4 items-center self-stretch rounded-xl border border-[#3D4554] bg-vela-dream-blue/10 backdrop-blur-sm text-vela-starlight-white font-satoshi placeholder:text-vela-starlight-white/60 focus:outline-none focus:ring-2 focus:ring-vela-dream-blue/50"
                  placeholder=""
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="flex max-w-[480px] px-4 py-3 items-end content-end gap-4 self-stretch flex-wrap">
              <div className="flex min-w-[160px] flex-col items-start flex-1">
                <div className="flex pb-2 flex-col items-start self-stretch">
                  <label className="self-stretch text-vela-starlight-white font-satoshi text-subtitle font-normal">
                    Email address
                  </label>
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="flex h-12 px-4 items-center self-stretch rounded-xl border border-[#3D4554] bg-vela-dream-blue/10 backdrop-blur-sm text-vela-starlight-white font-satoshi placeholder:text-vela-starlight-white/60 focus:outline-none focus:ring-2 focus:ring-vela-dream-blue/50"
                  placeholder=""
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="flex max-w-[480px] px-4 py-3 items-end content-end gap-4 self-stretch flex-wrap">
              <div className="flex min-w-[160px] flex-col items-start flex-1">
                <div className="flex pb-2 flex-col items-start self-stretch">
                  <label className="self-stretch text-vela-starlight-white font-satoshi text-subtitle font-normal">
                    Password (8+ Characters)
                  </label>
                </div>
                <div className="flex items-start flex-1 self-stretch rounded-xl relative">
                  <input
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={formData.password}
                    onChange={handleInputChange}
                    className="flex h-14 px-4 pr-12 items-center flex-1 rounded-xl border border-[#3D4554] bg-vela-dream-blue/10 backdrop-blur-sm text-vela-starlight-white font-satoshi placeholder:text-vela-starlight-white/60 focus:outline-none focus:ring-2 focus:ring-vela-dream-blue/50"
                    placeholder=""
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 w-6 h-6 flex justify-center items-center"
                  >
                    <svg
                      width="24"
                      height="16"
                      viewBox="0 0 24 16"
                      fill="none"
                      className="w-6 h-4 fill-[#9EA6B8]"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M23.1853 7.69625C23.1525 7.62219 22.3584 5.86062 20.5931 4.09531C18.2409 1.74312 15.27 0.5 12 0.5C8.73 0.5 5.75906 1.74312 3.40687 4.09531C1.64156 5.86062 0.84375 7.625 0.814687 7.69625C0.728449 7.89022 0.728449 8.11165 0.814687 8.30562C0.8475 8.37969 1.64156 10.1403 3.40687 11.9056C5.75906 14.2569 8.73 15.5 12 15.5C15.27 15.5 18.2409 14.2569 20.5931 11.9056C22.3584 10.1403 23.1525 8.37969 23.1853 8.30562C23.2716 8.11165 23.2716 7.89022 23.1853 7.69625ZM12 14C9.11438 14 6.59344 12.9509 4.50656 10.8828C3.65029 10.0313 2.9218 9.06027 2.34375 8C2.92165 6.93963 3.65015 5.9686 4.50656 5.11719C6.59344 3.04906 9.11438 2 12 2C14.8856 2 17.4066 3.04906 19.4934 5.11719C20.3514 5.9684 21.0815 6.93942 21.6609 8C20.985 9.26188 18.0403 14 12 14ZM12 3.5C9.51472 3.5 7.5 5.51472 7.5 8C7.5 10.4853 9.51472 12.5 12 12.5C14.4853 12.5 16.5 10.4853 16.5 8C16.4974 5.51579 14.4842 3.50258 12 3.5ZM12 11C10.3431 11 9 9.65685 9 8C9 6.34315 10.3431 5 12 5C13.6569 5 15 6.34315 15 8C15 9.65685 13.6569 11 12 11Z"
                        fill="#9EA6B8"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Submit Button */}
            <div className="flex flex-col items-start self-stretch">
              <div className="flex px-4 py-3 items-start self-stretch">
                <button
                  type="submit"
                  className="flex h-12 min-w-[84px] max-w-[480px] px-5 justify-center items-center flex-1 rounded-vela bg-vela-darker-variant text-vela-starlight-white font-satoshi font-bold text-subtitle transition-all hover:bg-opacity-90"
                >
                  <div className="flex flex-col items-center">
                    <div className="truncate self-stretch text-center">
                      Continue with Email
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </form>
        </div>

        {/* Bottom section */}
        <div className="flex flex-col items-center pb-5">
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
    </div>
  );
};

export default CreateAccount;
