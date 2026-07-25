import MainLayout from "./components/main_layout/MainLayout";
import Provider from "./components/provider/Provider";

/*
1- hacer funcionar el click de la flecha de mcCombos
2- hacer funcionar el click de la flecha de para acompañar
3- agregar productos al carrito
*/

function App() {
  return (
    <Provider>
      <MainLayout />
    </Provider>
  );
}

export default App;
