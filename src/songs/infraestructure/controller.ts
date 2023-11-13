import { Request, Response } from "express";
import { CreateSong } from "../application/create";
import { GetAllSongs } from "../application/getAll";
import { GetSong } from "../application/get";
import { UpdateSong } from "../application/update";
import { DeleteSong } from "../application/delete";


export class SongController {
  constructor(
    private createSong: CreateSong,
    private getAllSongs: GetAllSongs,
    private getSong: GetSong,
    private updateSong: UpdateSong,
    private deleteSong: DeleteSong
  ) {}

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const newSong = await this.createSong.run(data);
      res.status(200).send({ message: "Create song Ok", newSong });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const { title, style } = req.query;
      
      if (title || style) {
        const songs = await this.getAllSongs.run(title, style);
        res.status(200).send(songs);
        return;
      }
      const songs = await this.getAllSongs.run();
      res.status(200).send(songs);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const song = await this.getSong.run(id);
      res.status(200).send({ message: "Get song Ok", song });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const changes = req.body;
      const song = await this.updateSong.run(id, changes);
      res.status(200).send({ message: "Update song Ok", wasSongDeleted: song });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const song = await this.deleteSong.run(id);
      res.status(200).send(song);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}
