import React from "react";
import LocalBarIcon from "@mui/icons-material/LocalBar";
import Battery2BarIcon from "@mui/icons-material/Battery2Bar";
import PoolIcon from "@mui/icons-material/Pool";
import AirlineSeatLegroomExtraIcon from "@mui/icons-material/AirlineSeatLegroomExtra";
import PeopleIcon from "@mui/icons-material/People";
import CakeIcon from "@mui/icons-material/Cake";
import ParkIcon from "@mui/icons-material/Park";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
const data = [
  {
    name: "Visa",
    icon: "https://www.visa.com/images/homepage/visa_logo.png",
  },
  {
    name: "Mastercard",
    icon: "https://www.mastercard.us/content/dam/public/mastercardcom/mea/za/logos/mc-logo-52.svg",
  },
  {
    name: "American Express",
    icon: "https://www.aexp-static.com/cdaas/one/statics/axp-static-assets/1.8.0/package/dist/img/logos/dls-logo-bluebox-solid.svg",
  },
  {
    name: "PayPal",
    icon: "https://www.paypalobjects.com/webstatic/mktg/logo/pp_cc_mark_111x69.jpg",
  },
  {
    name: "Apple Pay",
    icon: "https://www.apple.com/v/apple-pay/o/images/overview/logo_pay__ffyf3bxj6haq_large.png",
  },
  {
    name: "Google Pay",
    icon: "https://lh6.ggpht.com/1GvoCH8p1ATMYNHI9zYgQz-D1i874SKAr8gc1D9eREeG6iwdsdMCC-WK92dP-eEXxg5rynA",
  },

  {
    name: "Skrill",
    icon: "https://d1ic4altzx8ueg.cloudfront.net/finder-au/wp-uploads/2019/10/skrill_logo_360.jpg",
  },
  {
    name: "Neteller",
    icon: "https://www.neteller.com/etc/clientlibs/neteller/clientlibs/clientlib-static-1.0.0/images/svg/neteller.svg",
  },
  {
    name: "Venmo",
    icon: "https://s3.amazonaws.com/venmo/venmo_logo_blue.png",
  },
  {
    name: "Zelle",
    icon: "https://www.zellepay.com/themes/custom/zelle/logo.svg",
  },
  {
    name: "Square",
    icon: "https://squareup.com/ca/en/images/nav/logo.svg",
  },
  {
    name: "Stripe",
    icon: "https://stripe.com/img/v3/home/social.png",
  },
  {
    name: "Amazon Pay",
    icon: "https://d1.awsstatic.com/product-marketing/Payments/Amazon_Payments_Logo.f8c1142bb08a88c5a66a398f1408aabeecbc1b72.png",
  },
  {
    name: "Dwolla",
    icon: "https://cdn.dwolla.com/press/logos/dwolla-logo.svg",
  },
  {
    name: "Braintree",
    icon: "https://www.braintreepayments.com/assets/img/brand/braintree-logo.svg",
  },
  {
    name: "2Checkout",
    icon: "https://www.2checkout.com/static/images/logo.svg",
  },
  {
    name: "Authorize.Net",
    icon: "https://www.authorize.net/content/dam/anet_redesign/elements/global/anet_logo_800x400.svg",
  },
];
const Payments = () => {
  return (
    <div>
      <div>
        <div className="block max-w-sm p-6 bg-white  rounded-lg  hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            Payment methods
          </h5>
          <p className="font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
          <p className="font-normal mt-0 text-gray-700 dark:text-gray-400">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </p>
        </div>
      </div>

      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
          <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-12 md:space-y-0">
            {data.map((data: any) => (
              <div key={data.service}>
                <div className="flex items-center space-x-4">
                  <div className="flex-shrink-0 pb-5">
                    <img
                      src={data.icon}
                      style={{ width: "100px", height: "50px" }}
                    />
                  </div>
                  <div className="flex-1 min-w-0 border-b-2 pb-6">
                    <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                      {data.name}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Payments;
