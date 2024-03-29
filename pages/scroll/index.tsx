import React, { useEffect, useState } from "react";
import { useRouter } from "../../node_modules/next/router";
import { useSelector } from '../../store'

import axios from "axios";

const Scroll = () => {

    interface book {
        image: string,
        isbn13: string,
        title: string,
    }

    const [books, setBooks] = useState<Array<book>>([])
    const restorePage = useSelector((state) => state.restorePage.path)
    const router = useRouter()

    useEffect(() => {
        const value = JSON.parse(sessionStorage.getItem(booksKey()))
        if (restorePage === router.asPath && value !== null && value.length > 0) {
            setBooks(value)
        } else {
            axios.get('https://api.itbook.store/1.0/new')
                .then((res) => {
                    setBooks(res.data.books)
                })
        }
    }, [])

    useEffect(() => {
        if (restorePage === router.asPath) {
            const scroll = parseInt(sessionStorage.getItem(scrollKey()), 10)
            window.scrollTo(0, scroll)
        }
    }, [books])


    const booksKey = () => {
        return 'books_key'
    }

    const scrollKey = () => {
        return 'scroll_key'
    }

    return (
        <div style={{
            overflowY: "scroll",
            display: "flex",
            flexFlow: "wrap"
        }}>
            {
                books.map((book) => {
                    return (
                        <div
                            onClick={() => {
                                sessionStorage.setItem(booksKey(), JSON.stringify(books))
                                sessionStorage.setItem(scrollKey(), `${window.scrollY}`)

                                router.push(`/scroll/book/${book.isbn13}`)
                            }}
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                justifyContent: "center",
                                alignItems: "center",
                                height: "400px"
                            }}>
                            <img src={book.image} />
                            <span>{book.title}</span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Scroll;