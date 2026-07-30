import MainLayout from "./components/main_layout/MainLayout";
import Provider from "./components/provider/Provider";

function App() {
  return (
    <Provider>
      <div className="grid grid-rows-[repeat(4,auto)] min-h-screen max-w-screen container">
        <MainLayout />
      </div>
    </Provider>
  );
}

export default App;
