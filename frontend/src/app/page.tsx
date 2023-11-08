'use client'
import { Note as NoteModal } from '@/model/note'
import { useEffect, useState } from 'react'
import Note from '@/components/ui/Note'
import Bounded from '@/components/ui/Bounded'
import {
  useQuery,
} from '@tanstack/react-query'
import { log } from 'console'

export default function Home() {
  const [notes, setNotes] = useState<NoteModal[]>([])

  useEffect(() => {
    async function loadNotes() {
      try {
        const response = await fetch("/api/notes", {
          method: "GET"
        })
        setNotes(await response.json())
      } catch (e) {
        console.error(e)
      }
    }
    loadNotes()
  }, [])

  return (
    <Bounded>
      <div className='grid gap-3 desktop:grid-cols-3 tablet:grid-cols-2 grid-cols-1'>
        {notes.map((note) => (
          <Note key={note._id} note={note} />
        ))}
      </div>
    </Bounded>
  )
}
