import { Request, Response } from "express";
import { TourRepository } from "../../models/repository/tours/TourRepository";
import { IMessage } from "../../interfaces/IMessage";

const Tour = new TourRepository();

export const getAllTours = async (_: Request, res: Response) => {
  try {
    const tours = await Tour.getAll();
    res.status(200).json({
      message: `Tours founed: ${tours?.length ?? 0}`,
      code: 200,
      status: "OK",
      data: tours,
    } as IMessage<typeof tours>);
  } catch (error) {
    res.status(500).json({
      message: error,
      code: 500,
      status: "ERROR",
      data: null,
    } as IMessage);
  }
};
