import { BreadCrumbs } from "../../components"
import { useAppDispatch, useAppSelector } from "../../hooks"
import { logOut } from "../../redux/slices"
import { updateUser } from "../../services"

import { Info } from "./components"
import { StyledProfile } from "./styles"

const ProfilePage = () => {

    const dispatch = useAppDispatch()
    const userState = useAppSelector(store => store.user)
    const { user } = userState

    return (
        <>
            {user != null ? (
                <>
                    <BreadCrumbs links={[{ path: "/profile", name: "Profile" }]} />
                    <StyledProfile>
                        <div className="info-container">
                            <Info 
                                user={user}
                                logOut={() => dispatch(logOut())}
                                updateProfile={(newFields) => dispatch(updateUser(newFields))}
                            />
                        </div>
                    </StyledProfile>
                </>
            ) : null}
        </>
    )
}

export default ProfilePage