import UserDataTable from "./_components/users-datateble"
 
async function fetchUsers () {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  return response.json()
}



export default async function SalesPage() {

  const users = await fetchUsers()

    return (
      <div className="flex flex-col items-center justify-center">
          <h1>Users Page</h1>
        <div className="mt-4 mx-4">
          <UserDataTable users={users} />
        </div>
      </div>
    );
  }