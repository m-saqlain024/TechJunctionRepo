'use client'
import { useState } from "react";
import { CheckIcon } from "@heroicons/react/20/solid";

const pricing = {
  frequencies: [
    { value: "monthly", label: "Monthly", priceSuffix: "/month" },
    { value: "annually", label: "Annually", priceSuffix: "/year" },
  ],
  tiers: [
    {
      name: "Free",
      //   id: "tier-hobby",
      href: "#",
      price: { monthly: "$15" },
      description: "Try out the API and app without any strings attached.",
      features: [
        "API access",
        "Up to 300 credits",
        "No daily limit",
        "Free forever",
      ],
      //   mostPopular: false,
    },
    {
      name: "Hobby",
      //   id: "tier-freelancer",
      href: "#",
      price: { monthly: "$30" },
      description: "Enhance your projects with easy image extraction.",
      features: [
        "API access",
        "Up to 3,000 credits",
        "No daily limit",
        "No Ads",
        "Priority support",
      ],
    },
    {
      name: "Startup",
      href: "#",
      price: { monthly: "$29" },
      description: "Empower your vision with affordable image extraction.",
      features: [
        "API access",
        "Up to 12,000 credits",
        "No daily limit",
        "No Ads",
        "Priority support",
      ],
    },
    {
      name: "Business",
      href: "#",
      price: { monthly: "$99", annually: "$864" },
      description:
        "Scale your operations with powerful image extraction tools.",
      features: [
        "Unlimited products",
        "Unlimited subscribers",
        "Advanced analytics",
        "1-hour, dedicated support response time",
        "Marketing automations",
        "Custom reporting tools",
      ],
      mostPopular: false,
    },
  ],
};

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {

  const [frequency, setFrequency] = useState(pricing.frequencies[0]);

  return (
    <div className="bg-white">
      <main>
        <div className="mx-auto mt-16 max-w-7xl px-6 sm:mt-32 lg:px-8">
          <div className="isolate mx-auto mt-10 grid max-w-md grid-cols-1 gap-8 md:max-w-2xl md:grid-cols-2 lg:max-w-4xl xl:mx-0 xl:max-w-none xl:grid-cols-4">
            {pricing.tiers.map((tier) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.mostPopular
                    ? "ring-2 ring-indigo-600"
                    : "ring-1 ring-gray-200",
                  "rounded-3xl p-8"
                )}
              >
                <h2
                  className={classNames(
                    tier.mostPopular ? "text-indigo-600" : "text-gray-900",
                    "text-lg font-semibold leading-8"
                  )}
                >
                  {tier.name}
                </h2>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                  {tier.description}
                </p>
                <p className="mt-6 flex items-baseline gap-x-1">
                  <span className="text-4xl font-bold tracking-tight text-gray-900">
                    {tier.price[frequency.value]}
                  </span>
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    {frequency.priceSuffix}
                  </span>
                </p>
                <ul
             
                  className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
                >
                  {tier.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <CheckIcon
                        className="h-6 w-5 flex-none text-indigo-600"
                  
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </main>    
    </div>
  );
}
