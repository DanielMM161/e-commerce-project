import { BreadCrumbs } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { logOut } from "../../redux/slices"
import { updateUser } from "../../services"

import { Info } from "./components"
import { StyledProfile } from "./styles"
import { useNavigate } from 'react-router';

const ProfilePage = () => {

    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const userState = useAppSelector(store => store.user)
    const { user } = userState

    function handleLogOut() {
        dispatch(logOut())
        navigate('/')
    }

    return (
        <>
            {user != null ? (
                <StyledProfile>
                    <div className="container">
                        <BreadCrumbs links={[{ path: "/profile", name: "Profile" }]} />                        
                        <div className="info-container">
                            <Info 
                                user={user}
                                logOut={() => handleLogOut()}
                                updateProfile={(newFields) => dispatch(updateUser(newFields))}
                            />
                        </div>
                    </div>
                </StyledProfile>
            ) : null}
        </>
    )
}

export default ProfilePage