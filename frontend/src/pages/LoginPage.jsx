import MyLoginForm from '../components/MyLoginForm'
import SignupForm from '../components/SignupForm'
import useLoginStore from '../store/loginStore'

export default function LoginPage() {
    const {isLogin} = useLoginStore()
  return (
    <>
    {
        isLogin ? <MyLoginForm/> : <SignupForm/>
    }
    </>
  )
}
