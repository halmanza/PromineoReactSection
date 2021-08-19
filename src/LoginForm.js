

// Intakes user data
export const LoginForm = (props) => {
  
    
    return (
        <div>
            <form className="mainInputForm">
            <label htmlFor="username">Username</label>
            <input type="text" name="username" onChange={props.onChangeUserName} autoFocus={true} autoComplete="true" />
            <label htmlFor="password">Password</label>
            <input type="password" name="password" onChange={props.onChangeUserPassword} autoFocus={true} autoComplete="true"/><br/>
            <button onClick={props.resetVal}>Reset</button>
            
            </form>
        </div>
    )
}

export default LoginForm;