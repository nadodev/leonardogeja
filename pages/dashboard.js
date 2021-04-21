import useAuth from './../hooks/useAuth'
export default function dashboard() {
  const { user} = useAuth();
  return (
    <div>
      <h1>Painel Admin : {user?.email}</h1>
    </div>
  )
}
