import { RequestHandler } from 'express'
import NoteModel from '../model/note'
import createHttpError from 'http-errors';
import mongoose from 'mongoose';

interface NoteBody {
    title?: string,
    text?: string,
}

interface UpdateNoteParams {
    noteId: string
}

export const getNotes: RequestHandler = async (req, res, next) => {
    try {
        const notes = await NoteModel.find().exec()

        res.status(200).json(notes)
    }
    catch (e) {
        next(e)
    }

}

export const getNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId;

    try {
        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid note id")
        }

        const note = await NoteModel.findById(noteId).exec()

        if (!note) {
            throw createHttpError(404, "Note no found")
        }

        res.status(200).json(note)
    }
    catch (e) {
        next(e)
    }

}

export const createNotes: RequestHandler<unknown, unknown, NoteBody, unknown> = async (req, res, next) => {
    const title = req.body.title;
    const text = req.body.text;

    try {
        if (!title) {
            throw createHttpError(400, "Notes must have a title")
        }

        const newNote = await NoteModel.create({
            title: title,
            text: text
        })

        res.status(201).json(newNote)
    }
    catch (e) {
        next(e)
    }
}

export const updateNote: RequestHandler<UpdateNoteParams, unknown, NoteBody, unknown> = async (req, res, next) => {
    const noteId = req.params.noteId;

    const title = req.body.title;
    const text = req.body.text;

    try {
        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid note id")
        }

        if (!title) {
            throw createHttpError(400, "Notes must have a title")
        }

        const note = await NoteModel.findById(noteId).exec()

        if (!note) {
            throw createHttpError(404, "Note not found")
        }
        note.title = title;
        note.text = text;

        const updatedNote = await note.save()

        res.status(200).json(updatedNote)
    }
    catch (e) {
        next(e)
    }
}

export const deleteNote: RequestHandler = async (req, res, next) => {
    const noteId = req.params.noteId

    try {
        if (!mongoose.isValidObjectId(noteId)) {
            throw createHttpError(400, "Invalid note id")
        }

        const note = await NoteModel.findById(noteId).exec();

        if (!note) {
            throw createHttpError(404, "Note not found")
        }

        await note.deleteOne()

        res.sendStatus(204)
    } catch (e) {
        next(e)
    }
}