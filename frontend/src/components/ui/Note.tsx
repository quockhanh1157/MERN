import { Note as NoteModal } from '@/model/note'
import formatDate from '@/utils/formatDate';

interface NoteProp {
    note: NoteModal
}

export default function Note({ note }: NoteProp) {
    const {
        title,
        text,
        createdAt,
        updatedAt
    } = note

    let createUpdateText: string;
    if (updatedAt > createdAt) {
        createUpdateText = "Updated: " + formatDate(updatedAt)
    } else {
        createUpdateText = "Created: " + formatDate(createdAt)
    }

    return (
        <div className='bg-amber-100 desktop:text-center border border-amber-800 rounded-lg p-4 min-w-[50%] h-36 overflow-hidden cursor-pointer transition-shadow delay-150 hover:shadow-lg hover:scale-110 relative'>
            <div>
                <h2 className='h-10 truncate text-xl font-bold text-start'>{note.title}</h2>
                <p className='whitespace-pre-line text-start text-sm line-clamp-3'>{note.text}</p>
            </div>
            <p className='absolute bottom-0 left-4 '>{createUpdateText}</p>
        </div >
    )
}