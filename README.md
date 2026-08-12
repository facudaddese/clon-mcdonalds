
# McDonald's Clone

Clon del e-commerce de McDonald's desarrollado en React + TypeScript, con carrito de compras, navegación por categorías y diseño completamente responsive. [Ver sitio](https://clon-mcdonalds.vercel.app/)

## Tecnologías

-   **React** (Vite)
-   **TypeScript**
-   **Tailwind CSS**
-   **React Router DOM**
-   **Context API**

## Librerías

-   `react-hot-toast`
-   `react-spinners` (`BarLoader`)
-   `aos`

## Hooks utilizados

**De React:**

-   `useState`
-   `useEffect`
-   `useReducer`
-   `useContext`

**De React Router:**

-   `useParams`
-   `useLocation`

**Custom hooks:**

-   `usePromise`
-   `useCart` — expone el carrito y sus acciones (agregar, eliminar, aumentar/disminuir cantidad, vaciar), gestionando el estado internamente con `useReducer`
-   `useAppContext` — encapsula el `useContext` del Context global, validando en tiempo de ejecución que se use dentro del `Provider`

## Tipado (TypeScript)

-   Tipos centralizados en `types/Product.ts`: `Product` (catálogo), `CartItem` (producto dentro del carrito, con `quantity`) e `Id` (identificador de producto vía `Pick<Product, "id">`)
-   Interfaces de props por componente (`CardProps`, `HeaderProps`, `CartProps`, etc.), reutilizando los tipos centralizados en vez de redefinirlos
-   `Context` tipado con generics (`createContext<ContextInterface | undefined>`) y acceso seguro mediante el custom hook `useAppContext`
-   Funciones y hooks con retorno explícito (`Promise<Product[]>`, `UsePromiseResult`, etc.)

## Estado del carrito

-   Lógica del carrito manejada con `useReducer`: `cartReducer` centraliza las transiciones de estado (`add`, `increase`, `decrement`, `delete`, `empty`) a partir de acciones tipadas (`CartActions`)
-   Persistencia en `localStorage`: el estado inicial se recupera de forma perezosa al montar, y se sincroniza en cada cambio del carrito

## Funcionalidades

-   Carrito de compras con agregar, eliminar y modificar cantidades
-   Navegación por categorías (McCombos, Hamburguesas, Postres, Bebidas, etc.)
-   Diseño responsive, con navegación adaptada a mobile (scroll horizontal en pantallas chicas)
-   Barra de navegación con comportamiento sticky dinámico según scroll
-   Notificaciones (toasts) al modificar el carrito
-   Loader mientras se cargan los productos

## Autor

Desarrollado por **Facundo D'Addese** — Estudiante de Licenciatura en Sistemas – Universidad Nacional de Lanús.

[CV](https://drive.google.com/file/d/1dplrGFP7DhLXLQCuj2sA-66sAV0yER_g/view) | [facundo.daddese19@gmail.com](mailto:facundo.daddese19@gmail.com)
