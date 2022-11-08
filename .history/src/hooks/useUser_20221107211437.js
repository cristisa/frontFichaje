import {useCallback} from 'react';
import Context from '../Components/context/UserContext';

export default function useUser () {
    const {jwt, setJWT} = userContext(Context)

    const login = useCallback((username, password) => {
        setJWT('test')
    }, [setJWT])
    return {
        isLogged: Boolean(jwt),
        login,
        logout
    }
}