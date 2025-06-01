import { PageBreadcrumb } from "@/components/ui/page-breadcrumb"

export default function HeroSection() {
  const breadcrumbItems = [{ label: "Home", href: "/" }, { label: "About Us" }]

  return (
    <section
      className="relative overflow-hidden min-h-[400px]"
      style={{
        background: `linear-gradient(to bottom right, var(--Primary-400, #5AADFF) 0%, var(--Primary-100, #DAECFF) 70%) bottom right / 50% 50% no-repeat, 
        linear-gradient(to bottom left, var(--Primary-400, #5AADFF) 0%, var(--Primary-100, #DAECFF) 70%) bottom left / 50% 50% no-repeat, 
        linear-gradient(to top left, var(--Primary-400, #5AADFF) 0%, var(--Primary-100, #DAECFF) 70%) top left / 50% 50% no-repeat, 
        linear-gradient(to top right, var(--Primary-400, #5AADFF) 0%, var(--Primary-100, #DAECFF) 70%) top right / 50% 50% no-repeat,
        var(--Primary-100, #DAECFF)`,
      }}
    >
      {/* Yellow curved design element */}
      <div className="absolute top-0 right-0 w-1/2 h-full">
        <div className="relative w-full h-full">
          <div className="absolute -left-32 top-0 w-96 h-full bg-secondary-400 transform rotate-12 origin-top-left"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
        {/* Breadcrumb */}
        <div className="mb-8">
          <PageBreadcrumb items={breadcrumbItems} />
        </div>

        {/* Main heading container */}
        <div
          className="flex flex-col items-center self-stretch"
          style={{
            padding: "0px 248.17px 0px 248.16px",
          }}
        >
          <h1
            className="font-bold"
            style={{
              color: "var(--Greyscale-50, #F6F6F6)",
              textAlign: "center",
              textShadow: "0px 0px 0px rgba(0, 0, 0, 0.10)",
              fontFamily: "Poppins",
              fontSize: "64px",
              fontStyle: "normal",
              fontWeight: 700,
              lineHeight: "96px",
              letterSpacing: "-1.76px",
            }}
          >
            About{" "}
            <span
              style={{
                color: "var(--Primary-700, #1656DF)",
                fontFamily: "Poppins",
                fontSize: "64px",
                fontStyle: "normal",
                fontWeight: 700,
                lineHeight: "96px",
                letterSpacing: "-1.76px",
              }}
            >
              Bright Arc
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}
