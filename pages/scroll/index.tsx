import React, { useEffect, useState } from "react";
import { useRouter } from "../../node_modules/next/router";
import axios from "axios";

const Normal = () => {

    interface book {
        image: string,
        isbn: string,

    }

    const [data, setData] = useState<Array<number>>([])
    const [books, setBooks] = useState<Array<book>>([])
    const router = useRouter()

    useEffect(() => {
        axios.get('https://api.itbook.store/1.0/new')
            .then((res) => {
                setBooks(res.data.books)
            })
    }, [])

    return (
        <div style={{
            overflowY: "scroll",
            display: "flex",
            flexFlow: "wrap"
        }}>
            {
                books.map((book) => {
                    return (
                        <div>
                            <img src={book.image} />
                        </div>
                    )
                })
            }
            
            <div style={{
                backgroundColor: "yellowGreen",
                height: "100px",
                padding: "20px"
            }}>
                <button onClick={() => {
                    router.push('/')
                }}>move to home</button>
            </div>
        </div>
    )
}

export default Normal;