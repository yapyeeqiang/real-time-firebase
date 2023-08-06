import { database } from '@/firebase'
import { onValue, ref, set } from 'firebase/database'
import { useEffect, useState } from 'react'

function Home() {
    const [likeCount, setLikeCount] = useState(0)

    const likeCountRef = ref(database, 'likes/1')

    useEffect(() => {
        onValue(likeCountRef, (snapshot) => {
            const data = snapshot.val()

            setLikeCount(data.count)

            if ('Notification' in window) {
                Notification.requestPermission().then((permission) => {
                    if (permission === 'granted') {
                        new Notification('Post Liked', {
                            body: 'Someone liked your post!',
                        })
                    }
                })
            }
        })
    }, [])

    const like = async (count: number) => {
        set(ref(database, 'likes/1'), {
            count,
        })
    }

    return (
        <main className="min-h-screen flex justify-center items-center gap-10">
            <h1 className="text-2xl">Likes: {likeCount}</h1>

            <button onClick={() => like(likeCount + 1)} className="bg-blue-500 hover:bg-blue-700 text-white px-5 py-2 rounded-full">
                Like
            </button>
        </main>
    )
}

export default Home
