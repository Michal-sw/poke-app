import { useKeycloak } from '@react-keycloak/web'
import { useCallback } from 'react'
import { MyButton } from '../styles/MultiUsageStyles'

const KeycloakLogin = () => {
  const { keycloak } = useKeycloak()

  const login = useCallback(() => {
    keycloak?.login();
  }, [keycloak])

  const logout = useCallback(() => {
    keycloak?.logout();
  }, [keycloak])

  return (
    <>
      <div style={{display: "flex", gap: "10px", justifyContent: 'center'}}>
        {keycloak.authenticated ?
          <>
            <h2>Logged in</h2>
            <MyButton type="button" onClick={logout}>
              Logout
            </MyButton>
          </> 
        : 
          <MyButton type="button" onClick={login}>
            Login
          </MyButton>
        }
      </div>
    </>
  )
}

export default KeycloakLogin;