import { useKeycloak } from '@react-keycloak/web'
import { useCallback } from 'react'
import { MyButton } from '../styles/MultiUsageStyles'

const LoginInfo = () => {
  const { keycloak } = useKeycloak()

  const logout = useCallback(() => {
    keycloak?.logout();
  }, [keycloak])

  return (
    <>
      <div style={{position:'fixed', bottom:'15px', right:'15px' ,display: "flex", gap: "10px", justifyContent: 'center'}}>
        {keycloak.authenticated ?
          <>
            <h2>Logged in</h2>
            <MyButton type="button" onClick={logout}>
              Logout
            </MyButton>
          </> 
        : null
        }
      </div>
    </>
  )
}

export default LoginInfo;