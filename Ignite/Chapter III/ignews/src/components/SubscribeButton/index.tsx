import { useSession, signIn } from 'next-auth/client'
import { api } from '../../services/api'
import { getStripeJs } from '../../services/stripe-js'
import { useRouter } from 'next/router'
import styles from './styles.module.scss'

interface SubscribeButtonProps {
  priceId: String;
}

export function SubscribeButton({ priceId }: SubscribeButtonProps) {
  const [session] = useSession()
  const router = useRouter()

  console.log(session)

  async function handleSubscrible() {
    if (!session) {
      signIn('github')
      return
    }

    if (session?.activeSubscription) {
        router.push('/posts')
        return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()

      await stripe.redirectToCheckout({ sessionId })
    } catch (err) {
      alert(err.message)
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscrible}
    >
      Subscribe Now
    </button>
  )
}