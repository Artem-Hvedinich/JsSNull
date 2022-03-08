import React, {useCallback, useMemo, useState} from 'react';

export default {
    title: 'UseMemo'
}

// export const DifficultExample = () => {
//
//     const [a, aSet] = useState(5)
//     const [b, bSet] = useState(3)
//
//     let resultA = 1
//     let resultB = 1
//
//     resultA = useMemo(() => {
//         let tempResult = 1
//         for (let i = 1; i <= a; i++) {
//             let fake = 0
//             while (fake < 1000000) {
//                 fake++
//                 const fakeValue = Math.random()
//             }
//             tempResult = tempResult * i
//         }
//         return tempResult
//     }, [a])
//
//
//     for (let i = 1; i <= b; i++) {
//         resultB = resultB * i
//     }
//
//     return (
//         <div>
//             <input value={a} onChange={(e) => aSet(+e.currentTarget.value)}/>
//             <input value={b} onChange={(e) => bSet(+e.currentTarget.value)}/>
//             <hr/>
//             <div>
//                 Result a:{resultA}
//             </div>
//             <div>
//                 Result b:{resultB}
//             </div>
//         </div>
//     );
// };

const HelpsExample = (props: { count: number }) => {
    console.log("COUNTER")
    return <div>{props.count}</div>
}

const UsersSecret = (props: { users: Array<string> }) => {
    console.log("USERS")
    return <div>
        {props.users.map((u, i) => <div key={i}>{u}</div>)}
    </div>
}

const Users = React.memo(UsersSecret)

export const Helps = () => {
    console.log('Help')
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dim', 'Artem', 'Kate'])

    const newArray = useMemo(() => {
        return users.filter(u => u.toLowerCase().indexOf('a') > -1)
    }, [users])

    const addUser = () => {
        const newUsers = [...users, 'Sveta' + new Date().getTime()]
        setUsers(newUsers)

    }


    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            <button onClick={addUser}>add user</button>
            {counter}
            <Users users={newArray}/>
        </>
    )
}

export const LikeUseCalldack = () => {
    console.log('Help')
    const [counter, setCounter] = useState(0)
    const [books, setBooks] = useState(['React', 'JS', 'Css', 'HTML'])

    // const newArray = useMemo(() => {
    //     return books.filter(u => u.toLowerCase().indexOf('a') > -1)
    // }, [books])

// const memoizedAddBook = useMemo(() => {
//         return () => {
//             const newUsers = [...books, 'Angular' + new Date().getTime()]
//             setBooks(newUsers)
//         }
//     }, [books]
// )

    const memoizedAddBook = useCallback(() => {
        console.log(books)
            const newUsers = [...books, 'Angular' + new Date().getTime()]
            setBooks(newUsers)
        }, [books]
    )

    return (
        <>
            <button onClick={() => {
                setCounter(counter + 1)
            }}>+
            </button>
            {counter}
            <Book addBook={memoizedAddBook}/>
        </>
    )
}

type BSPT = {
    addBook: () => void
}


const BooksSecret = (props: BSPT) => {
    console.log("BooksSecret")
    return (
        <div>
            <button onClick={props.addBook}>add book</button>
        </div>
    )
}

const Book = React.memo(BooksSecret)