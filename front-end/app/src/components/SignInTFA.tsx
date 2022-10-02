import React from 'react'
import SignInTwoFADialog from './SignIn/SignInTwoFADialog'
import TwoFADialog from './SignIn/SignInTwoFADialog'
import { SignInTwoFAInput } from './SignIn/SignInTwoFAInput'

const SignInTFA = () => {
	return (
		<SignInTwoFADialog >
			<SignInTwoFAInput/>
		</SignInTwoFADialog>
	)
}

export default SignInTFA