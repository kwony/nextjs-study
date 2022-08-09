import { useEffect, useState } from "react";
import axios from "../../../node_modules/axios/index";
import { useRouter } from "../../../node_modules/next/router";

type Props = {
    isbn: string,
}

type Book = {
    title: string,
    url: string,
    image: string
}

const BookPage = ({ isbn }: Props) => {
    const [book, setBook] = useState<Book>(null)

    useEffect(() => {
        axios.get(`https://api.itbook.store/1.0/books/${isbn}`)
            .then((res) => {
                setBook(res.data)
            })

    }, [])

    return (
        <div >
            {
                book &&
                <div style={{
                    display: "flex",
                    alignItems: "center"
                }}>
                    <img src={book.image} />
                    {book.title}
                </div>
            }

        </div>
    )

}

export const getServerSideProps = async ({ params }: any) => {

    return {
        props: {
            isbn: params.id
        }
    }
}

export default BookPage;