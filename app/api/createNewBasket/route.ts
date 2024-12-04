import { fetcher } from "@/libs/fetcher"
import { cookies } from "next/headers"

import { env } from "@/env"

const publicApiKey = env.TEBEX_PUBLIC_API_KEY

export async function POST() {
  const response = await fetcher(`/accounts/${publicApiKey}/baskets`, {
    method: "POST",
    // body: {
    //   complete_url: `${APP_URL}/boutique?complete=true`,
    //   cancel_url: `${APP_URL}/boutique?cancel=true`
    // }
    body: {
      complete_url: `https://echofa.fr/boutique?complete=true`,
      cancel_url: `https://echofa.fr/boutique?complete=true`
    }
  })
  const cart = response?.data

  if (cart) {
    cookies().set("basketId", cart.ident)

    return Response.json({
      ok: true,
      basketId: cart.ident
    })
  } else {
    return Response.json({
      ok: false,
      msg: `Cart invalide (${cart})`
    })
  }
}
