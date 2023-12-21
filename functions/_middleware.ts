import mailchannelsPlugin from "@cloudflare/pages-plugin-mailchannels";

export const onRequest = mailchannelsPlugin({
  personalizations: [
    {
      to: [{ name: "Support", email: "braveryunbound@gmail.com" }],
    },
  ],
  from: { name: "Enquiry", email: "no-reply@braveryunbound.com" },
  respondWith: () =>
  new Response(null, {
    status: 302,
    headers: { Location: "/thank-you" },
  }),
});