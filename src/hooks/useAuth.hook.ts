import { useAppSelector } from "./redux.hook"

export const useAuth = () => {
  const userState = useAppSelector(store => store.user)
  return !!userState.user
}