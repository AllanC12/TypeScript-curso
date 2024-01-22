import { Request, Response } from "express";

//model
import { MovieModel } from "../models/Movie";

//logger
import Logger from "../../config/logger";

export async function createMovie(req: Request, res: Response) {
  try {
    const data = req.body;
    const movie = await MovieModel.create(data);
    return res.status(201).json(movie);
  } catch (error: any) {
    Logger.error("Erro no sistema: " + error.message);
    res.status(500).json({ error: "Por favor tente mais tarde" });
  }
}

export async function findMovieById(req: Request, res: Response) {
  try {
    const id = req.params.id;
    const movie = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }

    return res.status(200).json(movie);
  } catch (error: any) {
    Logger.error("Erro no sistema: " + error.message);
    return res.status(500).json({ error: "Por favor tente mais tarde" });
  }
}

export async function getAllMovies(req: Request, res: Response) {
  try {
    const movies = await MovieModel.find();
    return res.status(200).json(movies);
  } catch (error: any) {
    Logger.error("Erro no sistema: " + error.message);
    res.status(500).json({ error: "Por favor tente mais tarde" });
  }
}

export async function removieMovie(req: Request, res: Response) {
  try {
    const id = req.params.id;
    console.log(id)

    const movie:any = await MovieModel.findById(id);

    if (!movie) {
      return res.status(404).json({ error: "O filme não existe" });
    }

    await movie.deleteOne()

    return res.status(200).json({ msg: "Filme deletado com sucesso" });
  } catch (error: any) {
    Logger.error("Erro no sistema: " + error.message);
    res.status(500).json({ error: "Por favor tente mais tarde" });
  }
}
