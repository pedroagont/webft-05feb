import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams,
} from 'react-router-dom';
import './App.css';

function Home() {
  return (
    <header>
      <h1>Home! 🏡</h1>
    </header>
  );
}

function About() {
  return (
    <header>
      <h1>About 🔎</h1>
    </header>
  );
}

function Products() {
  return (
    <header>
      <h1>Products 🗒</h1>
      <ul>
        <li>
          <Link to='/products/1'>Product 1</Link>
        </li>
        <li>
          <Link to='/products/2'>Product 2</Link>
        </li>
        <li>
          <Link to='/products/3'>Product 3</Link>
        </li>
      </ul>
    </header>
  );
}

function ProductsShow() {
  const { id } = useParams();

  // Fetch data from this item
  // useEffect(() => {
  //   fetch(`/api/products/${id}`)
  //   .then(res => res.json())
  //   .then(data => setProductData(data.results))
  // }, [])

  return (
    <header>
      <h1>Product no: {id}</h1>
    </header>
  );
}

function Profile() {
  return (
    <header>
      <h1>Profile 👨‍💻</h1>
    </header>
  );
}

function Navigation() {
  return (
    <nav>
      <div>My App!</div>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/products'>Products</Link>
        </li>
        <li>
          <Link to='/profile'>Profile</Link>
        </li>
      </ul>
    </nav>
  );
}

function App() {
  // const [ data, setData] = useReducer(reducer, initialState)
  // const { state, handleLike, fetchUserProducts } = useApplicationData()

  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/products' element={<Products />} />
        <Route path='/products/:id' element={<ProductsShow />} />
        <Route path='/profile' element={<Profile />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
