import { BackButton } from '../../components/backButton/BackButton'
import './pageNotFound.css'

// Component for page not found error
export const PageNotFound = () => {

    return (
        <section className='page-not-found'>
            <div className="error-content">
                <h1>Sorry! It seems like that movie doesn&apos;t exist..🧐</h1>
                <h2>Try again 🥰</h2>
                <BackButton className={"backBtn"} text={"Back"} />
            </div>
        </section>
    )
}
