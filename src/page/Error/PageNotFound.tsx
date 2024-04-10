import { Button } from "@/components/ui/button"
import { Link } from "react-router-dom"

const PageNotFound = () => {
    return (
        <>
            <div className="w-100 h-[100vh] flex justify-center items-center flex-col gap-4">
                <div className=" text-4xl">
                    404    Page Not Found
                </div>
                <Link to='/'>
                    <Button className=" font-bold">
                        Go to Home Page
                    </Button>
                </Link>

            </div>
        </>
    )
}

export default PageNotFound