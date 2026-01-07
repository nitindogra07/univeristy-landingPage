export default function Header() {
  return (
    <div className="hidden md:flex w-full bg-primary text-white text-sm">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 py-2">
        
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <span className="font-medium whitespace-nowrap">
            Have any questions?
          </span>

          {/* Phone */}
          <a
            href="tel:+917042009545"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
            <span className="font-medium">+91 70420 09545</span>
          </a>

          {/* Email */}
          <a
            href="mailto:admissions@embryologytraining.in,info@embryologytraining.in"
            className="flex items-center gap-2 hover:opacity-80 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span className="font-medium whitespace-nowrap">
              admissions@embryologytraining.in | info@embryologytraining.in
            </span>
          </a>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-6">
          <span className="font-medium">Brochure Download</span>
          <a
            href="/registration"
            className="font-medium hover:underline underline-offset-4"
          >
            Registration Form
          </a>
        </div>

      </div>
    </div>
  )
}
