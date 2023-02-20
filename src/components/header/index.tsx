import Link from "next/link"
import ShoppingCartButton from "../shopping-cart-button"

const Header = () => {
  return (
    <header className="flex flex-row justify-between items-center">
      <h1 className="text-xl font-semibold">
        <Link href="/">
          { process.env.APP_NAME }
        </Link>
      </h1>
      <div>
        <ShoppingCartButton />
      </div>
    </header>
  )
}

export default Header