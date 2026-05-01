const CMS_URL = process.env.CMS_URL
const CMS_API_KEY = process.env.CMS_API_KEY

let cachedToken: string | null = null
let inflightLogin: Promise<string> | null = null

async function getAuthToken(): Promise<string> {
  if (cachedToken) return cachedToken
  if (inflightLogin) return inflightLogin

  inflightLogin = (async () => {
    const email = process.env.CMS_EMAIL
    const password = process.env.CMS_PASSWORD

    if (!email || !password) {
      throw new Error(
        'CMS_EMAIL and CMS_PASSWORD environment variables are required for authentication',
      )
    }

    const maxRetries = 4
    for (let attempt = 0; attempt < maxRetries; attempt++) {
      if (attempt > 0) {
        await new Promise((r) => setTimeout(r, 500 * attempt))
      }
      const res = await fetch(`${CMS_URL}/api/users/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      })
      if (res.ok) {
        const data = (await res.json()) as { token: string }
        cachedToken = data.token
        return cachedToken
      }
      if (attempt === maxRetries - 1) {
        throw new Error(`CMS login failed: ${res.status}`)
      }
    }
    throw new Error('CMS login failed: exhausted retries')
  })()

  try {
    return await inflightLogin
  } finally {
    inflightLogin = null
  }
}

export async function getCmsAuthHeaders(): Promise<HeadersInit> {
  if (CMS_API_KEY) {
    return { Authorization: `users API-Key ${CMS_API_KEY}` }
  }

  const token = await getAuthToken()
  return { Authorization: `JWT ${token}` }
}
