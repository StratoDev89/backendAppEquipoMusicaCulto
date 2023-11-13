import { Request, Response } from "express";
import { CreateVerse } from "../application/create";
import { GetAllVerses } from "../application/getAll";
import { GetVerse } from "../application/get";
import { UpdateVerse } from "../application/update";
import { DeleteVerse } from "../application/delete";

export class VerseController {
  constructor(
    private createVerse: CreateVerse,
    private getAllVerses: GetAllVerses,
    private getVerse: GetVerse,
    private updateVerse: UpdateVerse,
    private deleteVerse: DeleteVerse
  ) {}

  async create(req: Request, res: Response) {
    try {
      const data = req.body;
      const newVerse = await this.createVerse.run(data);
      res.status(200).send({ message: "Create verse Ok", newVerse });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async getAll(req: Request, res: Response) {
    try {
      const { name } = req.query;

      if (name) {
        const verses = await this.getAllVerses.run(name);
        res.status(200).send(verses);
        return;
      }
      const verses = await this.getAllVerses.run();
      res.status(200).send(verses);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async get(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const verse = await this.getVerse.run(id);
      res.status(200).send({ message: "Get verse Ok", verse });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const changes = req.body;
      const verse = await this.updateVerse.run(id, changes);
      res.status(200).send({ message: "Update verse Ok", wasVerseDeleted: verse });
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const { id } = req.params;
      const verse = await this.deleteVerse.run(id);
      res.status(200).send(verse);
    } catch (error: any) {
      res.status(500).send(error.message);
    }
  }
}
