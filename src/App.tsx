import MainLayout from "./ui/main-layout/MainLayout.tsx";
import Timer from "./components/timer/Timer.tsx";
import UserList from "./components/user-list/UserList.tsx";

function App() {

    return (
    <MainLayout>
        <h1 className="m-auto p-4 font-medium text-3xl">Task 1</h1>
        <Timer/>

        <h1 className="m-auto p-4 font-medium text-3xl">Task 2</h1>
        <UserList/>

        <br/>
        <br/>
        <br/>
        <br/>
        <br/>

    </MainLayout>

    )
}
export default App
