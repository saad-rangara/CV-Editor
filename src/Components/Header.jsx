import { UserButton, SignInButton,SignUpButton ,SignIn,SignedOut, SignedIn} from "@clerk/nextjs"
import { auth } from "@clerk/nextjs/server";

export default function Header(){
    
    return(

        <> 
        <SignedIn>
        <UserButton />
        </SignedIn>
        <SignedOut>
        <SignInButton>Sign In</SignInButton>
        <SignUpButton>Sign Up</SignUpButton>
        </SignedOut>
        </>
    );
}