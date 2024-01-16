import { NextFunction, Request, Response } from 'express';
import sendResponse from '../../../shared/response';
import { AcademicSemesterService } from './academicSemester.service';

const insertInToDB = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await AcademicSemesterService.insertIntoDB(req);
    sendResponse(res, result);
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  insertInToDB
};
