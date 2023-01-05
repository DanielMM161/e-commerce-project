
interface IRegisterProps {
  goLogin: () => void
}

const Register = ({goLogin} : IRegisterProps) => {

  return(
    <>
      <span onClick={() => goLogin()}>Already have an account? -- Login to your account</span>
    </>
  )
}

export default Register