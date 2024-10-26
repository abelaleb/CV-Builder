import Sidebar from "./components/Sidebar";
import ContentArea from "./components/ContentArea";
function App() {
  return (
    <>
      <main className="grid grid-cols-4 h-screen ">
        <Sidebar />
        <ContentArea />
      </main>
    </>
  );
}

export default App;
