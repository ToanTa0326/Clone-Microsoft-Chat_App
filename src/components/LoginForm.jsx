import axios from "axios"
import { useState } from "react"

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        const authObject = {'Project-ID': "58b39fbe-0b5e-45a6-9777-ab21fef6f973", 'User-Name': username, 'User-Secret': password}
        
        try {
            await axios.get('https://api.chatengine.io/chats/', {headers: authObject})    
            localStorage.setItem('username', username)
            localStorage.setItem('password', password)
            window.location.reload()
        } catch (error) {
            setError('Oops, incorrect credentials.')
        }
    }


  return (
    <div className="wrapper">
        <div className="form">
            <h1 className="title">Chat Application</h1>
            <form onSubmit={handleSubmit}>
                <input className="input" type="text" value={username} onChange={(e) => setUsername(e.target.value)} required />
                <input className="input" type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <div align="center">
                    <button type="submit" className="button">
                        <span>Start Chatting</span>
                    </button>
                </div>
                <h2 className="error">{error}</h2>
            </form>
        </div>
    </div>
  )
}

export default LoginForm