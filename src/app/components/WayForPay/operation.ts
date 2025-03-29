"use server";

import { Wayforpay } from "wayforpay-ts-integration";

export async function getForm() {
  const wayforpay = new Wayforpay({
    merchantLogin: process.env.MERCHANT_ACCOUNT!,
    merchantSecret: process.env.MERCHANT_SECRET!,
  });

  const form = await wayforpay.purchase(
    [
      {
        quantity: 1,
        product: {
          name: "Подарунковий сертифікат.",
          price: 1,
        },
      },
    ],
    {
      domain: process.env.MERCHANT_DOMAIN!,
      currency: "EUR",
      language: "UA",
      //   paymentSystems: ["card", "googlePay", "applePay", "privat24"],
      orderReference: `order-${Date.now()}`,
      returnUrl: process.env.LINK_CALENDLY!,
    },
  );

  return form;
}
